"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Facebook, Instagram, Twitter, Mouse } from "lucide-react";

const videos = [
  "/videos/video1.webm",
  "/videos/video2.webm",
  "/videos/video3.webm",
  "/videos/video4.webm",
  "/videos/video5.webm",
];

const stats = [
  { label: "Years Experience", value: "15+" },
  { label: "Destinations", value: "200+" },
  { label: "Happy Travelers", value: "98%" },
  { label: "Support", value: "24/7" },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % videos.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#1a1614] font-lato">
      {/* 1. Background Video Slider */}
      <AnimatePresence mode="popLayout">
        <motion.video
          key={index}
          src={videos[index]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full object-cover opacity-50"
          autoPlay
          muted
          loop
          playsInline
        />
      </AnimatePresence>

      {/* 2. Cinematic Overlays */}
      <div className="absolute inset-0 bg-[#1a1614]/30" />
      <div className="absolute inset-0 bg-linear-to-t from-[#1a1614] via-transparent to-[#1a1614]/40" />

      {/* 3. Main Content */}
      {/* Changed pt-32 to pt-24 md:pt-32 for better mobile spacing */}
      <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-4 pb-12 pt-24 md:pt-32">
        
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex flex-col items-center"
        >
          {/* Reduced text-5xl to text-4xl on mobile */}
          <h1 className="text-4xl md:text-8xl font-playfair font-bold text-[#E5D3B3] mb-6 drop-shadow-2xl leading-none tracking-tight">
            SIRI SAND
            {/* Reduced text-3xl to text-2xl on mobile */}
            <span className="block text-stone-400 text-2xl md:text-5xl mt-3 italic font-normal">
              Tours
            </span>
          </h1>

          {/* Reduced text-base to text-sm on mobile */}
          <p className="text-[#fff9ef] text-sm md:text-lg max-w-2xl font-light mb-8 md:mb-6 leading-relaxed px-4">
            Explore Egypt’s iconic landmarks and hidden gems with S2S. From Luxor and Aswan 
            to Siwa’s oases and Alexandria’s coastline, enjoy memorable trips with premium comfort 
            and personalized service.
          </p>

          {/* Stats Grid - Adjusted gaps for mobile */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-8 md:gap-16 w-full max-w-4xl px-4">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center">
                {/* Reduced text-2xl to text-xl on mobile */}
                <span className="text-xl md:text-3xl font-playfair text-[#E5D3B3] mb-1">
                  {stat.value}
                </span>
                <span className="text-[10px] md:text-xs uppercase tracking-widest text-stone-400 font-bold">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* 4. Hero Footer / Furniture */}
      <div className="absolute bottom-0 w-full z-30 px-6 pb-6 md:pb-10 flex justify-between items-end text-[#E5D3B3]">
        
        {/* Socials (Bottom Left) */}
        <div className="hidden md:flex flex-col gap-6">
          <a href="#" className="hover:text-stone-400 transition-colors"><Instagram size={18} /></a>
          <a href="#" className="hover:text-stone-400 transition-colors"><Facebook size={18} /></a>
          <a href="#" className="hover:text-stone-400 transition-colors"><Twitter size={18} /></a>
          <div className="h-12 w-px bg-stone-500/30 mx-auto mt-2"></div>
        </div>

        {/* Scroll Indicator (Bottom Center) */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-8 flex flex-col items-center gap-3 animate-bounce duration-1000">
          <Mouse className="w-6 h-6 text-stone-400 opacity-80" />
        </div>

        {/* Empty div to balance flex layout on desktop */}
        <div className="hidden md:block w-6"></div>
      </div>
    </section>
  );
}