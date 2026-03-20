import { motion } from "framer-motion";
import { Dumbbell, ShieldCheck, Brain, GraduationCap, TreePine } from "lucide-react";

const features = [
  { icon: Dumbbell, title: "Strength & Conditioning", description: "Build functional strength and explosive power through structured training." },
  { icon: ShieldCheck, title: "Self-Defense Training", description: "Learn practical techniques to protect yourself in real-world situations." },
  { icon: Brain, title: "Discipline & Mental Focus", description: "Sharpen your mind and develop iron-willed discipline through professional boxing." },
  { icon: GraduationCap, title: "Professional Coaching", description: "Train under experienced instructors with proven track records." },
  { icon: TreePine, title: "Outdoor Training", description: "Embrace nature with outdoor sessions designed to challenge your limits." },
];

const FeaturesSection = () => {
  return (
    <section className="section-spacing bg-secondary/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.2, 1, 0.3, 1] }}
          className="mb-16"
        >
          <p className="text-primary font-body text-sm uppercase tracking-[0.3em] mb-4">
            Why SR PUNCH
          </p>
          <h2 className="font-display font-black uppercase text-3xl md:text-5xl tracking-tight">
            The <span className="text-gradient">Edge</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06, ease: [0.2, 1, 0.3, 1] }}
              className="glass-card p-6 text-center"
            >
              <f.icon className="w-8 h-8 text-primary mx-auto mb-4" strokeWidth={1.5} />
              <h3 className="font-display font-bold text-sm uppercase tracking-tight mb-2 text-foreground">
                {f.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {f.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
