import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const srcDir = path.join(root, "src");
const imagesDir = path.join(root, "public", "images");
const docsDir = path.join(root, "public", "docs");

const IMAGE_EXT = /\.(jpe?g|png|webp|gif)$/i;
const URL_RE =
  /https:\/\/www\.ricekids\.org\/wp-content\/uploads\/[^"'\s)]+/g;

function walk(dir, files = []) {
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    if (fs.statSync(full).isDirectory()) files.push(...walk(full, []));
    else if (/\.(tsx?|jsx?)$/.test(name)) files.push(full);
  }
  return files;
}

function collectUrls() {
  const images = new Set();
  const pdfs = new Set();
  for (const file of walk(srcDir)) {
    const text = fs.readFileSync(file, "utf8");
    for (const url of text.match(URL_RE) ?? []) {
      if (/\.pdf$/i.test(url)) pdfs.add(url);
      else if (IMAGE_EXT.test(url)) images.add(url);
    }
  }
  return { images: [...images], pdfs: [...pdfs] };
}

function localName(url) {
  return decodeURIComponent(url.split("/").pop());
}

async function download(url, destDir, retries = 3) {
  const name = localName(url);
  const dest = path.join(destDir, name);
  if (fs.existsSync(dest) && fs.statSync(dest).size > 0) {
    return { url, name, status: "skipped" };
  }
  let lastError;
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const res = await fetch(url, {
        headers: { "User-Agent": "kiddo-charm-hub-asset-sync/1.0" },
        signal: AbortSignal.timeout(120000),
      });
      if (!res.ok) {
        lastError = { status: "failed", code: res.status };
        continue;
      }
      const buf = Buffer.from(await res.arrayBuffer());
      fs.writeFileSync(dest, buf);
      return { url, name, status: "ok", bytes: buf.length };
    } catch (e) {
      lastError = { status: "error", error: e.message };
      if (attempt < retries) await new Promise((r) => setTimeout(r, 2000 * attempt));
    }
  }
  return { url, name, ...lastError };
}

async function main() {
  fs.mkdirSync(imagesDir, { recursive: true });
  fs.mkdirSync(docsDir, { recursive: true });

  const { images, pdfs } = collectUrls();
  console.log(`Found ${images.length} images, ${pdfs.length} PDFs`);

  const results = [];
  for (const url of images) {
    process.stdout.write(`Image: ${localName(url)}... `);
    try {
      const r = await download(url, imagesDir);
      console.log(r.status);
      results.push(r);
    } catch (e) {
      console.log("error", e.message);
      results.push({ url, status: "error", error: e.message });
    }
  }

  for (const url of pdfs) {
    process.stdout.write(`PDF: ${localName(url)}... `);
    try {
      const r = await download(url, docsDir);
      console.log(r.status);
    } catch (e) {
      console.log("error", e.message);
    }
  }

  const failed = results.filter((r) => r.status === "failed" || r.status === "error");
  if (failed.length) {
    console.log("\nFailed downloads:");
    failed.forEach((f) => console.log(`  ${f.url} (${f.code ?? f.error})`));
    process.exitCode = 1;
  }

  // Rewrite src files: images -> /images/, pdfs -> /docs/
  for (const file of walk(srcDir)) {
    let text = fs.readFileSync(file, "utf8");
    const before = text;
    for (const url of images) {
      const local = `/images/${localName(url)}`;
      text = text.split(url).join(local);
    }
    for (const url of pdfs) {
      const local = `/docs/${localName(url)}`;
      text = text.split(url).join(local);
    }
    if (text !== before) {
      fs.writeFileSync(file, text);
      console.log(`Updated ${path.relative(root, file)}`);
    }
  }
}

main();
