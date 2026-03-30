import { motion } from "framer-motion";
import performer1 from "@/assets/performers/performer1.png";
import performer2 from "@/assets/performers/performer2.png";
import performer3 from "@/assets/performers/performer3.png";

const performers = [
  {
    name: "Rahul Sharma",
    category: "Professional",
    achievements: "Regional Lightweight Champion '23",
    image: performer1,
  },
  {
    name: "Sneha Patil",
    category: "Amateur",
    achievements: "State Silver Medalist - Women's Flyweight",
    image: performer2,
  },
  {
    name: "Karan Johar",
    category: "Amateur",
    achievements: "Inter-City Youth Gold Winner",
    image: performer3,
  },
];

const TopPerformersSection = () => {
  return (
    <section id="performers" className="section-spacing bg-secondary/10">
      <div className="container px-4 md:px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-body text-sm uppercase tracking-[0.3em] mb-4">
            Elite Athletes
          </p>
          <h2 className="font-display font-black uppercase text-3xl md:text-5xl tracking-tight">
            Top <span className="text-gradient">Performers</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {performers.map((athlete, i) => (
            <motion.div
              key={athlete.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden bg-background aspect-[3/4] border border-foreground/[0.08]"
            >
              {/* Image */}
              <img
                src={athlete.image}
                alt={athlete.name}
                className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-110 group-hover:brightness-100 transition-all duration-700"
              />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="inline-block py-1 px-3 mb-4 text-[10px] font-bold uppercase tracking-widest bg-primary text-foreground">
                  {athlete.category}
                </span>
                <h3 className="font-display font-black uppercase text-2xl mb-2 tracking-tight group-hover:text-primary transition-colors duration-300">
                  {athlete.name}
                </h3>
                <p className="text-muted-foreground text-sm font-body font-medium flex items-center gap-2">
                  <span className="w-8 h-px bg-primary/50" />
                  {athlete.achievements}
                </p>
              </div>

              {/* Decorative Corner Element */}
              <div className="absolute top-0 right-0 w-16 h-16 border-t-[3px] border-r-[3px] border-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopPerformersSection;
