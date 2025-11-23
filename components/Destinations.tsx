"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const destinations = [
  {
    id: 1,
    name: "Cairo",
    image: "/images/destinations/cairo.png",
    tours: "5 Tours",
    desc: "Experience the vibrant energy of Egypt's capital, from historic mosques to the bustling Khan el-Khalili market.",
  },
  {
    id: 2,
    name: "Giza",
    image: "/images/destinations/giza.png",
    tours: "4 Tours",
    desc: "Stand before the Great Pyramids and the Sphinx, the timeless guardians of ancient history.",
  },
  {
    id: 3,
    name: "Luxor",
    image: "/images/destinations/luxor.png",
    tours: "2 Tours",
    desc: "Explore the majestic temples and tombs of Luxor, including the Valley of the Kings and Karnak Temple.",
  },
  {
    id: 4,
    name: "Aswan",
    image: "/images/destinations/aswan.png",
    tours: "1 Tour",
    desc: "Discover the serene beauty of Aswan with guided tours to Philae Temple, the High Dam, and Nubian villages.",
  },
  {
    id: 5,
    name: "Siwa Oasis",
    image: "/images/destinations/siwa.png",
    tours: "1 Tour",
    desc: "Experience the tranquil charm of Siwa Oasis, featuring crystal-clear springs and deep-rooted Berber culture.",
  },
  {
    id: 6,
    name: "Alexandria",
    image: "/images/destinations/alexandria.png",
    tours: "1 Tour",
    desc: "Discover the coastal charm of Alexandria with guided tours to ancient libraries and Roman ruins.",
  },
  {
    id: 7,
    name: "Ain Sokhna",
    image: "/images/destinations/sokhna.png",
    tours: "1 Tour",
    desc: "Relax by the Red Sea in Ain Sokhna, known for its beautiful beaches and clear waters.",
  },
  {
    id: 8,
    name: "Fayoum",
    image: "/images/destinations/fayoum.png",
    tours: "1 Tour",
    desc: "Uncover Fayoum’s charm with guided tours through its serene lakes, desert landscapes, and archaeology.",
  },
];

export default function Destinations() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className="py-20 md:py-32 bg-[#1a1614] overflow-hidden font-lato relative z-10">
      
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-6 mb-12 md:mb-20 text-center">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-stone-500 text-xs md:text-sm uppercase tracking-[0.3em] font-bold"
        >
          Discover Egypt
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-playfair text-[#E5D3B3] mt-3 mb-6"
        >
          Popular <span className="italic text-stone-500">Destinations</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-stone-400 max-w-xl mx-auto font-light leading-relaxed text-sm md:text-base"
        >
          From the eternal Pyramids to the azure coasts, choose your next unforgettable journey.
        </motion.p>
      </div>

      {/* Infinite Scroll Track */}
      {/* We duplicate the array to create a seamless loop */}
      <div 
        className="flex w-full"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onClick={() => setIsPaused(!isPaused)} // Click to toggle pause on mobile
      >
        <motion.div
          className="flex gap-6 md:gap-8 px-4"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 60, // Slower speed for better readability
            repeatType: "loop",
          }}
          style={{ 
            width: "max-content",
            animationPlayState: isPaused ? 'paused' : 'running' 
          }}
        >
          {[...destinations, ...destinations].map((dest, i) => (
            <div 
              key={`${dest.id}-${i}`}
              className="group relative w-[280px] md:w-[400px] h-[400px] md:h-[500px] bg-[#221e1c] rounded-xl overflow-hidden cursor-pointer shrink-0 border border-white/5 hover:border-stone-500/50 transition-colors duration-300"
            >
              {/* Image Container */}
              <div className="relative h-[65%] w-full overflow-hidden">
                {/* Fallback color if image is missing */}
                <div className="absolute inset-0 bg-stone-800 animate-pulse" />
                <Image
                  src={dest.image}
                  alt={dest.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-[#1a1614]/80 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] md:text-xs font-bold text-[#E5D3B3] uppercase tracking-widest border border-white/10 z-10">
                  {dest.tours}
                </div>
              </div>

              {/* Content Container */}
              <div className="p-5 md:p-6 h-[35%] flex flex-col justify-between relative z-10 bg-[#221e1c]">
                <div>
                  <h3 className="text-xl md:text-2xl font-playfair text-[#E5D3B3] mb-2 group-hover:text-white transition-colors">
                    {dest.name}
                  </h3>
                  <p className="text-stone-400 text-xs md:text-sm line-clamp-2 leading-relaxed font-light">
                    {dest.desc}
                  </p>
                </div>
                
                <div className="flex items-center gap-2 text-stone-500 text-[10px] md:text-xs font-bold uppercase tracking-widest group-hover:text-stone-300 transition-colors mt-4">
                  <span>View Details</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Pause Hint (Mobile Only) */}
      <p className="text-center text-stone-600 text-[10px] uppercase tracking-widest mt-8 md:hidden opacity-50">
        Tap card to pause
      </p>

    </section>
  );
}