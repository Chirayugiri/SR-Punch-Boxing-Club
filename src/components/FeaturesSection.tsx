import { motion } from "framer-motion";
import { Dumbbell, Target, Timer, Trophy } from "lucide-react";

const features = [
  {
    icon: Dumbbell,
    title: "Elite Conditioning",
    description: "Military-grade strength programs designed for total body transformation.",
  },
  {
    icon: Target,
    title: "Technical Mastery",
    description: "Precision-focused drills from basic footwork to advanced counter-punching.",
  },
  {
    icon: Timer,
    title: "High Intensity",
    description: "Metabolic conditioning that pushes your heart rate and endurance to the limit.",
  },
  {
    icon: Trophy,
    title: "Fighter Mindset",
    description: "Build the mental discipline and resilience of a professional athlete.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="section-spacing bg-secondary/5 relative">
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
          <div className="max-w-2xl text-center md:text-left">
            <p className="label-tactical mb-4">Core Capabilities</p>
            <h2 className="font-display font-black uppercase text-4xl md:text-6xl tracking-tighter">
              BEYOND THE <span className="text-gradient">LIMIT</span>
            </h2>
          </div>
          <div className="hidden md:block w-32 h-[1px] bg-primary/30" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0 border border-white/5">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-10 bg-white/[0.01] hover:bg-white/[0.03] transition-all border-r border-b border-white/5 last:border-r-0 lg:[&:nth-child(4)]:border-r-0"
            >
              <div className="w-14 h-14 bg-primary/10 flex items-center justify-center mb-8 border border-primary/20 group-hover:bg-primary transition-colors duration-500">
                <feature.icon className="w-6 h-6 text-primary group-hover:text-foreground transition-colors" />
              </div>
              <h3 className="font-display font-black uppercase text-lg mb-4 tracking-tighter">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm font-body leading-relaxed">
                {feature.description}
              </p>
              
              {/* Kinetic Hover Indicator */}
              <div className="mt-8 overflow-hidden">
                <div className="h-[2px] w-0 bg-primary group-hover:w-full transition-all duration-700 ease-in-out" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
