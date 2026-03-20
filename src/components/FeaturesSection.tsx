import { motion } from "framer-motion";
import whyTrainImg from "@/assets/why-train.png";

const features = [
  { id: "01", text: "Real Boxing Environment" },
  { id: "02", text: "High-Intensity Workouts" },
  { id: "03", text: "Builds Confidence & Toughness" },
  { id: "04", text: "Improves Stamina & Strength" },
  { id: "05", text: "Practical Self-Defense" },
];

const FeaturesSection = () => {
  return (
    <section id="why-us" className="section-spacing bg-background overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
          {/* Left Column: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.2, 1, 0.3, 1] }}
          >
            <p className="text-primary font-body text-xs md:text-sm uppercase tracking-[0.4em] font-bold mb-4">
              WHY SR PUNCH
            </p>
            <h2 className="font-display font-black uppercase text-3xl md:text-5xl leading-[0.95] tracking-tight mb-10">
              WHY TRAIN
              <br />
              <span className="text-gradient">HERE?</span>
            </h2>

            <div className="flex flex-col">
              {features.map((f, i) => (
                <div
                  key={i}
                  className="group flex items-center gap-5 py-4 border-t border-foreground/[0.08] last:border-b last:border-foreground/[0.08] transition-colors hover:bg-white/[0.01]"
                >
                  <span className="font-display font-black text-primary text-lg md:text-xl opacity-80 group-hover:opacity-100 transition-opacity">
                    {f.id}
                  </span>
                  <span className="font-display font-bold text-xs md:text-base uppercase tracking-tight text-foreground/90 group-hover:text-foreground transition-colors leading-none">
                    {f.text}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Media */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.2, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Red Border Frame */}
            <div className="relative p-2 border border-primary/40 max-w-md mx-auto lg:ml-auto">
              <div className="relative overflow-hidden aspect-[4/5]">
                <img
                  src={whyTrainImg}
                  alt="Boxer in training"
                  className="w-full h-full object-cover grayscale brightness-90 transition-all duration-700 hover:scale-105 hover:grayscale-0"
                />

                {/* Overlay for Quote Visibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />

                {/* Quote */}
                <div className="absolute bottom-8 left-0 right-0 px-8 text-left">
                  <p className="font-display italic font-black text-xl md:text-2xl text-foreground tracking-tight">
                    "The ring doesn't lie."
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
