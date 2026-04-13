import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Rohan M.",
    role: "Boxer / 2 Years",
    content: "The intensity here is unparalleled. Shravan coach doesn't just teach you how to punch; he teaches you how to think like a professional athlete.",
    rating: 5,
    color: "bg-primary",
  },
  {
    name: "Anjali S.",
    role: "Fitness Enthusiast",
    content: "Lost 10kg in 3 months. The atmosphere is intimidating at first but that's exactly what you need to break your mental limits. Best gym in Vasai West.",
    rating: 5,
    color: "bg-zinc-700",
  },
  {
    name: "Vikram P.",
    role: "National Medalist",
    content: "SR Punch provided the technical foundation I needed to compete at the state level. The focus on footwork and defense is world-class.",
    rating: 5,
    color: "bg-red-900",
  },
];

const ReviewsSection = () => {
  return (
    <section id="reviews" className="section-spacing bg-background relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[150px] -translate-y-1/2 pointer-events-none" />

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-start justify-between mb-20 gap-12">
          <div className="max-w-xl">
            <p className="label-tactical mb-4">Tactical Feedback</p>
            <h2 className="font-display font-black uppercase text-4xl md:text-7xl leading-none tracking-tighter mb-8">
              VOICES FROM <br />
              <span className="text-gradient">THE ARENA</span>
            </h2>
          </div>

          {/* Aggregate Rating Block (Brutalist) */}
          <div className="bg-white/5 p-8 md:p-12 border border-white/5 flex flex-col items-center">
            <div className="flex items-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-primary text-primary" />
              ))}
            </div>
            <span className="font-display font-black text-6xl text-foreground">4.9 / 5</span>
            <span className="label-tactical !text-[10px] mt-2 opacity-50">Verified Member Accuracy</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-10 relative flex flex-col"
            >
              <Quote className="absolute top-10 right-10 w-12 h-12 text-white/5 pointer-events-none" />
              
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-12 h-12 ${review.color} flex items-center justify-center font-display font-black text-xl italic`}>
                  {review.name[0]}
                </div>
                <div>
                  <h4 className="font-display font-black uppercase text-sm">{review.name}</h4>
                  <p className="label-tactical !text-[8px] opacity-60 underline decoration-primary/30">{review.role}</p>
                </div>
              </div>

              <p className="text-foreground/80 font-body text-base italic leading-relaxed mb-8 relative z-10">
                "{review.content}"
              </p>

              <div className="mt-auto flex gap-1">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-primary text-primary" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
