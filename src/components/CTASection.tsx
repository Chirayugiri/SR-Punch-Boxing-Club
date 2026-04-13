import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import FreeTrialModal from "@/components/FreeTrialModal";

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
          <div className="inline-block bg-primary/10 border border-primary/20 text-primary uppercase tracking-widest text-xs font-bold px-4 py-1.5 mb-6">
            🔥 Limited Offer: 3 Trial Spots Left This Week
          </div>
          <h2
            className="font-display font-black italic uppercase leading-[0.95] tracking-tight mb-6 text-3xl md:text-5xl"
          >
            Start Your Boxing
            <br />
            <span className="text-gradient">Journey Today</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10">
            Take the first step. Claim your free 1-day pass and experience the SR PUNCH difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div>
              <FreeTrialModal>
                <Button variant="strike" size="lg" className="w-full">
                  Claim Free Trial Pass
                </Button>
              </FreeTrialModal>
            </div>
            <a href="#contact">
              <Button variant="outline" size="lg" className="w-full">
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
