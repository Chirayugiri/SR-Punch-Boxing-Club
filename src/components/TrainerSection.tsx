import { motion } from "framer-motion";
import { Award, Clock, Zap } from "lucide-react";
import headCoachImg from "@/assets/gallery1.jpeg";

const trainer = {
  name: "Shravan Rajbhar",
  role: "Founder & Head Coach",
  experience: "12+ Years Pro",
  philosophy: "Boxing isn't just about the punch; it's about the discipline, the heart, and the relentless pursuit of self-improvement. We don't just build fighters; we build character.",
  certifications: [
    "AIBA Certified Coach",
    "National Level Boxing Medalist",
    "Professional Fitness Trainer",
    "Self-Defense Expert",
  ],
  achievements: [
    "Founder of SR Punch Boxing Club",
    "Trained 500+ students in Vasai West",
    "Coached multiple State-level medalists",
    "Lead Trainer for Mumbai Inter-Club Championship",
  ],
  image: headCoachImg,
};

const TrainerSection = () => {
  return (
    <section id="trainer" className="section-spacing bg-secondary/10 overflow-hidden relative">
      {/* Decorative BG element */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-48 h-[1px] bg-primary/20" />

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-16 lg:gap-24 items-center">
          
          {/* Trainer Image (Kinetic Frame) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.2, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative z-10 p-3 bg-white/5">
              <div className="overflow-hidden aspect-[3/4]">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-full object-cover img-grayscale-tactical contrast-[1.15]"
                />
              </div>

              {/* Name Plate (Brutalist) */}
              <div className="absolute -bottom-6 -right-4 md:-right-10 bg-primary px-10 py-5">
                <h3 className="font-display font-black italic uppercase text-2xl text-foreground leading-none tracking-tighter">
                  {trainer.name}
                </h3>
                <p className="label-tactical !text-[9px] mt-2 !text-foreground/90">
                  {trainer.role}
                </p>
              </div>
            </div>

            {/* Background Accent Lines */}
            <div className="absolute -top-10 -left-10 w-40 h-40 border-l border-t border-primary/20 pointer-events-none" />
          </motion.div>

          {/* Content (Editorial Type) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.2, 1, 0.3, 1] }}
          >
            <p className="label-tactical mb-6">Expert Leadership</p>
            <h2 className="font-display font-black uppercase text-4xl md:text-6xl leading-[0.9] tracking-tighter mb-10">
              TRAIN WITH
              <br />
              <span className="text-gradient">THE BEST</span>
            </h2>

            <div className="mb-12 border-l-4 border-primary pl-8">
              <p className="text-foreground/80 text-sm md:text-lg italic leading-relaxed font-body italic">
                "{trainer.philosophy}"
              </p>
            </div>

            <div className="space-y-10">
              {/* Experience & Certs (Tactical Tiles) */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-4 p-5 bg-white/[0.03]">
                  <div className="w-12 h-12 bg-primary/10 flex items-center justify-center border border-primary/20">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="label-tactical !text-[8px] mb-1">Experience</p>
                    <p className="text-sm font-display font-black uppercase">{trainer.experience}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-5 bg-white/[0.03]">
                  <div className="w-12 h-12 bg-primary/10 flex items-center justify-center border border-primary/20">
                    <Award className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="label-tactical !text-[8px] mb-1">Status</p>
                    <p className="text-sm font-display font-black uppercase">National Medalist</p>
                  </div>
                </div>
              </div>

              {/* Achievements (Horizontal List) */}
              <div className="grid grid-cols-1 gap-3">
                {trainer.achievements.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-4 hover:bg-white/[0.02] transition-colors border-b border-white/5 last:border-none">
                    <Zap className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-xs md:text-sm font-display font-bold uppercase tracking-widest text-foreground/80">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrainerSection;
