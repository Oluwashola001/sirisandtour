"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Destinations", href: "#" },
  { name: "Tours", href: "#" },
  { name: "About", href: "#" },
  { name: "Contact", href: "#" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            // Changed opacity from /95 to /60 for more transparency
            ? "bg-[#1a1614]/60 backdrop-blur-md py-4 shadow-xl"
            : "bg-transparent py-6"
        }`}
      >
        {/* Added 'relative' here so we can absolute position the links */}
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center relative">
          {/* Logo Area - Adjusted mobile size (h-14 w-36) vs desktop (h-20 w-64) */}
          <Link href="/" className="flex items-center gap-2 cursor-pointer md:ml-12">
            <div className="relative h-14 w-36 md:h-20 md:w-64">
              <Image
                src="/logo.png"
                alt="Siri Sand Tours"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* Desktop Links - Centered Absolutely */}
          <div className="hidden md:flex items-center gap-12 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-bold font-lato text-[#E5D3B3] hover:text-stone-400 transition-colors uppercase tracking-[0.2em]"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button - Lighter Grey & Hand Cursor */}
          <div className="hidden md:block">
            <button className="cursor-pointer px-8 py-3 rounded-full bg-stone-600 text-white font-lato text-xs font-bold uppercase tracking-widest hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg border border-transparent hover:border-stone-400">
              Book A Trip
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden text-[#E5D3B3] cursor-pointer hover:text-stone-400 transition-colors" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            // Added 'overflow-y-auto' to allow scrolling on small screens
            // Added 'pb-10' for bottom spacing
            className="fixed inset-0 z-40 bg-[#1a1614] flex flex-col items-center justify-start pt-32 pb-10 gap-8 md:hidden overflow-y-auto"
          >
            <div className="flex flex-col items-center gap-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-3xl font-playfair text-[#E5D3B3] hover:text-stone-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Mobile Menu CTA */}
            <motion.button 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ delay: 0.5 }}
              className="mt-4 px-10 py-4 rounded-full bg-stone-600 text-white font-bold tracking-widest uppercase text-sm shadow-lg active:scale-95 transition-transform cursor-pointer shrink-0"
            >
              Book Now
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}