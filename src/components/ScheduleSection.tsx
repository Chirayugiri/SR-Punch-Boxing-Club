import { motion } from "framer-motion";

const schedule = [
  { day: "Monday", hours: "6:00 AM – 8:00 PM", open: true },
  { day: "Tuesday", hours: "6:00 AM – 8:00 PM", open: true },
  { day: "Wednesday", hours: "6:00 AM – 8:00 PM", open: true },
  { time: "06:00 AM - 09:00 AM", session: "Morning Drill", intensity: "HIGH" },
  { time: "10:00 AM - 12:00 PM", session: "Technical Skill", intensity: "MODERATE" },
  { time: "04:30 PM - 06:30 PM", session: "Pro Sparring", intensity: "EXTREME" },
  { time: "06:30 PM - 08:30 PM", session: "Evening Burn", intensity: "HIGH" },
  { time: "08:30 PM - 10:00 PM", session: "Open Gym", intensity: "LOW" },
];

const ScheduleSection = () => {
  return (
    <section id="schedule" className="section-spacing bg-secondary/5 relative overflow-hidden">
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-16 gap-8">
           <div>
              <p className="label-tactical mb-4">Temporal Logistics</p>
              <h2 className="font-display font-black uppercase text-4xl md:text-7xl leading-none tracking-tighter">
                SQUAD <span className="text-gradient">TIMINGS</span>
              </h2>
           </div>
           <p className="text-muted-foreground text-sm font-body max-w-xs md:text-right">
             Precision timing for maximum physiological impact. 
             Arrive 15 minutes prior for warm-up.
           </p>
        </div>

        <div className="border border-white/5 divide-y divide-white/5">
          {schedule.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group flex flex-col md:flex-row items-start md:items-center justify-between p-8 md:p-12 hover:bg-primary transition-all duration-500"
            >
              <div className="flex flex-col gap-2 mb-4 md:mb-0">
                <span className="label-tactical !text-[10px] group-hover:text-foreground">OPERATIONAL WINDOW</span>
                <span className="font-display font-black text-2xl md:text-4xl tracking-tighter group-hover:text-foreground transition-colors">
                  {item.time}
                </span>
              </div>
              
              <div className="flex flex-col md:items-end gap-2">
                <div className="flex gap-4 items-center">
                   <span className="label-tactical !text-[8px] !bg-foreground !text-primary !px-2 group-hover:!bg-background transition-colors">
                     {item.intensity}
                   </span>
                   <h3 className="font-display font-black uppercase text-xl md:text-2xl tracking-tighter group-hover:text-foreground transition-colors">
                     {item.session}
                   </h3>
                </div>
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground group-hover:text-foreground/70 transition-colors">
                  Mandatory Training Block
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
