"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight, Gem, Scroll, CarFront } from "lucide-react";

// Unique perks that define the S2S "Premium Comfort" brand
const perks = [
  {
    id: 1,
    icon: Gem,
    title: "Private & Bespoke",
    description:
      "Itineraries tailored to your pace, with private guides and drivers for a truly personal experience.",
  },
  {
    id: 2,
    icon: Scroll,
    title: "Expert Egyptologists",
    description:
      "Journey with highly qualified guides who unlock the secrets and stories of ancient history.",
  },
  {
    id: 3,
    icon: CarFront, // Using CarFront for a more premium vehicle feel
    title: "Luxury Fleet & Stays",
    description:
      "Travel in comfort in modern, air-conditioned vehicles and stay in Egypt’s finest hotels and cruises.",
  },
];

// FIX: Explicitly type this as 'Variants' so TypeScript knows 'easeInOut' is a valid easing type, not just a string.
const iconVariant: Variants = {
  float: {
    y: [0, -8, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export default function FinalCta() {
  return (
    // UPDATED: Changed desktop margin from 'md:-mt-12' to 'md:-mt-4'.
    // This relaxes the overlap on desktop, adding more space at the top.
    <section className="pt-0 -mt-6 md:-mt-4 pb-24 bg-[#1a1614] font-lato relative z-20">
      {/* Subtle Background Texture */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Main Headline & CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#d4af37] text-xs font-bold uppercase tracking-[0.3em] mb-4 block">
              Why Choose S2S
            </span>
            <h2 className="text-4xl md:text-5xl font-playfair text-[#E5D3B3] mb-6 leading-tight">
              Your Journey, <span className="italic text-stone-400">Elevated.</span>
            </h2>
            <p className="text-stone-400 text-lg max-w-xl font-light leading-relaxed mb-10">
              Experience Egypt with unmatched comfort, privacy, and expertise.
              We handle every detail, so you can simply be present in the moment.
            </p>

            {/* CTA Button - Reusing the style for consistency */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-10 py-4 bg-[#E5D3B3] text-[#1a1614] rounded-full font-bold uppercase tracking-widest text-xs md:text-sm overflow-hidden shadow-lg hover:shadow-[#E5D3B3]/20"
            >
              <span className="relative z-10 flex items-center gap-2">
                Start Planning Your Trip
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </span>
              {/* Hover Shine Effect */}
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            </motion.button>
          </motion.div>

          {/* Right Column: Perks List */}
          <div className="flex flex-col gap-10">
            {perks.map((perk, i) => (
              <motion.div
                key={perk.id}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                className="flex items-start gap-6 group"
              >
                {/* Animated Icon Container */}
                <motion.div
                  variants={iconVariant}
                  animate="float"
                  className="shrink-0 relative"
                >
                  <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-[#d4af37]/20 to-[#1a1614] border border-[#d4af37]/30 flex items-center justify-center shadow-lg shadow-[#d4af37]/5 group-hover:shadow-[#d4af37]/20 transition-shadow duration-500">
                    <perk.icon
                      size={28}
                      className="text-[#d4af37] group-hover:text-[#E5D3B3] transition-colors duration-300"
                    />
                  </div>
                  {/* Icon Glow */}
                  <div className="absolute inset-0 bg-[#d4af37] opacity-20 blur-xl rounded-full group-hover:opacity-30 transition-opacity duration-500 -z-10" />
                </motion.div>

                {/* Text Content */}
                <div>
                  <h3 className="textxl font-playfair text-[#E5D3B3] font-bold mb-2 group-hover:text-white transition-colors">
                    {perk.title}
                  </h3>
                  <p className="text-stone-400 font-light leading-relaxed">
                    {perk.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}