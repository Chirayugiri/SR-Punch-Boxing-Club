import { motion } from "framer-motion";
import { Flame, Dumbbell, Zap, Target } from "lucide-react";

const classes = [
  {
    name: "Boxing Classes",
    level: "All Levels",
    icon: Target,
    description: "Master the sweet science with professional coaching focusing on technique, footwork, and tactical striking.",
  },
  {
    name: "Strength & Conditioning",
    level: "Advanced",
    icon: Dumbbell,
    description: "Build explosive power and functional strength through specialized routines designed for peak performance.",
  },
  {
    name: "Cardio Workouts",
    level: "Intermediate",
    icon: Zap,
    description: "High-intensity sessions combining boxing drills and cardiovascular exercises to torch calories and build stamina.",
  },
  {
    name: "Functional Training",
    level: "All Levels",
    icon: Flame,
    description: "A diverse range of training focused on mobility, core strength, and overall athletic development for all ages.",
  },
];

const levelColor: Record<string, string> = {
  "All Levels": "text-accent",
  Advanced: "text-primary",
  Intermediate: "text-accent",
  Pro: "text-primary",
};

const ClassesSection = () => {
  return (
    <section id="classes" className="section-spacing">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.2, 1, 0.3, 1] }}
          className="mb-16"
        >
          <p className="text-primary font-body text-sm uppercase tracking-[0.3em] mb-4">
            Programs
          </p>
          <h2 className="font-display font-black uppercase text-3xl md:text-5xl tracking-tight">
            Choose Your <span className="text-gradient">Path</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4">
          {classes.map((cls, i) => (
            <motion.div
              key={cls.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06, ease: [0.2, 1, 0.3, 1] }}
              className="glass-card-hover p-8 group cursor-default"
            >
              <div className="flex items-start justify-between mb-6">
                <cls.icon
                  className="w-10 h-10 text-foreground/30 group-hover:text-primary transition-colors duration-200"
                  strokeWidth={1.5}
                />
                <span className={`text-xs font-bold uppercase tracking-widest ${levelColor[cls.level]}`}>
                  {cls.level}
                </span>
              </div>
              <h3 className="font-display font-bold text-xl uppercase tracking-tight mb-3 text-foreground">
                {cls.name}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {cls.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClassesSection;
