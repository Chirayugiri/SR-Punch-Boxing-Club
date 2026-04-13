import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTACT_LINKS } from "@/config/constants";
import FreeTrialModal from "./FreeTrialModal";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Programs", href: "#plans" },
  { name: "Trainer", href: "#trainer" },
  { name: "Gallery", href: "#gallery" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled 
            ? "py-4 glass-card border-b border-white/5" 
            : "py-8 bg-transparent"
        }`}
      >
        <div className="container px-4 md:px-6 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-primary flex items-center justify-center group-hover:glow-red transition-all duration-300">
              <span className="font-display font-black text-xl italic text-foreground">S</span>
            </div>
            <span className="font-display font-black uppercase text-xl md:text-2xl tracking-tighter">
              SR <span className="text-primary italic">PUNCH</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-display font-bold text-[10px] uppercase tracking-[0.25em] text-foreground/80 hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
            <FreeTrialModal>
              <Button variant="strike" className="px-8 h-12 text-[10px] tracking-[0.2em]">
                BOOK TRIAL
              </Button>
            </FreeTrialModal>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground"
          >
            {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-0 z-40 lg:hidden glass-card bg-[#0d0d0d]/95 backdrop-blur-2xl p-10 flex flex-col justify-center gap-12"
            >
              <div className="flex flex-col gap-8 text-center">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="font-display font-black text-3xl uppercase tracking-tighter hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
              <FreeTrialModal>
                <Button variant="strike" className="w-full py-8 text-lg tracking-[0.2em]">
                  BOOK FREE TRIAL
                </Button>
              </FreeTrialModal>
              <div className="flex justify-center gap-8 mt-4">
                 <a href={CONTACT_LINKS.WHATSAPP()} className="text-primary hover:glow-red uppercase font-display font-bold text-[10px] tracking-widest">WhatsApp</a>
                 <a href={CONTACT_LINKS.PHONE} className="text-primary hover:glow-red uppercase font-display font-bold text-[10px] tracking-widest">Call Now</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Mobile Sticky Call CTA */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: scrolled ? 0 : 100 }}
        className="fixed bottom-6 left-6 right-6 z-[60] lg:hidden"
      >
        <FreeTrialModal>
            <Button variant="strike" className="w-full h-16 text-xs tracking-[0.25em] shadow-2xl">
              🥊 CLAIM FREE TRIAL
            </Button>
        </FreeTrialModal>
      </motion.div>
    </>
  );
};

export default Navbar;
