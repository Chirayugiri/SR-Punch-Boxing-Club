import { Instagram, Facebook, Youtube, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-foreground/[0.08] py-12">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Brand */}
          <div>
            <a href="/" className="font-display font-black text-xl tracking-tight">
              SR <span className="text-primary">PUNCH</span>
            </a>
            <p className="text-muted-foreground text-sm mt-4 leading-relaxed">
              The technical standard for Professional Boxing & Fitness Training in Vasai West, Palghar.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-wider mb-4 text-foreground">
              Quick Links
            </h4>
            <div className="flex flex-col gap-2">
              {[
                { label: "About", href: "/#about" },
                { label: "Trainer", href: "/trainer" },
                { label: "Classes", href: "/#classes" },
                { label: "Achievements", href: "/achievements" },
                { label: "Performers", href: "/performers" },
                { label: "Events", href: "/events" },
                { label: "Schedule", href: "/#schedule" },
                { label: "Reviews", href: "/#reviews" },
                { label: "FAQ", href: "/#faq" },
                { label: "Contact", href: "/#contact" }
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-muted-foreground text-sm hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-wider mb-4 text-foreground">
              Contact
            </h4>
            <address className="text-muted-foreground text-sm not-italic leading-relaxed">
              Parnaka-Vasai West
              <br />
              Palghar, Maharashtra 401201
            </address>
            <a href="tel:+919307204061" className="text-primary text-sm font-bold mt-2 block hover:underline">
              +91 9307204061
            </a>

            <div className="flex gap-4 mt-6">
              {[Instagram, Facebook, Youtube, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href={Icon === Instagram ? "https://www.instagram.com/sr.punch/" : "#"}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Social media"
                  target={Icon === Instagram ? "_blank" : undefined}
                >
                  <Icon className="w-5 h-5" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-foreground/[0.05] pt-8 text-center">
          <p className="text-muted-foreground text-xs">
            © {new Date().getFullYear()} SR PUNCH. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

