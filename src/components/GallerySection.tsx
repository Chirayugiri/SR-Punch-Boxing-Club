import { motion } from "framer-motion";
import gallery1 from "@/assets/gallery-1.png";
import gallery2 from "@/assets/gallery-2.png";
import gallery3 from "@/assets/gallery-3.png";
import gallery4 from "@/assets/gallery-4.png";

const images = [
  { src: gallery1, alt: "Sparring Session", grid: "md:col-span-2 md:row-span-2" },
  { src: gallery2, alt: "Training Area", grid: "md:col-span-1 md:row-span-1" },
  { src: gallery3, alt: "Boxing Class", grid: "md:col-span-1 md:row-span-2" },
  { src: gallery4, alt: "Professional Ring", grid: "md:col-span-1 md:row-span-1" },
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

        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 h-[600px] md:h-[800px]">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative overflow-hidden group ${img.grid}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-300" />
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="font-display font-bold uppercase tracking-wider text-sm">
                  {img.alt}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
