import { motion } from "framer-motion";
import { Check, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import FreeTrialModal from "./FreeTrialModal";

const plans = [
  {
    name: "General",
    price: "1,200",
    features: ["Boxing Techniques", "Stomach Workout", "Strength & Conditioning", "Flexible Timings"],
    popular: false,
    delay: 0.1,
  },
  {
    name: "Regular",
    price: "1,500",
    features: [
      "Everything in General",
      "Pads Workout",
      "Advanced Techniques",
      "Sparring Sessions",
    ],
    popular: true,
    delay: 0.2,
  },
  {
    name: "Personal",
    price: "4,000",
    features: [
      "One-on-One Training",
      "Custom Diet Plan",
      "Goal-Based Progress",
      "Competition Coaching",
    ],
    popular: false,
    delay: 0.3,
  },
];

const MembershipSection = () => {
  return (
    <section id="plans" className="section-spacing bg-background relative overflow-hidden">
      {/* Background Decorative Type */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none opacity-[0.02] select-none">
        <span className="font-display font-black text-[50vw] leading-none">FORGE</span>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center mb-20">
          <p className="label-tactical mb-4">Investment Tiers</p>
          <h2 className="font-display font-black uppercase text-4xl md:text-7xl leading-tight tracking-tighter">
            EARN YOUR <span className="text-gradient">RANK</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-0 border border-white/5">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: plan.delay }}
              className={`relative p-8 md:p-12 flex flex-col transition-all duration-500 group ${
                plan.popular 
                  ? "bg-primary text-foreground glow-red-strong z-20 scale-[1.02] md:scale-110" 
                  : "bg-white/[0.02] text-foreground hover:bg-white/[0.04] z-10"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-foreground text-background font-display font-black text-[10px] uppercase tracking-[0.2em] px-4 py-1.5 shadow-xl">
                  MOST EFFECTIVE
                </div>
              )}

              <div className="mb-10 text-center">
                <p className={`font-display font-bold uppercase tracking-widest text-xs mb-4 ${plan.popular ? "text-foreground/80" : "text-primary"}`}>
                  {plan.name} Tier
                </p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-2xl font-display font-bold">₹</span>
                  <span className="text-6xl md:text-7xl font-display font-black tracking-tighter">
                    {plan.price}
                  </span>
                </div>
                <p className={`text-[10px] uppercase tracking-widest mt-2 ${plan.popular ? "text-foreground/70" : "text-muted-foreground"}`}>
                  per month / no hidden fees
                </p>
              </div>

              <ul className="space-y-5 mb-12 flex-grow">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-4 text-xs md:text-sm font-display font-bold uppercase tracking-wider">
                    <Check className={`w-4 h-4 shrink-0 ${plan.popular ? "text-foreground" : "text-primary"}`} strokeWidth={3} />
                    <span className={plan.popular ? "text-foreground/90" : "text-foreground/70"}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <FreeTrialModal>
                <Button 
                  variant={plan.popular ? "default" : "outline"}
                  className={`w-full py-8 font-display font-black text-xs tracking-[0.2em] transition-all ${
                    plan.popular 
                      ? "bg-foreground text-primary hover:bg-foreground/90 glow-red" 
                      : "border-primary/30 text-primary hover:bg-primary/10"
                  }`}
                >
                  START DRILLING
                </Button>
              </FreeTrialModal>

              {/* Technical Indicator */}
              <div className="mt-6 flex justify-center opacity-30 group-hover:opacity-60 transition-opacity">
                <Shield className="w-5 h-5" strokeWidth={1.5} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global Friction Reducer */}
        <div className="mt-16 text-center">
           <p className="label-tactical !text-muted-foreground">
             * All plans include Access to Heavy Bags & Basic Conditioning Gear.
           </p>
        </div>
      </div>
    </section>
  );
};

export default MembershipSection;
