"use client";

import { motion } from "framer-motion";
import { ArrowUp, Facebook, Instagram, Twitter, Youtube, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

const footerLinks = {
  company: [
    { name: "About Us", href: "#" },
    { name: "Our Story", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Journal", href: "#" },
  ],
  support: [
    { name: "Contact Us", href: "#" },
    { name: "FAQ", href: "#" },
    { name: "Booking Terms", href: "#" },
    { name: "Privacy Policy", href: "#" },
  ],
  destinations: [
    { name: "Cairo & Giza", href: "#" },
    { name: "Luxor & Aswan", href: "#" },
    { name: "Red Sea", href: "#" },
    { name: "Siwa Oasis", href: "#" },
  ],
};

const socialLinks = [
  { icon: Instagram, href: "#" },
  { icon: Facebook, href: "#" },
  { icon: Twitter, href: "#" },
  { icon: Youtube, href: "#" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#151210] border-t border-[#E5D3B3]/5 font-lato relative pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {/* Replaced Logo Image with Stylized Brand Name */}
            <div className="text-3xl font-playfair font-bold text-[#E5D3B3] tracking-widest cursor-default">
              SIRI<span className="text-[#d4af37]">SAND</span>
            </div>

            <p className="text-stone-500 text-sm leading-relaxed max-w-sm">
              Curating divine journeys through the sands of time. 
              Experience Egypt with unmatched luxury, privacy, and expertise.
            </p>
            
            <div className="flex gap-4 mt-2">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="p-2 rounded-full border border-white/5 text-stone-400 hover:text-[#d4af37] hover:border-[#d4af37]/50 transition-all duration-300"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-2">
            <h4 className="text-[#E5D3B3] font-playfair font-bold mb-6">Company</h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-stone-500 text-sm hover:text-[#d4af37] transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-[#E5D3B3] font-playfair font-bold mb-6">Support</h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-stone-500 text-sm hover:text-[#d4af37] transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h4 className="text-[#E5D3B3] font-playfair font-bold mb-6">Contact</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3 text-stone-500 text-sm">
                <MapPin size={18} className="text-[#d4af37] shrink-0 mt-0.5" />
                <span>123 Nile Corniche, Zamalek,<br />Cairo, Egypt</span>
              </li>
              <li className="flex items-center gap-3 text-stone-500 text-sm">
                <Phone size={18} className="text-[#d4af37] shrink-0" />
                <span>+20 123 456 7890</span>
              </li>
              <li className="flex items-center gap-3 text-stone-500 text-sm">
                <Mail size={18} className="text-[#d4af37] shrink-0" />
                <span>concierge@sirisand.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-stone-600 text-xs uppercase tracking-wider">
            &copy; {new Date().getFullYear()} Siri Sand Tours. All rights reserved.
          </p>

          {/* Back to Top Button */}
          <motion.button
            whileHover={{ y: -5 }}
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-stone-500 text-xs font-bold uppercase tracking-widest hover:text-[#d4af37] transition-colors"
          >
            Back to Top
            <div className="p-2 rounded-full bg-white/5 group-hover:bg-[#d4af37]/10 transition-colors">
              <ArrowUp size={16} />
            </div>
          </motion.button>
        </div>

      </div>
    </footer>
  );
}