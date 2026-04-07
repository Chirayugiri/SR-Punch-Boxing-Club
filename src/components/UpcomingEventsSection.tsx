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
          <p className="text-primary font-body text-[10px] md:text-sm uppercase tracking-[0.4em] mb-4 font-black">
            Next Battles
          </p>
          <h2 className="font-display font-black uppercase text-3xl md:text-5xl tracking-tight leading-[0.9] inline-block">
            Upcoming <br className="hidden lg:block"/><span className="text-gradient">Club Events</span>
          </h2>
        </motion.div>

        <div className="space-y-6 max-w-5xl mx-auto lg:mx-0">
          {events.map((event, i) => (
            <motion.div
              key={event.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative flex flex-col md:flex-row gap-0 md:gap-8 glass-card border-none bg-white/[0.01] hover:bg-white/[0.03] transition-all duration-500 overflow-hidden"
            >
              {/* Date Column - Desktop Only */}
              <div className="hidden md:flex flex-col items-center justify-center bg-secondary/50 border-r border-foreground/[0.05] w-32 shrink-0 group-hover:border-primary/40 transition-colors duration-500">
                <span className="font-display font-black text-4xl text-primary leading-none">
                  {event.day}
                </span>
                <span className="font-body font-black text-sm uppercase tracking-widest text-foreground/60 mt-2 border-t border-foreground/[0.1] pt-2">
                  {event.month}
                </span>
              </div>

              {/* Card Body */}
              <div className="flex-grow p-6 md:p-8 flex flex-col md:flex-row gap-8">
                {/* Content Area */}
                <div className="flex-grow">
                  {/* Mobile Header: Type + Date Sticker (Mobile Only) */}
                  <div className="flex md:hidden items-center justify-between mb-6">
                    <span className="text-[10px] font-black uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 border border-primary/20">
                      {event.type}
                    </span>
                    <div className="flex flex-col items-end">
                       <span className="font-display font-black text-3xl text-foreground/10 leading-none">{event.day}</span>
                       <span className="font-display font-black text-[10px] text-foreground/5 uppercase tracking-widest leading-none">{event.month}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 md:w-10 md:h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <div className="scale-90 md:scale-100">
                        {event.icon}
                      </div>
                    </div>
                    <div>
                      <span className="hidden md:block text-[10px] font-black uppercase tracking-widest text-primary/80 mb-1">
                        {event.type}
                      </span>
                      <h3 className="font-display font-black text-xl md:text-2xl uppercase tracking-tight text-foreground/90 group-hover:text-primary transition-colors duration-300 leading-tight">
                        {event.name}
                      </h3>
                    </div>
                  </div>

                  <p className="text-muted-foreground/80 text-sm md:text-base leading-relaxed mb-8 max-w-2xl font-body">
                    {event.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
                    <div className="flex items-center gap-2.5 text-xs md:text-sm font-body font-medium text-foreground/60">
                      <Calendar className="w-4 h-4 text-primary/70" strokeWidth={2.5} />
                      <span>{event.fullDate}</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs md:text-sm font-body font-medium text-foreground/60">
                      <MapPin className="w-4 h-4 text-primary/70" strokeWidth={2.5} />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>

                {/* Vertical Divider (Desktop Only) */}
                <div className="hidden md:block w-px bg-foreground/[0.05]" />

                {/* Action/Status Column */}
                <div className="flex flex-col justify-between items-start md:items-end gap-6 md:w-48 shrink-0">
                  <div className="w-full flex md:justify-end">
                    {event.isRegistered ? (
                      <span className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-green-500 bg-green-500/10 px-4 py-2 border border-green-500/20 rounded-full">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        {event.status}
                      </span>
                    ) : (
                      <span className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-primary bg-primary/10 px-4 py-2 border border-primary/20 rounded-full">
                        <Search className="w-3.5 h-3.5" />
                        {event.status}
                      </span>
                    )}
                  </div>

                  <Button 
                    variant={event.isRegistered ? "outline" : "strike"} 
                    size="lg"
                    className="w-full uppercase tracking-[0.2em] font-black group/btn shrink-0"
                  >
                    {event.isRegistered ? "View Seat" : "Register Now"}
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </div>
              </div>

              {/* Decorative Background Element */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors" />
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default UpcomingEventsSection;
