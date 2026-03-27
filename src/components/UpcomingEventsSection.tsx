import { motion } from "framer-motion";
import { Calendar, MapPin, CheckCircle2, Search, ArrowRight, Trophy, Users, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const events = [
  {
    name: "Vasai Boxing League 2024",
    day: "15",
    month: "APR",
    fullDate: "April 15, 2024",
    location: "Suncity Stadium, Vasai",
    status: "Registered",
    isRegistered: true,
    type: "Professional League",
    icon: <Trophy className="w-5 h-5 text-primary" />,
    description: "The biggest inter-club boxing event in the region. Our professional team will be competing for the regional title.",
  },
  {
    name: "Summer Open Sparring Meet",
    day: "02",
    month: "MAY",
    fullDate: "May 2, 2024",
    location: "SR Punch Arena, Vasai West",
    status: "Upcoming",
    isRegistered: false,
    type: "Skill Development",
    icon: <Users className="w-5 h-5 text-primary" />,
    description: "An open sparring session for amateur boxers to test their technical skills in a controlled, safe environment.",
  },
  {
    name: "Maharashtra State Selections",
    day: "10",
    month: "JUN",
    fullDate: "June 10, 2024",
    location: "Pune Sports Complex",
    status: "Internal Selections",
    isRegistered: false,
    type: "Championship Qualifiers",
    icon: <Shield className="w-5 h-5 text-primary" />,
    description: "The official selection trials for the upcoming State Boxing Championship. Open to all registered club members.",
  },
];

const UpcomingEventsSection = () => {
  return (
    <section id="events" className="section-spacing bg-background relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />

      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20 text-center lg:text-left"
        >
          <p className="text-primary font-body text-sm uppercase tracking-[0.4em] mb-4">
            Next Battles
          </p>
          <h2 className="font-display font-black uppercase text-3xl md:text-6xl tracking-tight leading-[0.9] inline-block">
            Upcoming <br className="hidden lg:block"/><span className="text-gradient">Club Events</span>
          </h2>
        </motion.div>

        <div className="space-y-6 max-w-5xl mx-auto lg:mx-0">
          {events.map((event, i) => (
            <motion.div
              key={event.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative flex flex-col md:flex-row gap-8 p-8 glass-card border-none bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500 overflow-hidden"
            >
              {/* Date Box */}
              <div className="flex flex-row md:flex-col items-center justify-center bg-secondary/50 border border-foreground/[0.05] w-full md:w-32 h-24 md:h-32 shrink-0 group-hover:border-primary/40 transition-colors duration-500">
                <span className="font-display font-black text-3xl md:text-4xl text-primary leading-none">
                  {event.day}
                </span>
                <span className="font-body font-black text-xs md:text-sm uppercase tracking-widest text-foreground/60 mt-0 md:mt-2 ml-4 md:ml-0 border-l md:border-l-0 md:border-t border-foreground/[0.1] pl-4 md:pl-0 pt-0 md:pt-2">
                  {event.month}
                </span>
              </div>

              {/* Content */}
              <div className="flex-grow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    {event.icon}
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-primary/80">
                      {event.type}
                    </span>
                    <h3 className="font-display font-black text-xl md:text-2xl uppercase tracking-tight text-foreground/90 group-hover:text-primary transition-colors duration-300">
                      {event.name}
                    </h3>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-6 max-w-2xl font-body">
                  {event.description}
                </p>

                <div className="flex flex-wrap items-center gap-6">
                  <div className="flex items-center gap-2 text-xs md:text-sm font-body font-medium text-foreground/70">
                    <Calendar className="w-4 h-4 text-primary" strokeWidth={2} />
                    <span>{event.fullDate}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs md:text-sm font-body font-medium text-foreground/70">
                    <MapPin className="w-4 h-4 text-primary" strokeWidth={2} />
                    <span>{event.location}</span>
                  </div>
                </div>
              </div>

              {/* Status & CTA */}
              <div className="flex flex-col justify-between items-start md:items-end shrink-0 pt-4 md:pt-0 border-t md:border-t-0 md:border-l border-foreground/[0.05] md:pl-8">
                <div className="mb-6">
                  {event.isRegistered ? (
                    <span className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-green-500 bg-green-500/10 px-3 py-1.5 border border-green-500/20">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      {event.status}
                    </span>
                  ) : (
                    <span className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-primary bg-primary/10 px-3 py-1.5 border border-primary/20">
                      <Search className="w-3.5 h-3.5" />
                      {event.status}
                    </span>
                  )}
                </div>

                <Button 
                  variant={event.isRegistered ? "outline" : "strike"} 
                  className="w-full md:w-auto text-[10px] uppercase tracking-[0.2em] font-black py-6 px-10 group/btn"
                >
                  {event.isRegistered ? "View Seat" : "Register Now"}
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </div>

              {/* Background Accent Ornament */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEventsSection;
