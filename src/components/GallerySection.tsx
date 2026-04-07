import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import gallery1 from "@/assets/gallery1.jpeg";
import gallery2 from "@/assets/gallery2.jpeg";
import gallery3 from "@/assets/gallery3.jpeg";
import gallery4 from "@/assets/gallery4.jpeg";

const images = [
  { src: gallery3, alt: "Victory & Recognition", grid: "md:col-span-2 md:row-span-1" },
  { src: gallery2, alt: "Full Contact Training", grid: "md:col-span-1 md:row-span-2" },
  { src: gallery1, alt: "Elite Performance", grid: "md:col-span-1 md:row-span-1" },
  { src: gallery4, alt: "Future Champions", grid: "md:col-span-1 md:row-span-1" },
];

const GallerySection = () => {
  return (
    <section id="gallery" className="section-spacing">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-body text-sm uppercase tracking-[0.3em] mb-4">
            Gallery
          </p>
          <h2 className="font-display font-black uppercase text-3xl md:text-5xl tracking-tight">
            Inside <span className="text-gradient">The Lab</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 h-[1000px] md:h-[800px]">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative overflow-hidden group border border-foreground/[0.05] ${img.grid}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="font-display font-bold uppercase tracking-widest text-xs md:text-sm text-foreground">
                  {img.alt}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <a href="https://www.instagram.com/sr.punch/" target="_blank" rel="noopener noreferrer">
            <Button variant="strike" size="lg" className="gap-2">
              <Instagram className="w-4 h-4 md:w-5 md:h-5" />
              View More on Instagram
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default GallerySection;
