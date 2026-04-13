import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "Do I need prior experience?",
    answer: "Absolutely not. 70% of our members start with zero martial arts experience. Our beginner's program is designed to build your foundation from scratch.",
  },
  {
    question: "What should I bring to my first session?",
    answer: "Wear comfortable workout clothes and bring a water bottle. We provide gloves for your trial session. If you decide to join, we recommend purchasing your own hand wraps for hygiene.",
  },
  {
    question: "Is there an age limit?",
    answer: "We have programs for kids (8+), teens, and adults. There is no upper age limit as long as you are medically cleared for high-intensity exercise.",
  },
  {
    question: "How many calories will I burn?",
    answer: "A typical high-intensity boxing session at SR PUNCH can burn between 600 to 900 calories depending on your intensity level.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-spacing bg-background relative overflow-hidden">
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row gap-16">
          <div className="md:w-1/3">
            <p className="label-tactical mb-4">Intel Retrieval</p>
            <h2 className="font-display font-black uppercase text-4xl md:text-6xl tracking-tighter leading-none mb-8">
              COMMON <span className="text-gradient">QUERIES</span>
            </h2>
            <p className="text-muted-foreground text-sm font-body leading-relaxed max-w-xs">
              Everything you need to know before stepping into the arena. 
              Efficiency is our priority.
            </p>
          </div>

          <div className="md:w-2/3 border-t border-white/10">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-white/10">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full py-8 flex items-center justify-between text-left group transition-all"
                >
                  <span className={`font-display font-black uppercase text-lg md:text-xl tracking-tighter transition-colors ${openIndex === i ? "text-primary" : "text-foreground group-hover:text-primary/70"}`}>
                    {faq.question}
                  </span>
                  {openIndex === i ? (
                    <Minus className="w-6 h-6 text-primary shrink-0" />
                  ) : (
                    <Plus className="w-6 h-6 text-white/20 group-hover:text-primary transition-colors shrink-0" />
                  )}
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openIndex === i ? "max-h-96 pb-10" : "max-h-0"
                  }`}
                >
                   <div className="flex gap-6">
                      <div className="w-1 h-auto bg-primary/30 shrink-0" />
                      <p className="text-muted-foreground font-body text-base leading-relaxed max-w-2xl">
                        {faq.answer}
                      </p>
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
