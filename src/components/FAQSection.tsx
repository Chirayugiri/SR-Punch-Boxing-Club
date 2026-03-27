import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do I need prior experience to join SR Punch?",
    answer: "Absolutely not! We welcome beginners, intermediates, and advanced fighters. Our coaches structure training sessions based on your current skill level, ensuring you learn the fundamentals safely and effectively.",
  },
  {
    question: "What equipment do I need for my first class?",
    answer: "For your first session, comfortable workout clothes and a bottle of water are enough. We provide communal gloves and hand wraps for beginners, but we highly recommend purchasing your own once you commit to regular training for hygiene reasons.",
  },
  {
    question: "What are the membership fees and admission costs?",
    answer: "Our general fitness plan starts at ₹2,000/month, while our Boxing Pro plan is ₹3,500/month. We also have quarterly options. There's no heavy admission fee—just sign up and start training!",
  },
  {
    question: "Is boxing safe for kids and teenagers?",
    answer: "Yes, boxing is excellent for youth! It builds discipline, confidence, and coordination. Our younger members are closely supervised, and sparring is only permitted under strict coaching oversight with full protective gear.",
  },
  {
    question: "What is the training schedule in Vasai West?",
    answer: "Most of our intensive training sessions happen between 5:00 PM and 7:30 PM, Monday through Friday. We are also open for morning slots from 6:00 AM. Our weekend hours vary, so please check our 'Schedule' section for the full timetable.",
  },
  {
    question: "Can I get a trial class before joining?",
    answer: "Yes! We offer a free trial session for prospective members. It's the best way to experience our training environment and meet the team before making a commitment.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="section-spacing bg-background overflow-hidden">
      <div className="container px-4 md:px-6 max-w-4xl mx-auto">
        <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
          <p className="text-primary font-body text-sm uppercase tracking-[0.3em] mb-4">
            Common Inquiries
          </p>
          <h2 className="font-display font-black uppercase text-3xl md:text-5xl tracking-tight">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.2, 1, 0.3, 1] }}
          className="glass-card p-6 md:p-10 border border-foreground/[0.08]"
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-b border-foreground/[0.08] last:border-0 pb-1">
                <AccordionTrigger className="font-display font-bold uppercase tracking-tight text-left text-foreground hover:no-underline hover:text-primary transition-colors py-4 text-sm md:text-base">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="font-body text-muted-foreground leading-relaxed text-sm md:text-base pt-2 pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
