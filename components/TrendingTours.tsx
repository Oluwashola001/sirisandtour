"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

// Updated with Nubian Village as the HERO item
const trendingItems = [
  {
    id: 1,
    title: "Nubian Village",
    image: "/images/trending/nubian.webp",
    size: "md:col-span-2 md:row-span-2", // New HERO Item: Colorful/Cultural
  },
  {
    id: 2,
    title: "Marsa Alam Diving",
    image: "/images/trending/marsa-alam.webp",
    size: "md:col-span-1 md:row-span-1", // Niche Red Sea spot
  },
  {
    id: 3,
    title: "Khan el-Khalili",
    image: "/images/trending/khan.webp",
    size: "md:col-span-1 md:row-span-1", // Sensory experience
  },
  {
    id: 4,
    title: "Sanctuary of Abu Simbel",
    image: "/images/trending/abu-simbel.webp",
    size: "md:col-span-2 md:row-span-1", // Iconic history
  },
  {
    id: 5,
    title: "Royal Tombs of Luxor",
    image: "/images/trending/luxor-tombs.webp",
    size: "md:col-span-1 md:row-span-2", // Tall Item
  },
  {
    id: 6,
    title: "The White Desert",
    image: "/images/trending/white-desert.webp",
    size: "md:col-span-1 md:row-span-1", // Moved to standard size
  },
  {
    id: 7,
    title: "Siwa Salt Lakes",
    image: "/images/trending/siwa-salt.webp",
    size: "md:col-span-1 md:row-span-1", // Visual stunner
  },
  {
    id: 8,
    title: "Sunset at Philae",
    image: "/images/trending/philae.webp",
    size: "md:col-span-1 md:row-span-1", // Romantic/Specific
  },
  {
    id: 9,
    title: "Wadi Al-Hitan",
    image: "/images/trending/whale-valley.webp",
    size: "md:col-span-1 md:row-span-1", // Very unique (Whale Valley)
  },
  {
    id: 10,
    title: "Grand Egyptian Museum",
    image: "/images/trending/gem.webp",
    size: "md:col-span-2 md:row-span-1", // Modern Architecture
  },
  {
    id: 11,
    title: "Sunrise Balloon",
    image: "/images/trending/balloon.webp",
    // FIXED: Changed from col-span-1 to col-span-2 to fill the gap
    size: "md:col-span-2 md:row-span-1", 
  },
  {
    id: 12,
    title: "Mount Sinai Hike",
    image: "/images/trending/sinai.webp",
    // FIXED: Changed from col-span-1 to col-span-2 to fill the gap
    size: "md:col-span-2 md:row-span-1", 
  },
];

export default function TrendingTours() {
  return (
    // UPDATED: Increased top padding from pt-8 to pt-16 (md:pt-24) to fix spacing issue
    <section className="pt-16 md:pt-24 pb-24 bg-[#1a1614] font-lato relative overflow-hidden">
      
      {/* Background Pattern (Subtle) */}
      <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header - Rebranded for S2S */}
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-stone-500 text-xs md:text-sm uppercase tracking-[0.3em] font-bold"
          >
            The S2S Collection
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-playfair text-[#E5D3B3] mt-3 mb-6"
          >
            Signature <span className="italic text-stone-600">Journeys</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-stone-400 max-w-2xl mx-auto font-light leading-relaxed text-sm md:text-base"
          >
            Experience Egypt through the lens of Siri Sand. Beyond the guidebooks, 
            we curate journeys that blend the divine history of the Pharaohs with modern luxury. 
            From the silence of the White Desert to the vibrant pulse of Cairo's hidden alleys, 
            these are the stories waiting for you.
          </motion.p>
        </div>

        {/* The Bento Grid with Animations */}
        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[250px] gap-4">
          {trendingItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.05, duration: 0.6, ease: "easeOut" }}
              // Removed whileTap={{ scale: 0.98 }} to prevent whole-card shrinking
              className={`relative group rounded-2xl overflow-hidden cursor-pointer bg-[#221e1c] border border-white/5 shadow-2xl ${item.size}`}
            >
              {/* Image */}
              <div className="absolute inset-0 w-full h-full">
                 {/* Fallback color */}
                 <div className="absolute inset-0 bg-stone-800 animate-pulse" />
                 <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  // UPDATED: Added group-active:scale-110 to force zoom on mobile touch
                  className="object-cover transition-transform duration-700 group-hover:scale-105 group-active:scale-110"
                />
              </div>

              {/* Overlay Gradient - Darkens on hover/active for text readability */}
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-80 group-active:opacity-80 transition-opacity duration-300" />

              {/* Text Content */}
              {/* UPDATED: Added group-active classes to animate text on touch */}
              <div className="absolute bottom-0 left-0 w-full p-6 flex justify-between items-end transform translate-y-2 group-hover:translate-y-0 group-active:translate-y-0 transition-transform duration-300">
                <div className="w-full">
                  <h3 className="text-[#E5D3B3] font-playfair text-xl md:text-2xl font-bold leading-none mb-3 drop-shadow-lg">
                    {item.title}
                  </h3>
                  {/* Animated Underline */}
                  <div className="h-0.5 w-0 bg-[#E5D3B3] group-hover:w-full group-active:w-full transition-all duration-500 ease-out opacity-80" />
                </div>
                
                {/* Floating Icon */}
                <div className="bg-white/10 backdrop-blur-md p-2 rounded-full text-white opacity-0 translate-x-4 group-hover:opacity-100 group-active:opacity-100 group-hover:translate-x-0 group-active:translate-x-0 transition-all duration-300 delay-75">
                  <ArrowUpRight size={20} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}