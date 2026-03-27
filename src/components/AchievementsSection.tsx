import { motion } from "framer-motion";
import { Trophy, Medal, Award, Star, Zap, Target, Users, Shield } from "lucide-react";

const achievements = [
  {
    year: "2024",
    title: "National Amateur Boxing League",
    detail: "Secured 3 Gold, 2 Silver, and 1 Bronze medal across various weight categories. Our team was recognized for technical superiority and discipline.",
    impact: "Established SR Punch as a top-tier contender in national rankings.",
    icon: <Trophy className="w-6 h-6 text-primary" />,
  },
  {
    year: "2023",
    title: "Best Boxing Club - Palghar District",
    detail: "Awarded by the State Sports Authority for outstanding contribution to combat sports and promoting boxing among youth in the region.",
    impact: "Official recognition from governing bodies.",
    icon: <Award className="w-6 h-6 text-primary" />,
  },
  {
    year: "2023",
    title: "Regional Golden Gloves Tournament",
    detail: "Rahul Sharma (Lightweight) and Sneha Patil (Flyweight) won their respective divisions with consecutive knockouts in the finals.",
    impact: "Directly qualified 4 athletes for the Olympic trials.",
    icon: <Medal className="w-6 h-6 text-primary" />,
  },
  {
    year: "2022",
    title: "Inter-City Youth Invitational",
    detail: "Dominant performance by our under-19 squad, winning 80% of their bouts and taking home the 'Most Disciplined Team' trophy.",
    impact: "Strengthened the foundation of our youth development program.",
    icon: <Users className="w-6 h-6 text-primary" />,
  },
  {
    year: "2022",
    title: "Vasai Sports Excellence Gala",
    detail: "Head Coach Shravan Rajbhar was honored with the 'Coach of the Decade' award for his tireless work in the local community.",
    impact: "Cemented the club's reputation for world-class coaching.",
    icon: <Target className="w-6 h-6 text-primary" />,
  },
  {
    year: "2021",
    title: "State-Level Open Championship",
    detail: "Successfully defended our title for the third consecutive year, maintaining a 95% winning record across all participating fighters.",
    impact: "Longest consecutive winning streak in state history.",
    icon: <Shield className="w-6 h-6 text-primary" />,
  },
  {
    year: "2020",
    title: "National Fitness & Combat Expo",
    detail: "Awarded 'Best Infrastructure and Safety' for our modern gym facilities and adherence to international boxing standards.",
    impact: "Attracted professional fighters from across India for training camps.",
    icon: <Zap className="w-6 h-6 text-primary" />,
  },
  {
    year: "2019",
    title: "Inter-State Selection Trials",
    detail: "Five students from SR Punch were selected to represent Maharashtra in the National Games, the highest number from any single club.",
    impact: "Set a benchmark for athlete selection and training metrics.",
    icon: <Star className="w-6 h-6 text-primary" />,
  },
];

const AchievementsSection = () => {
  return (
    <section id="achievements" className="section-spacing bg-background overflow-hidden">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-24"
        >
          <p className="text-primary font-body text-sm uppercase tracking-[0.3em] mb-4">
            The Legacy
          </p>
          <h2 className="font-display font-black uppercase text-3xl md:text-6xl tracking-tight leading-none">
            Proven <span className="text-gradient">Excellence</span>
          </h2>
        </motion.div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-0">
          {/* Vertical Center Line (Desktop Only) */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-foreground/[0.08] -translate-x-1/2 hidden md:block" />

          <div className="space-y-12 md:space-y-0 relative">
            {achievements.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative flex items-center justify-between md:mb-24 last:mb-0 group ${
                  i % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Content Side */}
                <div className="w-full md:w-[44%]">
                  <div className={`p-8 glass-card border-none bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500 relative ${
                    i % 2 === 0 ? "text-left" : "md:text-right"
                  }`}>
                    {/* Floating Year Tag */}
                    <div className={`absolute -top-4 bg-primary px-4 py-1 text-[10px] font-black uppercase tracking-widest text-foreground ${
                      i % 2 === 0 ? "left-8" : "md:right-8 left-8"
                    }`}>
                      {item.year}
                    </div>

                    <h3 className="font-display font-bold text-lg md:text-xl uppercase tracking-tight text-foreground mb-4 pt-2">
                      {item.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-6">
                      {item.detail}
                    </p>

                    <div className={`flex items-center gap-3 py-3 border-t border-foreground/[0.05] ${
                      i % 2 === 0 ? "justify-start" : "md:justify-end justify-start flex-row"
                    }`}>
                      <span className="text-[10px] font-black uppercase tracking-widest text-primary/80">Result:</span>
                      <span className="text-xs font-body font-bold text-foreground/80 uppercase tracking-tight">{item.impact}</span>
                    </div>
                  </div>
                </div>

                {/* Timeline Marker (Circle on the line) */}
                <div className="absolute left-[30px] md:left-1/2 top-10 md:top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-16 h-16 rounded-full bg-background border border-foreground/[0.08] flex items-center justify-center group-hover:border-primary group-hover:scale-110 transition-all duration-500 group-hover:glow-red">
                  {item.icon}
                </div>

                {/* Vertical Line for Mobile */}
                <div className="absolute left-[30px] top-20 bottom-0 w-px bg-foreground/[0.08] md:hidden group-last:hidden" />

                {/* Spacer Side (Desktop Only) */}
                <div className="hidden md:block md:w-[44%]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
