import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import FreeTrialModal from "./FreeTrialModal";

const CTASection = () => {
  return (
    <section id="contact" className="section-spacing bg-background relative overflow-hidden">
      {/* Red Heat Map (Extreme) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-primary/20 blur-[180px] rounded-full pointer-events-none" />

      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="label-tactical mb-8">Final Directive</p>
            <h2 className="font-display font-black uppercase text-5xl md:text-8xl leading-none tracking-tighter mb-10">
              TIME TO <span className="text-gradient">STRIKE.</span>
            </h2>
            
            <p className="text-muted-foreground text-lg md:text-2xl mb-16 font-body max-w-2xl mx-auto leading-relaxed">
              Spots in our elite training program are limited. 
              Claim your spot in the arena today and start your transformation.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <FreeTrialModal>
                <Button variant="strike" size="lg" className="h-20 px-16 text-sm md:text-base tracking-[0.3em] glow-red-strong">
                  🥊 BOOK FREE TRIAL
                </Button>
              </FreeTrialModal>
            </div>

            {/* Scarcity Signaling */}
            <div className="mt-12 flex items-center justify-center gap-6">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="label-tactical !text-[10px]">Limited Membership Open</span>
              </div>
              <div className="w-[1px] h-4 bg-white/10" />
              <div className="label-tactical !text-[10px] !text-muted-foreground">Vasai West HQ</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
