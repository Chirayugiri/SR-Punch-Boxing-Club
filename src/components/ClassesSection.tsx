import { motion } from "framer-motion";
import { Flame, Shield, Zap, Target, ArrowRight } from "lucide-react";
import boxingImg from "../assets/classes/boxing-training.png";
import kickboxingImg from "../assets/classes/kickboxing.png";
import mmaImg from "../assets/classes/mma.png";
import jiuJitsuImg from "../assets/classes/jiu-jitsu.png";

const classes = [
  {
    name: "Boxing",
    level: "All Levels",
    icon: Target,
    image: boxingImg,
    description: "Master the sweet science with expert coaching focused on precision, footwork, and technical dominance.",
  },
  {
    name: "Kickboxing",
    level: "All Levels",
    icon: Flame,
    image: kickboxingImg,
    description: "A powerful fusion of striking and kicking. Build incredible speed, power, and metabolic conditioning.",
  },
  {
    name: "MMA",
    level: "Advanced",
    icon: Zap,
    image: mmaImg,
    description: "The ultimate proving ground. Integrate striking, wrestling, and grappling in our comprehensive MMA program.",
  },
  {
    name: "Jiu Jitsu",
    level: "Intermediate",
    icon: Shield,
    image: jiuJitsuImg,
    description: "The art of ground fighting. Learn high-level grappling, submissions, and defensive positioning with specialized high-level coaching.",
  },
];

const levelColor: Record<string, string> = {
  "All Levels": "bg-accent/20 text-accent border-accent/30",
  Advanced: "bg-primary/20 text-primary border-primary/30",
  Intermediate: "bg-accent/20 text-accent border-accent/30",
  Pro: "bg-primary/20 text-primary border-primary/30",
};

const ClassesSection = () => {
  return (
    <section id="classes" className="section-spacing relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] -z-10 -translate-x-1/2 translate-y-1/2" />

      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.2, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <p className="text-primary font-body text-[10px] md:text-sm uppercase tracking-[0.4em] mb-4 font-black">
            Master the Craft
          </p>
          <h2 className="font-display font-black uppercase text-3xl md:text-5xl tracking-tight">
            Training <span className="text-gradient">Programs</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-6 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {classes.map((cls, i) => (
            <motion.div
              key={cls.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.2, 1, 0.3, 1] }}
              className="group relative h-[350px] md:h-[450px] overflow-hidden rounded-3xl cursor-default"
            >
              {/* background image with zoom effect */}
              <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-110">
                <img 
                  src={cls.image} 
                  alt={cls.name}
                  className="w-full h-full object-cover"
                />
                {/* Overlays */}
                <div className="absolute inset-0 bg-neutral-950/40 group-hover:bg-neutral-950/20 transition-colors duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-transparent opacity-90" />
              </div>

              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-8 md:p-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 group-hover:bg-primary/20 group-hover:border-primary/40 transition-all duration-300">
                    <cls.icon className="w-5 h-5 text-white group-hover:text-primary transition-colors" />
                  </div>
                  <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border backdrop-blur-md ${levelColor[cls.level]}`}>
                    {cls.level}
                  </span>
                </div>

                <h3 className="font-display font-black text-2xl md:text-3xl uppercase tracking-tight mb-4 text-white transform transition-transform duration-500 group-hover:-translate-y-1">
                  {cls.name}
                </h3>
                
                <p className="text-gray-300 leading-relaxed font-body text-sm md:text-base max-w-md opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                  {cls.description}
                </p>

                <div className="mt-6 flex items-center gap-2 text-primary font-bold uppercase text-xs tracking-widest opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 delay-100">
                  Join Program <ArrowRight className="w-4 h-4" />
                </div>
              </div>

              {/* Decorative border on hover */}
              <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/30 rounded-3xl transition-all duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClassesSection;

