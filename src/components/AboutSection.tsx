import { motion } from "framer-motion";
import { Target, Flame, Users, ShieldCheck } from "lucide-react";
import { CONFIG } from "@/config/constants";
import aboutImg from "@/assets/about-img.png";

const AboutSection = () => {
  const features = [
    { icon: Target, label: "Professional Boxing Coaching" },
    { icon: Flame, label: "Real Training — Pads, Bag Work, Sparring" },
    { icon: Users, label: "Beginner-Friendly Environment" },
    { icon: ShieldCheck, label: "Fitness + Fighting Skills" },
  ];

  return (
    <section id="about" className="section-spacing bg-background overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column: Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.2, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Stylized Red Border on Left */}
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-primary/80 hidden md:block" />
            
            <div className="relative aspect-square md:aspect-video lg:aspect-[4/3] overflow-hidden group">
              <img
                src={aboutImg}
                alt="Boxing Gym Heavy Bag"
                className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
              
              {/* "EST. VASAI WEST" Badge */}
              <div className="absolute bottom-0 right-0 bg-primary px-6 py-3">
                <span className="font-display font-black italic text-foreground tracking-tighter text-lg md:text-xl uppercase">
                  EST. VASAI WEST
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.2, 1, 0.3, 1] }}
          >
            <p className="text-primary font-body text-xs md:text-sm uppercase tracking-[0.4em] font-bold mb-4 text-gradient">
              ABOUT THE CLUB
            </p>
            <h2 className="font-display font-black uppercase text-4xl md:text-6xl leading-[0.95] tracking-tight mb-8">
              NO FLUFF.
              <br />
              <span className="text-foreground">JUST BOXING.</span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-10 max-w-xl">
              {CONFIG.BUSINESS_NAME} is one of the leading boxing training centers in Vasai West. Focused purely on boxing and fitness, the club provides professional coaching for beginners and advanced fighters. With structured training sessions, students improve strength, stamina, discipline, and real boxing skills in a high-energy environment.
            </p>


            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((f, i) => (
                <div 
                  key={i} 
                  className="flex items-center gap-4 p-4 border border-foreground/[0.08] hover:border-primary/50 transition-colors group"
                >
                  <f.icon className="w-5 h-5 text-primary shrink-0 transition-transform group-hover:scale-110" strokeWidth={2} />
                  <span className="font-body font-medium text-xs md:text-sm uppercase tracking-tight text-foreground/90">
                    {f.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
