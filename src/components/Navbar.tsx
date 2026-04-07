import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { CONFIG, CONTACT_LINKS } from "@/config/constants";

const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Trainer", href: "/trainer" },
  { label: "Achievements", href: "/achievements" },
  { label: "Performers", href: "/performers" },
  { label: "Events", href: "/events" },
  { label: "Plans", href: "/#plans" },
  { label: "Contact", href: "/#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (location.hash) {
        const id = location.hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          const offset = window.innerWidth < 768 ? 80 : 100;
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = element.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }
    };

    // Minor delay to ensure page elements are rendered
    const timeoutId = setTimeout(handleScroll, 100);
    return () => clearTimeout(timeoutId);
  }, [location.pathname, location.hash]);

  const handleNavLinkClick = (href: string) => {
    setIsOpen(false);
    
    // Manual scroll for same-page links to ensure they trigger even if hash is same
    if (href.startsWith("/#") && location.pathname === "/") {
      const id = href.replace("/#", "");
      const element = document.getElementById(id);
      if (element) {
        const offset = window.innerWidth < 768 ? 80 : 100;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  };

  const isActive = (href: string) => {
    if (href.startsWith("/#")) {
      return location.pathname === "/" && location.hash === href.replace("/", "");
    }
    return location.pathname === href;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-foreground/[0.08]">
      <div className="container px-4 md:px-6 flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="font-display font-black text-lg tracking-tight">

          {CONFIG.BUSINESS_NAME.split(' ')[0]} <span className="text-primary">{CONFIG.BUSINESS_NAME.split(' ')[1]}</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => handleNavLinkClick(link.href)}
              className={`text-xs font-medium transition-colors duration-200 uppercase tracking-wider ${
                isActive(link.href) ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>

          ))}
          <a href={CONTACT_LINKS.PHONE}>
            <Button variant="strike" size="sm" className="gap-2 text-xs">
              <Phone className="w-3.5 h-3.5" />
              Call Now
            </Button>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-foreground p-2"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-background border-b border-foreground/[0.08] overflow-hidden"
          >
            <div className="container py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => handleNavLinkClick(link.href)}
                  className={`text-base font-medium transition-colors py-2 uppercase tracking-wider ${
                    isActive(link.href) ? "text-primary" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>

              ))}
              <a href={CONTACT_LINKS.PHONE} className="mt-2">
                <Button variant="strike" className="w-full gap-2 text-xs">
                  <Phone className="w-4 h-4" />
                  Call Now
                </Button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;


