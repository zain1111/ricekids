import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const imagesDir = path.join(__dirname, "..", "public", "images");

const shareLinks = [
  {
    name: "advancing-learning-essential-resources-1.jpg",
    url: "https://photos.app.goo.gl/vQtSnttPnASKRNYL7",
  },
  {
    name: "advancing-learning-essential-resources-2.jpg",
    url: "https://photos.app.goo.gl/E1HBQb7UcHYhRHf76",
  },
  {
    name: "advancing-learning-essential-resources-3.jpg",
    url: "https://photos.app.goo.gl/xZxZQh5257maS4x2A",
  },
];

async function getPhotoUrl(shareUrl) {
  const r = await fetch(shareUrl, {
    redirect: "follow",
    headers: { "User-Agent": "Mozilla/5.0" },
  });
  const html = await r.text();
  const match = html.match(
    /https:\/\/lh3\.googleusercontent\.com\/pw\/[A-Za-z0-9_-]+/
  );
  if (!match) throw new Error(`No image URL found for ${shareUrl}`);
  return `${match[0]}=w1200-no`;
}

fs.mkdirSync(imagesDir, { recursive: true });

for (const photo of shareLinks) {
  process.stdout.write(`Downloading ${photo.name}... `);
  try {
    const imageUrl = await getPhotoUrl(photo.url);
    const res = await fetch(imageUrl, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
        Referer: "https://photos.google.com/",
      },
      redirect: "follow",
    });
    if (!res.ok) {
      console.log(`failed (${res.status})`);
      process.exitCode = 1;
      continue;
    }
    const buf = Buffer.from(await res.arrayBuffer());
    fs.writeFileSync(path.join(imagesDir, photo.name), buf);
    console.log(`ok (${Math.round(buf.length / 1024)} KB)`);
  } catch (e) {
    console.log(`error (${e.message})`);
    process.exitCode = 1;
  }
}
