"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useMotionValueEvent } from "framer-motion";
import { Star, Quote, MapPin, ArrowRight, ArrowLeft } from "lucide-react";
import Image from "next/image";

const originalReviews = [
  {
    id: 1,
    name: "Sarah Jenkins",
    location: "California, USA",
    trip: "The Pharaonic Trail",
    rating: 5,
    text: "I have traveled to over 40 countries, but this trip with S2S was on another level. The private access to the Sphinx at sunrise was a moment I will never forget.",
  },
  {
    id: 2,
    name: "Marcus Thorne",
    location: "London, UK",
    trip: "Nile Cruise Deluxe",
    rating: 5,
    text: "From the moment we landed in Cairo, we didn't lift a finger. The concierge service was impeccable, and our guide, Ahmed, was a walking encyclopedia.",
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    location: "Madrid, Spain",
    trip: "White Desert Safari",
    rating: 5,
    text: "Sleeping under the stars in the White Desert was magical. S2S set up a glamping experience that was comfortable yet wild. The food was incredible!",
  },
  {
    id: 4,
    name: "Wei Chen",
    location: "Shanghai, China",
    trip: "Giza & Alexandria",
    rating: 5,
    text: "Professional, punctual, and premium. The vehicle was brand new, the drivers were safe, and the itinerary was perfectly paced. S2S is the best way to see Egypt.",
  },
  {
    id: 5,
    name: "Amelia & Tom",
    location: "Sydney, Australia",
    trip: "Royal Luxor Tour",
    rating: 5,
    text: "We were worried about the heat, but S2S planned everything perfectly. The balloon ride over Luxor was the highlight of our honeymoon.",
  },
];

// Infinite duplication
const reviews = Array(8).fill(originalReviews).flat().map((review, index) => ({
  ...review,
  uniqueId: `${review.id}-${index}`
}));

export default function Reviews() {
  const [width, setWidth] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);

  useEffect(() => {
    if (carousel.current) {
      // Calculate scroll limits
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, []);

  // Track drag position to update pagination dots (Simple visual feedback)
  useMotionValueEvent(x, "change", (latest) => {
    const isMobile = window.innerWidth < 768;
    const cardWidth = isMobile ? window.innerWidth * 0.8 : 450;
    const gap = isMobile ? 24 : 32;
    const slideWidth = cardWidth + gap;
    
    // Determine which card index is currently focused
    const index = Math.round(Math.abs(latest) / slideWidth);
    setActiveIndex(index % 5);
  });

  return (
    // UPDATED: Changed py-24 to pt-0 pb-24 to reduce top spacing (relies on previous section's bottom padding)
    <section className="pt-0 pb-24 bg-[#1a1614] font-lato overflow-hidden relative">
      
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cartographer.png')] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 mb-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center md:text-left"
        >
          <span className="text-[#d4af37] text-xs font-bold uppercase tracking-[0.3em] mb-4 block">
            Social Proof
          </span>
          <h2 className="text-4xl md:text-5xl font-playfair text-[#E5D3B3]">
            Stories from <span className="italic text-stone-500">The Sands</span>
          </h2>
        </motion.div>
      </div>

      {/* Draggable Carousel */}
      <motion.div 
        ref={carousel} 
        className="cursor-grab active:cursor-grabbing overflow-hidden px-[10vw] md:px-6"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div 
          drag="x" 
          dragConstraints={{ right: 0, left: -width }}
          dragElastic={0.1} 
          style={{ x }}
          className="flex gap-6 md:gap-8 w-max"
        >
          {reviews.map((review, i) => (
            <motion.div
              key={review.uniqueId}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 5) * 0.1, duration: 0.6 }}
              className="relative w-[80vw] md:w-[450px] h-[400px] p-8 md:p-10 rounded-3xl bg-[#221e1c] border border-white/5 shadow-2xl flex flex-col justify-between group hover:border-[#d4af37]/30 transition-colors duration-500 transform-gpu"
            >
              
              {/* Giant Quote Icon Watermark */}
              <Quote className="absolute top-6 right-8 text-white/5 w-24 h-24 rotate-180 group-hover:text-[#d4af37]/10 transition-colors duration-500 z-0" />

              <div className="relative z-10 h-full flex flex-col">
                {/* Stars */}
                <div className="flex gap-1 mb-6 text-[#d4af37]">
                  {[...Array(review.rating)].map((_, j) => (
                    <Star key={j} size={16} fill="currentColor" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-[#E5D3B3] font-playfair text-lg md:text-xl leading-relaxed italic mb-8">
                  "{review.text}"
                </p>

                {/* User Info - Pushed to bottom */}
                <div className="mt-auto flex items-center gap-4 border-t border-white/10 pt-6">
                    <div className="w-12 h-12 rounded-full bg-linear-to-br from-[#d4af37] to-[#8a701f] flex items-center justify-center text-[#1a1614] font-bold text-lg font-playfair shrink-0 shadow-lg">
                    {review.name.charAt(0)}
                    </div>
                    
                    <div>
                    <h4 className="text-white font-bold text-sm uppercase tracking-wider">
                        {review.name}
                    </h4>
                    <div className="flex items-center gap-2 text-stone-500 text-xs mt-1">
                        <MapPin size={12} />
                        <span>{review.location}</span>
                    </div>
                    </div>
                </div>
              </div>

            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Simple Swipe Indicator (Replaces Dots) */}
      <div className="flex justify-center mt-10 gap-4 items-center opacity-40 animate-pulse">
        <ArrowLeft size={20} className="text-stone-500" />
        <span className="text-[10px] uppercase tracking-widest text-stone-500">Drag to Explore</span>
        <ArrowRight size={20} className="text-stone-500" />
      </div>

    </section>
  );
}