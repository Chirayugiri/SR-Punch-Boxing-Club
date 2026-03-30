import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Send } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";
import { CONFIG, CONTACT_LINKS } from "@/config/constants";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().min(10, "Phone number too short").max(15),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    toast.success("Inquiry sent successfully! We'll get back to you soon.");
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  const inputClass = "w-full bg-secondary/50 border border-foreground/[0.08] px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors font-body text-sm";

  return (
    <section id="contact" className="section-spacing bg-secondary/30">
      <div className="container px-4 md:px-6 max-w-4xl">

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.2, 1, 0.3, 1] }}
          className="mb-16"
        >
          <p className="text-primary font-body text-sm uppercase tracking-[0.3em] mb-4">
            Get In Touch
          </p>
          <h2 className="font-display font-black uppercase text-3xl md:text-5xl tracking-tight">
            Contact <span className="text-gradient">Us</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: [0.2, 1, 0.3, 1] }}
            className="flex flex-col gap-4"
          >
            <a href={CONTACT_LINKS.PHONE} className="block">
              <div className="glass-card-hover p-6 flex items-center gap-4">
                <Phone className="w-8 h-8 text-primary" strokeWidth={1.5} />
                <div>
                  <p className="font-display font-bold text-sm uppercase tracking-tight text-foreground">Call Now</p>
                  <p className="text-muted-foreground text-sm">{CONFIG.COUNTRY_CODE} {CONFIG.PHONE_NUMBER}</p>
                </div>
              </div>
            </a>
            <a
              href={CONTACT_LINKS.WHATSAPP()}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="glass-card-hover p-6 flex items-center gap-4">
                <MessageCircle className="w-8 h-8 text-accent" strokeWidth={1.5} />
                <div>
                  <p className="font-display font-bold text-sm uppercase tracking-tight text-foreground">WhatsApp</p>
                  <p className="text-muted-foreground text-sm">Message us directly</p>
                </div>
              </div>
            </a>
          </motion.div>


          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1, ease: [0.2, 1, 0.3, 1] }}
            className="flex flex-col gap-4"
          >
            <div>
              <input
                type="text"
                placeholder="Your Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={inputClass}
              />
              {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
            </div>
            <div>
              <input
                type="email"
                placeholder="Email Address"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={inputClass}
              />
              {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
            </div>
            <div>
              <input
                type="tel"
                placeholder="Phone Number"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className={inputClass}
              />
              {errors.phone && <p className="text-destructive text-xs mt-1">{errors.phone}</p>}
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className={`${inputClass} resize-none`}
              />
              {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
            </div>
            <Button type="submit" variant="strike" size="lg" className="gap-2 w-full">
              <Send className="w-4 h-4" />
              Send Inquiry
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
