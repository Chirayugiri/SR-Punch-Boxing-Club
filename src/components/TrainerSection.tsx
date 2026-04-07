import { motion } from "framer-motion";
import { Award, BookOpen, Clock, Zap } from "lucide-react";
import headCoachImg from "@/assets/gallery1.jpeg";

const trainer = {
  name: "Shravan Rajbhar",
  role: "Founder & Head Coach",
  experience: "12+ Years Professional Boxing",
  philosophy: "Boxing isn't just about the punch; it's about the discipline, the heart, and the relentless pursuit of self-improvement. We don't just build fighters; we build character.",
  certifications: [
    "AIBA Certified Coach",
    "National Level Boxing Medalist",
    "Professional Fitness Trainer (Certified)",
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
    <section id="trainer" className="section-spacing bg-secondary/20 overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Trainer Image Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.2, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative z-10 p-3 border border-primary/30 max-w-md mx-auto">
              <div className="aspect-[3/4] overflow-hidden grayscale contrast-[1.1] brightness-90">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              
              {/* Name Plate */}
              <div className="absolute -bottom-6 -right-4 md:-right-10 bg-primary px-6 md:px-8 py-4 md:py-5 shadow-2xl">
                <h3 className="font-display font-black italic uppercase text-lg md:text-2xl text-foreground leading-none tracking-tight">
                  {trainer.name}
                </h3>
                <p className="font-body text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold mt-2 text-foreground/80">
                  {trainer.role}
                </p>
              </div>
            </div>
            
            {/* Background Accent Lines */}
            <div className="absolute top-20 -left-10 w-40 h-40 border-l-2 border-t-2 border-primary/20 pointer-events-none" />
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.2, 1, 0.3, 1] }}
          >
            <p className="text-primary font-body text-xs md:text-sm uppercase tracking-[0.4em] font-bold mb-4">
              EXPERT LEADERSHIP
            </p>
            <h2 className="font-display font-black uppercase text-3xl md:text-5xl leading-[0.95] tracking-tight mb-8">
              TRAIN WITH <span className="text-gradient">THE BEST</span>
            </h2>
            
            <p className="text-muted-foreground text-sm md:text-base italic leading-relaxed mb-10 border-l-4 border-primary/30 pl-6 font-body">
              "{trainer.philosophy}"
            </p>

            <div className="space-y-8">
              {/* Experience & Certs */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 flex items-center justify-center border border-primary/20">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-primary font-bold">Experience</p>
                    <p className="text-sm md:text-base font-display font-bold uppercase">{trainer.experience}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 flex items-center justify-center border border-primary/20">
                    <Award className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-primary font-bold">Certification Highlights</p>
                    <p className="text-sm md:text-base font-display font-bold uppercase">{trainer.certifications[0]}</p>
                  </div>
                </div>
              </div>

              {/* Achievements List */}
              <div className="grid sm:grid-cols-1 gap-3">
                {trainer.achievements.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 glass-card border-none bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
                    <Zap className="w-4 h-4 text-primary shrink-0 mt-1" />
                    <span className="text-xs md:text-sm font-body font-medium text-foreground/90 uppercase tracking-tight">
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
