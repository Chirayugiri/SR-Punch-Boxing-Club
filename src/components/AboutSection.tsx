import { motion } from "framer-motion";
import { Shield, Target, Users, Zap } from "lucide-react";

const highlights = [
  { icon: Users, label: "Professional Coaching" },
  { icon: Target, label: "Structured Programs" },
  { icon: Shield, label: "All Skill Levels" },
  { icon: Zap, label: "Strength & Cardio" },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-spacing">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.2, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <p className="text-primary font-body text-sm uppercase tracking-[0.3em] mb-4">
            About
          </p>
          <h2 className="font-display font-black uppercase text-3xl md:text-5xl leading-tight tracking-tight mb-8">
            Forged Through
            <br />
            <span className="text-gradient">Discipline</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            SR Punch Boxing Club is one of the leading boxing and fitness training centers in Vasai West, Palghar. With experienced trainers and structured programs, the club helps members build strength, discipline, confidence, and elite boxing skills.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Whether you're a beginner stepping onto the mat for the first time or an advanced practitioner refining your technique, our programs are designed to push boundaries and unlock potential.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
          {highlights.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06, ease: [0.2, 1, 0.3, 1] }}
              className="glass-card p-6 md:p-8 text-center"
            >
              <item.icon className="w-8 h-8 text-primary mx-auto mb-4" strokeWidth={1.5} />
              <p className="text-sm font-medium uppercase tracking-wider text-foreground">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
