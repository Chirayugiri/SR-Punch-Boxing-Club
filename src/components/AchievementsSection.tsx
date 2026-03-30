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
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent -translate-x-1/2 hidden md:block" />

          <div className="space-y-12 md:space-y-0 relative">
            {achievements.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -5 }}
                className={`relative flex items-center justify-between md:mb-24 last:mb-0 group/row ${
                  i % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Content Side */}
                <div className="w-full md:w-[46%]">
                  <div className={`p-8 glass-card border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] hover:border-primary/30 transition-all duration-700 relative group/card overflow-hidden ${
                    i % 2 === 0 ? "text-left border-l-primary/50" : "md:text-right md:border-r-primary/50 text-left border-l-primary/50 md:border-l-transparent"
                  }`}>
                    {/* Background Large Year */}
                    <div className={`absolute -bottom-10 opacity-[0.03] font-display font-black text-9xl pointer-events-none select-none transition-all duration-700 group-hover/card:opacity-[0.06] group-hover/card:scale-110 ${
                      i % 2 === 0 ? "-left-4 text-left" : "md:-right-4 -left-4 md:text-right"
                    }`}>
                      {item.year}
                    </div>

                    {/* Floating Year Tag */}
                    <div className={`absolute -top-px bg-primary px-5 py-1.5 text-[11px] font-black uppercase tracking-[0.2em] text-background z-10 shadow-lg shadow-primary/20 ${
                      i % 2 === 0 ? "left-0" : "md:right-0 md:left-auto left-0"
                    }`}>
                      {item.year}
                    </div>

                    <h3 className="font-display font-black text-xl md:text-2xl uppercase tracking-tighter text-white mb-4 pt-6 leading-[1.1]">
                      {item.title}
                    </h3>
                    
                    <p className="text-muted-foreground/80 text-sm md:text-base leading-relaxed mb-8 relative z-10">
                      {item.detail}
                    </p>

                    <div className={`flex items-baseline gap-3 pt-6 border-t border-white/[0.03] relative z-10 ${
                      i % 2 === 0 ? "justify-start" : "md:justify-end justify-start flex-row"
                    }`}>
                      <span className="text-[10px] font-black uppercase tracking-widest text-primary flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                        Outcome
                      </span>
                      <span className="text-xs font-display font-bold text-foreground uppercase tracking-wide max-w-[80%] leading-snug">
                        {item.impact}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Timeline Marker (Circle on the line) */}
                <div className="absolute left-[30px] md:left-1/2 top-10 md:top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 w-14 h-14 md:w-16 md:h-16 rounded-full bg-background border border-white/10 flex items-center justify-center group-hover/row:border-primary/50 group-hover/row:scale-110 transition-all duration-500 overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover/row:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10 transform group-hover/row:rotate-[10deg] transition-transform duration-500">
                    {item.icon}
                  </div>
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
