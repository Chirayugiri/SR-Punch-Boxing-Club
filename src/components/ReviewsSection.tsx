import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rohan S.",
    text: "SR PUNCH transformed my fitness journey. The coaches push you to your limits while maintaining a safe, disciplined environment.",
    rating: 5,
  },
  {
    name: "Priya M.",
    text: "Started boxing here with zero experience. Within months I gained confidence, strength, and a new sense of discipline.",
    rating: 5,
  },
  {
    name: "Arjun K.",
    text: "The boxing program is world-class. Technical, structured, and the instructors genuinely care about your progress.",
    rating: 5,
  },
];

const ReviewsSection = () => {
  return (
    <section id="reviews" className="section-spacing bg-secondary/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.2, 1, 0.3, 1] }}
          className="mb-16 text-center"
        >
          <p className="text-primary font-body text-sm uppercase tracking-[0.3em] mb-4">
            Reputation
          </p>
          <h2 className="font-display font-black uppercase text-3xl md:text-5xl tracking-tight mb-6">
            Proven <span className="text-gradient">Results</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-accent text-accent" strokeWidth={1.5} />
            ))}
          </div>
          <p className="text-2xl font-display font-bold text-foreground">
            5.0 <span className="text-muted-foreground text-base font-body font-normal">/ 5 Rating</span>
          </p>
          <p className="text-muted-foreground text-sm mt-1">Based on 55+ customer reviews</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06, ease: [0.2, 1, 0.3, 1] }}
              className="glass-card p-8 relative"
            >
              <Quote className="w-8 h-8 text-primary/20 absolute top-6 right-6" strokeWidth={1.5} />
              <p className="text-muted-foreground leading-relaxed mb-6 relative z-10">
                "{t.text}"
              </p>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary/20 flex items-center justify-center font-display font-bold text-primary text-sm">
                  {t.name[0]}
                </div>
                <span className="font-body font-semibold text-sm text-foreground">{t.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
