import { motion } from "framer-motion";
import class1 from "@/assets/class1.jpg";
import class2 from "@/assets/class2.jpg";
import class3 from "@/assets/class3.jpg";

const classes = [
  {
    title: "Pro Boxing",
    intensity: "EXTREME",
    duration: "90 MIN",
    image: class1,
    desc: "Rigorous technical training for those looking to master the sweet science.",
  },
  {
    title: "Fitness Flux",
    intensity: "HIGH",
    duration: "60 MIN",
    image: class2,
    desc: "Metabolic conditioning and functional strength targeting fat loss and stamina.",
  },
  {
    title: "Kids Combat",
    intensity: "MODERATE",
    duration: "45 MIN",
    image: class3,
    desc: "Building discipline, coordination, and confidence for the next generation.",
  },
];

const ClassesSection = () => {
  return (
    <section id="classes" className="section-spacing bg-background relative overflow-hidden">
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-xl">
            <p className="label-tactical mb-4">Tactical Programs</p>
            <h2 className="font-display font-black uppercase text-4xl md:text-7xl leading-none tracking-tighter">
              BATTLE <span className="text-gradient">READY</span>
            </h2>
          </div>
          <div className="h-[2px] w-24 bg-primary/30 hidden md:block mb-4" />
        </div>

        <div className="grid md:grid-cols-3 gap-1">
          {classes.map((cls, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden aspect-[3/4] bg-zinc-900"
            >
              <img
                src={cls.image}
                alt={cls.title}
                className="w-full h-full object-cover img-grayscale-tactical transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Monolith Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              
              {/* PRIMARY GLOW ON HOVER */}
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="flex gap-4 mb-4">
                  <span className="label-tactical !text-[8px] !bg-primary !text-foreground !px-2 line-through decoration-white/20">
                    {cls.intensity}
                  </span>
                  <span className="label-tactical !text-[8px] border-white/20">
                    {cls.duration}
                  </span>
                </div>
                
                <h3 className="font-display font-black uppercase text-2xl md:text-3xl tracking-tighter mb-4 group-hover:text-primary transition-colors">
                  {cls.title}
                </h3>
                
                <p className="text-muted-foreground text-sm font-body leading-relaxed group-hover:text-foreground transition-colors">
                  {cls.desc}
                </p>
                
                {/* Technical Marker */}
                <div className="mt-8 flex items-center justify-between opacity-30 group-hover:opacity-100 transition-opacity">
                   <div className="h-[1px] flex-grow bg-white/10 group-hover:bg-primary/50 transition-colors" />
                   <div className="w-2 h-2 bg-primary ml-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClassesSection;
