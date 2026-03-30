import { motion } from "framer-motion";
import { Check, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "General Fitness",
    price: "2,000",
    period: "month",
    features: [
      "Access to Gym Equipment",
      "Functional Training",
      "General Workout Plan",
      "Locker Room Access",
    ],
    popular: false,
  },
  {
    name: "Boxing Pro",
    price: "3,500",
    period: "month",
    features: [
      "All General Features",
      "Boxing Technique Classes",
      "Sparring Sessions",
      "1-on-1 Feedback",
      "Bag Work & Drills",
    ],
    popular: true,
  },
  {
    name: "Skill Dev",
    price: "8,000",
    period: "quarterly",
    features: [
      "All Pro Features",
      "Personal Training Sessions",
      "Nutritional Guidance",
      "Video Analysis",
      "Priority Bookings",
    ],
    popular: false,
  },
];

const MembershipSection = () => {
  return (
    <section id="plans" className="section-spacing bg-secondary/20">
      <div className="container px-4 md:px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-body text-sm uppercase tracking-[0.3em] mb-4">
            Membership
          </p>
          <h2 className="font-display font-black uppercase text-3xl md:text-5xl tracking-tight">
            Choose Your <span className="text-gradient">Plan</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`relative glass-card p-8 flex flex-col ${
                plan.popular ? "border-primary ring-1 ring-primary/20 scale-105 z-10" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-primary text-foreground text-[10px] font-bold uppercase tracking-widest px-3 py-1 -translate-y-1/2 rounded-none">
                  Most Popular
                </div>
              )}

              <h3 className="font-display font-bold text-xl uppercase tracking-tight mb-2">
                {plan.name}
              </h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-3xl font-black font-display text-primary">₹{plan.price}</span>
                <span className="text-muted-foreground text-sm">/{plan.period}</span>
              </div>

              <ul className="flex-grow flex flex-col gap-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-foreground/80">
                    <Check className="w-4 h-4 text-primary shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a href="#contact" className="mt-auto">
                <Button variant={plan.popular ? "strike" : "outline"} className="w-full">
                  Get Started
                </Button>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MembershipSection;
