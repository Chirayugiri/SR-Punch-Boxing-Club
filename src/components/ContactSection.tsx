import { Send, Phone, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTACT_LINKS } from "@/config/constants";

const ContactSection = () => {
  return (
    <section id="contact-form" className="section-spacing bg-background relative overflow-hidden">
      {/* Background Decorative Type */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 font-display font-black text-[30vw] opacity-[0.01] leading-none pointer-events-none select-none">
        DRILL
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left: Content */}
            <div>
              <p className="label-tactical mb-4">Immediate Comms</p>
              <h2 className="font-display font-black uppercase text-4xl md:text-7xl leading-none tracking-tighter mb-8">
                TRANSMIT <br />
                <span className="text-gradient">DETAILS</span>
              </h2>
              <p className="text-muted-foreground text-lg font-body leading-relaxed mb-12">
                Deploy your information below. 
                Our command team will respond within 12 operational hours.
              </p>

              <div className="flex flex-col gap-6">
                <a 
                  href={CONTACT_LINKS.PHONE} 
                  className="flex items-center gap-6 group"
                >
                  <div className="w-14 h-14 bg-white/5 flex items-center justify-center group-hover:bg-primary transition-colors">
                    <Phone className="w-6 h-6 text-primary group-hover:text-foreground" />
                  </div>
                  <div>
                    <span className="label-tactical !text-[8px]">VOCAL LINE</span>
                    <p className="font-display font-black uppercase text-xl group-hover:text-primary transition-colors">Call Support</p>
                  </div>
                </a>

                <a 
                  href={CONTACT_LINKS.WHATSAPP()} 
                  className="flex items-center gap-6 group"
                >
                  <div className="w-14 h-14 bg-white/5 flex items-center justify-center group-hover:bg-primary transition-colors">
                    <MessageSquare className="w-6 h-6 text-primary group-hover:text-foreground" />
                  </div>
                  <div>
                    <span className="label-tactical !text-[8px]">DIGITAL RELAY</span>
                    <p className="font-display font-black uppercase text-xl group-hover:text-primary transition-colors">WhatsApp HQ</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Right: Technical Form */}
            <form className="space-y-6 bg-white/[0.02] p-8 md:p-12 border border-white/5">
              <div className="space-y-2">
                <label className="label-tactical !text-[10px]">FULL_NAME</label>
                <input 
                  type="text" 
                  placeholder="IDENTIFY YOURSELF"
                  className="w-full bg-background border border-white/10 p-4 font-display font-bold text-xs tracking-widest focus:border-primary outline-none transition-colors rounded-none text-foreground"
                />
              </div>
              
              <div className="space-y-2">
                <label className="label-tactical !text-[10px]">COMM_CHANNEL (EMAIL)</label>
                <input 
                  type="email" 
                  placeholder="REPLY_TO@BASE.COM"
                  className="w-full bg-background border border-white/10 p-4 font-display font-bold text-xs tracking-widest focus:border-primary outline-none transition-colors rounded-none text-foreground"
                />
              </div>

              <div className="space-y-2">
                <label className="label-tactical !text-[10px]">OBJECTIVE</label>
                <textarea 
                  rows={4}
                  placeholder="WHAT ARE YOUR TRAINING GOALS?"
                  className="w-full bg-background border border-white/10 p-4 font-display font-bold text-xs tracking-widest focus:border-primary outline-none transition-colors rounded-none resize-none text-foreground"
                />
              </div>

              <Button variant="strike" className="w-full h-16 text-xs tracking-[0.3em]">
                 INITIATE CONTACT <Send className="ml-3 w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
