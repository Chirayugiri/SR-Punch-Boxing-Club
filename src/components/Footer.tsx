import { Instagram, Phone } from "lucide-react";
import { CONFIG, CONTACT_LINKS } from "@/config/constants";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-white/5 pt-24 pb-12 overflow-hidden">
      <div className="container px-4 md:px-6 relative">
        {/* Background Monolith Watermark */}
        <div className="absolute -bottom-20 -left-20 font-display font-black text-[20vw] opacity-[0.02] leading-none pointer-events-none select-none">
          PUNCH
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24 relative z-10">
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-3 mb-8 group">
              <div className="w-12 h-12 bg-primary flex items-center justify-center font-display font-black text-2xl italic text-foreground group-hover:glow-red transition-all">
                S
              </div>
              <span className="font-display font-black uppercase text-3xl tracking-tighter">
                SR <span className="text-primary italic">PUNCH</span>
              </span>
            </a>
            <p className="text-muted-foreground text-lg font-body leading-relaxed max-w-md">
              The premier combat sports facility in Vasai West. 
              Forging champions through discipline, intensity, and technical mastery.
            </p>
          </div>

          <div>
            <p className="label-tactical mb-8">Navigation Map</p>
            <ul className="space-y-4">
              {["About", "Programs", "Trainer", "Gallery", "FAQ"].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="font-display font-bold text-[10px] uppercase tracking-[0.2em] text-foreground/60 hover:text-primary transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="label-tactical mb-8">Social Intel</p>
            <div className="flex flex-col gap-4">
              <a 
                href={CONFIG.SOCIAL.INSTAGRAM} 
                target="_blank" 
                className="flex items-center gap-4 group h-12 border border-white/5 px-6 hover:bg-primary hover:border-primary transition-all duration-300"
              >
                <Instagram className="w-4 h-4 group-hover:text-foreground" />
                <span className="font-display font-black text-[10px] uppercase tracking-widest group-hover:text-foreground">Instagram</span>
              </a>
              <a 
                href={CONTACT_LINKS.WHATSAPP()} 
                target="_blank" 
                className="flex items-center gap-4 group h-12 border border-white/5 px-6 hover:bg-primary hover:border-primary transition-all duration-300"
              >
                <Phone className="w-4 h-4 group-hover:text-foreground" />
                <span className="font-display font-black text-[10px] uppercase tracking-widest group-hover:text-foreground">WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
          <p className="text-[10px] font-display font-bold uppercase tracking-[0.3em] text-muted-foreground">
            © {new Date().getFullYear()} SR PUNCH BOXING CLUB. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8">
            <span className="text-[8px] font-display font-black uppercase tracking-widest opacity-30">Security: Active</span>
            <span className="text-[8px] font-display font-black uppercase tracking-widest opacity-30">Status: Tactical</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
