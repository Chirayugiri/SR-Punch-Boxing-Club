import { Link } from "react-router-dom";
import { Instagram, Facebook, Youtube, Twitter } from "lucide-react";
import { CONFIG, CONTACT_LINKS } from "@/config/constants";

const Footer = () => {
  return (
    <footer className="border-t border-foreground/[0.08] py-12">
      <div className="container px-4 md:px-6">

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Brand */}
          <div>
            <Link to="/" className="font-display font-black text-xl tracking-tight uppercase">
              {CONFIG.BUSINESS_NAME.split(' ')[0]} <span className="text-primary">{CONFIG.BUSINESS_NAME.split(' ')[1]}</span>
            </Link>
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
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-muted-foreground text-sm hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
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
            <a href={CONTACT_LINKS.PHONE} className="text-primary text-sm font-bold mt-2 block hover:underline">
              {CONFIG.COUNTRY_CODE} {CONFIG.PHONE_NUMBER}
            </a>

            <div className="flex gap-4 mt-6">
              {[
                { Icon: Instagram, href: CONFIG.SOCIAL.INSTAGRAM },
                { Icon: Facebook, href: CONFIG.SOCIAL.FACEBOOK },
                { Icon: Youtube, href: "#" },
                { Icon: Twitter, href: "#" }
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Social media"
                  target={href !== "#" ? "_blank" : undefined}
                  rel={href !== "#" ? "noopener noreferrer" : undefined}
                >
                  <Icon className="w-5 h-5" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-foreground/[0.05] pt-8 text-center">
          <p className="text-muted-foreground text-xs uppercase tracking-widest">
            © {new Date().getFullYear()} {CONFIG.BUSINESS_NAME}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


