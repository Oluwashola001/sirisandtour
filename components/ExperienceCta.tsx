"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function ExperienceCta() {
  return (
    // UPDATED: Changed 'md:mt-0 md:pt-12' to 'md:-mt-8 md:pt-0'
    // This pulls the section up slightly on desktop to close the gap.
    <section className="pt-0 -mt-12 md:-mt-8 md:pt-0 pb-24 bg-[#1a1614] font-lato px-6 relative z-20">
      
      <motion.div 
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-5xl mx-auto relative overflow-hidden rounded-4xl border border-[#E5D3B3]/10 bg-linear-to-br from-[#2c2c2c] to-[#1a1614] shadow-2xl"
      >
        
        {/* Background Texture/Glow */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-[#E5D3B3]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 bg-stone-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center text-center py-16 md:py-20 px-6 md:px-12">
          
          {/* Brand Tag */}
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[#d4af37] text-xs font-bold uppercase tracking-[0.3em] mb-6 border border-[#d4af37]/30 px-4 py-1.5 rounded-full"
          >
            The S2S Standard
          </motion.span>

          {/* Main Headline */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-3xl md:text-5xl font-playfair text-[#E5D3B3] mb-6 leading-tight"
          >
            Siri Sand – <span className="italic text-stone-400">Discover Unmatched Comfort</span>
          </motion.h2>

          {/* Description */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-stone-400 max-w-2xl text-sm md:text-base font-light leading-relaxed mb-10"
          >
            Experience the extraordinary touches that make every moment unforgettable.
            From private concierge support to special access at historic sites,
            we elevate the way you explore Egypt.
          </motion.p>

          {/* CTA Button */}
          <motion.button 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ delay: 0.5 }}
            className="group relative px-10 py-4 bg-[#E5D3B3] text-[#1a1614] rounded-full font-bold uppercase tracking-widest text-xs md:text-sm overflow-hidden shadow-lg hover:shadow-[#E5D3B3]/20"
          >
            <span className="relative z-10 flex items-center gap-2">
              See All Destinations
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </span>
            {/* Hover Shine Effect */}
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
          </motion.button>

        </div>
      </motion.div>

    </section>
  );
}