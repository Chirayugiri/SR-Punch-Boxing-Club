import { motion } from "framer-motion";

const schedule = [
  { day: "Monday", hours: "6:00 AM – 8:00 PM", open: true },
  { day: "Tuesday", hours: "6:00 AM – 8:00 PM", open: true },
  { day: "Wednesday", hours: "6:00 AM – 8:00 PM", open: true },
  { day: "Thursday", hours: "6:00 AM – 8:00 PM", open: true },
  { day: "Friday", hours: "6:00 AM – 8:00 PM", open: true },
  { day: "Saturday", hours: "6:00 AM – 7:00 AM", open: true },
  { day: "Sunday", hours: "6:00 AM – 10:00 AM", open: true },
];

const today = new Date().toLocaleDateString("en-US", { weekday: "long" });

const ScheduleSection = () => {
  return (
    <section id="schedule" className="section-spacing">
      <div className="container px-4 md:px-6 max-w-3xl">

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.2, 1, 0.3, 1] }}
          className="mb-16"
        >
          <p className="text-primary font-body text-sm uppercase tracking-[0.3em] mb-4">
            Training Hours
          </p>
          <h2 className="font-display font-black uppercase text-3xl md:text-5xl tracking-tight">
            Weekly <span className="text-gradient">Schedule</span>
          </h2>
        </motion.div>

        <div className="border border-foreground/[0.08]">
          {schedule.map((s, i) => (
            <motion.div
              key={s.day}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.04, ease: [0.2, 1, 0.3, 1] }}
              className={`flex items-center justify-between px-6 py-4 border-b border-foreground/[0.05] last:border-b-0 transition-colors ${
                s.day === today ? "border-l-4 border-l-primary bg-primary/[0.05]" : ""
              }`}
            >
              <span className={`font-body font-semibold uppercase tracking-wider text-sm ${
                s.day === today ? "text-primary" : "text-foreground"
              }`}>
                {s.day}
              </span>
              <span className={`font-body tabular-nums text-sm ${
                s.open ? "text-muted-foreground" : "text-muted-foreground/50"
              }`}>
                {s.hours}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
