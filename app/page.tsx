import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Destinations from "@/components/Destinations";
import TrendingTours from "@/components/TrendingTours";
import ExperienceCta from "@/components/ExperienceCta";
import Reviews from "@/components/Reviews";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#1a1614]">
      <Navbar />
      <Hero />
      <Destinations />
      <TrendingTours />
      <ExperienceCta />
      <Reviews />
      <FinalCta />
      
      {/* The Footer Component replaces the "Coming Soon" text */}
      <Footer />
    </main>
  );
}