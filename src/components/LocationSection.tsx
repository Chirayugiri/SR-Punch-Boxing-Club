import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

const LocationSection = () => {
  return (
    <section id="location" className="section-spacing bg-background relative overflow-hidden">
      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-1 px-4 lg:px-0 bg-white/5 border border-white/5">
          {/* Map Block */}
          <div className="relative h-[400px] lg:h-auto overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.51352327072!2d72.81232817551004!3d19.380424542031175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7a9f939db27e5%3A0x6d8f28f1174ef8fb!2sSR%20Punch%20Boxing%20Club!5e0!3m2!1sen!2sin!4v1711612000000!5m2!1sen!2sin"
              className="w-full h-full grayscale invert opacity-70 hover:opacity-100 transition-opacity duration-700"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* Monolith Overlay */}
            <div className="absolute inset-0 pointer-events-none border-4 border-background" />
          </div>

          {/* Info Block */}
          <div className="p-10 lg:p-20 flex flex-col justify-center">
            <p className="label-tactical mb-6">HQ Deployment</p>
            <h2 className="font-display font-black uppercase text-4xl md:text-6xl tracking-tighter leading-none mb-8">
              ESTABLISH <br />
              <span className="text-gradient">CONTACT</span>
            </h2>

            <div className="space-y-10">
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                   <span className="label-tactical !text-[10px] mb-2">PRIMARY COORDINATES</span>
                   <p className="text-foreground font-display font-black uppercase text-lg leading-tight">
                     Parnaka-Vasai West,<br />
                     Palghar, Maharashtra 401201
                   </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center shrink-0">
                   <Navigation className="w-6 h-6 text-primary" />
                </div>
                <div>
                   <span className="label-tactical !text-[10px] mb-2">OPERATIONAL STATUS</span>
                   <p className="text-muted-foreground font-body text-base">
                     Full tactical support available. 
                     Located in the heart of Vasai's combat community.
                   </p>
                </div>
              </div>

              <a 
                href="https://maps.app.goo.gl/3be7a9f939db27e5" 
                target="_blank" 
                className="inline-block mt-4"
              >
                <Button variant="strike" size="lg" className="px-12 h-16 text-xs tracking-[0.2em]">
                  NAVIGATE TO HQ
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
