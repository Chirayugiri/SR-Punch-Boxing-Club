import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CONFIG } from "@/config/constants";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundPosition: "center 30px",
          filter: "contrast(1.25) brightness(0.9) grayscale(0.3)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />

      {/* Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="font-display font-black text-[20vw] md:text-[30vw] text-foreground/[0.03] leading-none uppercase">
          {CONFIG.BUSINESS_NAME.split(' ')[1] || CONFIG.BUSINESS_NAME}
        </span>
      </div>

      {/* Content */}
      <div className="container px-4 md:px-6 relative z-10 text-center pt-20">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.2, 1, 0.3, 1] }}
          className="text-primary font-body text-xs md:text-sm uppercase tracking-[0.3em] mb-6"
        >
          {CONFIG.BUSINESS_NAME} — Vasai West
        </motion.p>


        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.2, 1, 0.3, 1] }}
          className="font-display font-black italic uppercase text-foreground leading-[0.95] tracking-tight"
          style={{ fontSize: "clamp(1.8rem, 8vw, 6rem)", textWrap: "balance" }}
        >
          Power is Earned.
          <br />
          <span className="text-gradient">Discipline is Built.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25, ease: [0.2, 1, 0.3, 1] }}
          className="mt-6 text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto font-body"
        >
          The premier destination for Professional Boxing Training in Vasai West.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4, ease: [0.2, 1, 0.3, 1] }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center px-4"
        >
          <a href="#contact" className="w-full sm:w-auto">
            <Button variant="strike" size="lg" className="w-full">
              Join the Ranks
            </Button>
          </a>
          <a href="#classes" className="w-full sm:w-auto">
            <Button variant="outline" size="lg" className="w-full">
              View Classes
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
