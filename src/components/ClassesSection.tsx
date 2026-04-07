import { motion } from "framer-motion";
import { Flame, Dumbbell, Zap, Target } from "lucide-react";

const classes = [
  {
    name: "Boxing Training",
    level: "All Levels",
    icon: Target,
    description: "Master boxing fundamentals with expert coaching focused on technique, footwork, and precision striking.",
  },
  {
    name: "Professional Sparring",
    level: "All Levels",
    icon: Flame,
    description: "Step into real fight scenarios with controlled, high-level sparring sessions. Sharpen your timing, defense, and ring IQ under expert supervision.",
  },
  {
    name: "Strength & Conditioning",
    level: "Advanced",
    icon: Dumbbell,
    description: "Build explosive power, endurance, and functional strength with performance-driven training programs.",
  },
  {
    name: "Cardio Workouts",
    level: "Intermediate",
    icon: Zap,
    description: "High-intensity sessions combining boxing drills and cardio to boost stamina and burn fat.",
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
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.2, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <p className="text-primary font-body text-sm uppercase tracking-[0.3em] mb-4">
            What we offer
          </p>
          <h2 className="font-display font-black uppercase text-3xl md:text-5xl tracking-tight">
            Training <span className="text-gradient">Programs</span>
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
