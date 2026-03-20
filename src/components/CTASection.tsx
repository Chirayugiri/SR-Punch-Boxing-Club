import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="section-spacing relative overflow-hidden">
      {/* Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]" />
      </div>

      <div className="container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.2, 1, 0.3, 1] }}
        >
          <h2
            className="font-display font-black italic uppercase leading-[0.95] tracking-tight mb-6"
            style={{ fontSize: "clamp(2rem, 6vw, 4.5rem)" }}
          >
            Start Your Boxing
            <br />
            <span className="text-gradient">Journey Today</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10">
            Take the first step. Book a trial class and experience the SR PUNCH difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact">
              <Button variant="strike" size="lg">
                Book Trial Class
              </Button>
            </a>
            <a href="#contact">
              <Button variant="outline" size="lg">
                Contact Us
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
