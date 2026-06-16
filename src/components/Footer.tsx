import logo from "@/assets/ricekids-logo.png";
import { Facebook, Heart, Instagram, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com/teamricekids", icon: Facebook },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/ricekids/", icon: Linkedin },
  { label: "Twitter", href: "https://twitter.com/teamricekids", icon: Twitter },
  { label: "Instagram", href: "https://www.instagram.com/teamricekids/", icon: Instagram },
];

const footerLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about-us" },
  { label: "Projects", to: "/projects" },
  { label: "News & Media", to: "/news-media" },
];

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
              {footerLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className="font-body text-sm text-background/60 hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://www.paypal.com/donate/?hosted_button_id=DH3NT9K8M2JG6"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-sm text-background/60 hover:text-primary transition-colors"
              >
                Donate
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-display text-lg font-bold text-background mb-4">Get In Touch</h4>
            <p className="font-body text-sm text-background/60 mb-2 leading-relaxed">
              <span className="text-background/80">Address:</span> 2 Manor Hill Dr Bernardsville NJ 07924
            </p>
            <p className="font-body text-sm text-background/60 mb-4 leading-relaxed">
              <span className="text-background/80">Email:</span>{" "}
              <a
                href="mailto:teamricekids@gmail.com"
                className="text-primary no-underline hover:underline"
              >
                teamricekids(at)gmail.com
              </a>
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center text-background/70 hover:text-primary hover:bg-background/20 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-background/10 pt-4 text-center">
          <p className="font-body text-[11px] text-background/40 flex items-center justify-center gap-1 leading-none">
            Made with <Heart className="w-2.5 h-2.5 text-primary" /> for Rice Kids
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
