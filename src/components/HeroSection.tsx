import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CONFIG, CONTACT_LINKS } from "@/config/constants";
import FreeTrialModal from "@/components/FreeTrialModal";
import heroBg from "@/assets/hero-bg.jpg";
import { Star, Users, ShieldCheck } from "lucide-react";

const trustSignals = [
  { icon: Star, value: "4.9", label: "Reviews" },
  { icon: Users, value: "500+", label: "Fighters" },
  { icon: ShieldCheck, value: "AIBA", label: "Certified" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-background">
      {/* Background with Tactical Grayscale */}
      <div
        className="absolute inset-0 bg-cover bg-center img-grayscale-tactical"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundPosition: "center 25%",
        }}
      />

      {/* Extreme Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent" />
      
      {/* Red Heat Map Glows */}
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[100vw] h-[400px] bg-primary/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-1/4 -left-1/4 w-[50vw] h-[50vw] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Monolith Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="font-display font-black text-[30vw] text-white/[0.02] leading-none uppercase tracking-tighter">
          STRIKE
        </span>
      </div>

      {/* Content Container */}
      <div className="container px-4 md:px-6 relative z-10 text-center pt-32 pb-20">
        
        {/* Urgency Badge (Editorial Style) */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.2, 1, 0.3, 1] }}
          className="mb-10 flex justify-center"
        >
          <div className="bg-primary/10 border border-primary/30 text-primary px-4 py-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="label-tactical !text-[10px] md:!text-xs">3 Trial Spots Left This Week</span>
          </div>
        </motion.div>

        {/* EYEBROW */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="label-tactical mb-4"
        >
          {CONFIG.BUSINESS_NAME} — Vasai West
        </motion.p>

        {/* MAIN HEADLINE (Editorial Brutalist Type) */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.2, 1, 0.3, 1] }}
          className="font-display font-black italic uppercase text-foreground leading-[0.88] tracking-tighter mb-8"
          style={{ fontSize: "clamp(2.5rem, 11vw, 8.5rem)", textWrap: "balance" }}
        >
          NO EXCUSES.
          <br />
          <span className="text-gradient">ONLY RESULTS.</span>
        </motion.h1>

        {/* SUBHEADLINE */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 text-muted-foreground text-base md:text-xl max-w-2xl mx-auto font-body leading-relaxed md:tracking-wide"
        >
          The premier destination for Professional Boxing Training. 
          Step into the monolith and forge your peak performance.
        </motion.p>

        {/* ACTION BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="mt-12 flex flex-col sm:flex-row gap-5 justify-center items-center"
        >
          <FreeTrialModal>
            <Button variant="strike" size="lg" className="h-16 px-12 text-sm md:text-base tracking-[0.25em]">
              🥊 BOOK FREE TRIAL
            </Button>
          </FreeTrialModal>
          <a href="#plans" className="w-full sm:w-auto">
            <Button variant="outline" size="lg" className="h-16 px-12 text-sm md:text-base tracking-[0.25em] w-full">
              VIEW PROGRAMS
            </Button>
          </a>
        </motion.div>

        {/* TRUST SIGNALS (Technical Display) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-20 flex items-center justify-center gap-10 md:gap-20 border-t border-white/5 pt-12"
        >
          {trustSignals.map((s, i) => (
            <div key={i} className="flex flex-col items-center gap-1">
              <span className="font-display font-black text-2xl md:text-3xl text-foreground">
                {s.value}
              </span>
              <span className="label-tactical !text-[9px]">
                {s.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Kinetic Scroll Line */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-0 right-10 w-[1px] h-32 bg-gradient-to-t from-primary to-transparent hidden md:block"
      />
    </section>
  );
};

export default HeroSection;
