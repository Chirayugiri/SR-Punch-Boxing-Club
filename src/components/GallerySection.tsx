import { motion } from "framer-motion";
import gallery1 from "@/assets/gallery1.jpeg";
import gallery2 from "@/assets/gallery2.jpg";
import gallery3 from "@/assets/gallery3.jpg";
import gallery4 from "@/assets/gallery4.jpg";
import gallery5 from "@/assets/gallery5.png";
import gallery6 from "@/assets/gallery6.png";

const images = [
  { src: gallery1, alt: "Heavy Bag Session" },
  { src: gallery2, alt: "Sparring Session" },
  { src: gallery3, alt: "Boxing Ring" },
  { src: gallery4, alt: "Coach Shravan" },
  { src: gallery5, alt: "Gym Equipment" },
  { src: gallery6, alt: "Training Gear" },
];

const GallerySection = () => {
  return (
    <section id="gallery" className="section-spacing bg-background relative overflow-hidden">
      {/* Background Section Label */}
      <div className="absolute top-10 left-10 label-tactical !text-[8px] opacity-20">
        GALLERY_ARCHIVE_01
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <p className="label-tactical mb-4">Visual Evidence</p>
            <h2 className="font-display font-black uppercase text-4xl md:text-6xl tracking-tighter">
              INSIDE THE <span className="text-gradient">ARENA</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-sm md:text-base max-w-sm font-body italic border-l border-primary/30 pl-6">
            Witness the raw intensity and discipline that defines SR PUNCH.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative aspect-square md:aspect-video lg:aspect-square overflow-hidden bg-white/5"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover img-grayscale-tactical group-hover:scale-110"
              />
              
              {/* Kinetic Glow Overlay */}
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              {/* TECHNICAL LABEL ON HOVER */}
              <div className="absolute bottom-4 left-4 bg-primary text-foreground px-3 py-1 text-[8px] font-display font-black uppercase tracking-widest translate-y-10 group-hover:translate-y-0 transition-transform duration-300">
                {img.alt}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
