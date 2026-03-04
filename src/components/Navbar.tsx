import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/ricekids-logo.png";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "News & Media", href: "#news" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        <a href="#home" className="flex items-center gap-2">
          <img src={logo} alt="Rice Kids Logo" className="h-14 w-auto" />
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-body text-sm font-semibold tracking-wide text-foreground/80 hover:text-primary transition-colors uppercase"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#donate"
            className="bg-gradient-warm text-primary-foreground px-6 py-2.5 rounded-full font-body font-bold text-sm tracking-wide hover:opacity-90 transition-opacity"
          >
            Donate
          </a>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-card border-b border-border overflow-hidden"
          >
            <div className="flex flex-col px-6 py-4 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-body text-sm font-semibold tracking-wide text-foreground/80 hover:text-primary uppercase"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#donate"
                onClick={() => setOpen(false)}
                className="bg-gradient-warm text-primary-foreground px-6 py-2.5 rounded-full font-body font-bold text-sm tracking-wide text-center"
              >
                Donate
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
