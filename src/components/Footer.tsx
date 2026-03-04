import logo from "@/assets/ricekids-logo.png";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <img src={logo} alt="Rice Kids Logo" className="h-16 w-auto mb-4 brightness-0 invert" />
            <p className="font-body text-sm text-background/60 leading-relaxed">
              Enabling pathways from poverty to prosperity via education for communities marginalized due to racial, economic, and social inequity.
            </p>
          </div>
          <div>
            <h4 className="font-display text-lg font-bold text-background mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {["Home", "About Us", "Projects", "News & Media", "Donate"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`}
                  className="font-body text-sm text-background/60 hover:text-primary transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-display text-lg font-bold text-background mb-4">Contact</h4>
            <p className="font-body text-sm text-background/60 mb-2">
              Rice Kids is tax-exempt under the IRS 501(c)(3) classification.
            </p>
            <a
              href="https://www.ricekids.org"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-sm text-primary hover:underline"
            >
              www.ricekids.org
            </a>
          </div>
        </div>
        <div className="border-t border-background/10 pt-8 text-center">
          <p className="font-body text-xs text-background/40 flex items-center justify-center gap-1">
            Made with <Heart className="w-3 h-3 text-primary" /> for Rice Kids
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
