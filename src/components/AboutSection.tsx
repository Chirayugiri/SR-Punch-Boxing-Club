import { motion } from "framer-motion";
import { Target, Flame, Users, ShieldCheck } from "lucide-react";
import { CONFIG } from "@/config/constants";
import aboutImg from "@/assets/about-img.png";

const features = [
  { icon: Target, label: "Elite Boxing Coaching" },
  { icon: Flame, label: "High-Intensity Drills" },
  { icon: Users, label: "Fighter Community" },
  { icon: ShieldCheck, value: "AIBA", label: "Certified Excellence" },
];

const stats = [
  { value: "500+", label: "Success Stories" },
  { value: "12+", label: "Years Impact" },
  { value: "AIBA", label: "Global Status" },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-spacing bg-background overflow-hidden relative">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-[30%] h-full bg-secondary/20 -skew-x-12 translate-x-1/2 pointer-events-none" />

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Visuals */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.2, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Massive Type behind image */}
            <div className="absolute -top-16 -left-10 text-[10vw] font-display font-black text-white/5 uppercase select-none pointer-events-none">
              PURE
            </div>

            <div className="relative group p-2 bg-white/5">
              <div className="overflow-hidden aspect-square md:aspect-[4/5]">
                <img
                  src={aboutImg}
                  alt="Boxing Gym Heavy Bag"
                  className="w-full h-full object-cover img-grayscale-tactical"
                />
              </div>

              {/* EST Badge (Bolder) */}
              <div className="absolute bottom-6 left-6 bg-primary px-8 py-4 shadow-2xl">
                <span className="font-display font-black italic text-foreground tracking-tighter text-xl uppercase">
                  EST. VASAI
                </span>
              </div>
            </div>

            {/* Kinetic Stats Bar */}
            <div className="grid grid-cols-3 mt-4 bg-[#141414]">
              {stats.map((s, i) => (
                <div key={i} className="flex flex-col items-center py-6 hover:bg-white/[0.03] transition-colors">
                  <span className="font-display font-black text-2xl text-foreground">{s.value}</span>
                  <span className="label-tactical !text-[8px] mt-1">{s.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Narrative */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.2, 1, 0.3, 1] }}
          >
            <p className="label-tactical mb-6">About The Monolith</p>
            <h2 className="font-display font-black uppercase text-4xl md:text-6xl leading-[0.9] tracking-tighter mb-10">
              WE DON'T DO
              <br />
              <span className="text-gradient">AVERAGE.</span>
            </h2>
            
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-12 max-w-xl font-body">
              {CONFIG.BUSINESS_NAME} is not just a gym; it's an arena for personal revolution. 
              We strip away the fluff of commercial fitness, focusing on the raw discipline of professional boxing. 
              Whether you're a beginner or a seasoned fighter, our monolith is built to forge your peak performance.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((f, i) => (
                <div
                  key={i}
                    className="flex items-center gap-5 p-5 bg-white/[0.02] border-l-2 border-primary/20 hover:border-primary transition-all group"
                >
                  <f.icon className="w-5 h-5 text-primary shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="font-display font-bold text-[10px] md:text-xs uppercase tracking-widest text-foreground/90">
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
