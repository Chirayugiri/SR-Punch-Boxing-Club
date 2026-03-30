import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { CONFIG, CONTACT_LINKS } from "@/config/constants";


const LocationSection = () => {
  return (
    <section className="section-spacing">
      <div className="container px-4 md:px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.2, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <p className="text-primary font-body text-sm uppercase tracking-[0.3em] mb-4 text-gradient">
            Find Us
          </p>
          <h2 className="font-display font-black uppercase text-3xl md:text-5xl tracking-tight">
            Our <span className="text-gradient">Location</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: [0.2, 1, 0.3, 1] }}
            className="glass-card p-8 flex flex-col justify-center"
          >
            <MapPin className="w-10 h-10 text-primary mb-6" strokeWidth={1.5} />

            <h3 className="font-display font-bold text-lg uppercase tracking-tight mb-4 text-foreground">
              {CONFIG.BUSINESS_NAME}
            </h3>
            <address className="text-muted-foreground leading-relaxed not-italic text-lg">
              Parnaka-Vasai West
              <br />
              Palghar, Maharashtra 401201
            </address>
            <a
              href={CONTACT_LINKS.PHONE}
              className="text-primary font-bold mt-4 hover:underline"
            >
              {CONFIG.COUNTRY_CODE} {CONFIG.PHONE_NUMBER}
            </a>
          </motion.div>


          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1, ease: [0.2, 1, 0.3, 1] }}
            className="glass-card overflow-hidden min-h-[300px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.578856171451!2d72.80249137427545!3d19.344072743503926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7adbf94f2e589%3A0xa0499754ff6a214b!2sSr.punch%20boxing%20club!5e0!3m2!1sen!2sin!4v1774869830635!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "300px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="SR PUNCH Location"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
