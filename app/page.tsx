import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Destinations from "@/components/Destinations";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#1a1614]">
      <Navbar />
      <Hero />
      <Destinations />
      
      {/* Spacer for next section */}
      <div className="h-screen flex flex-col items-center justify-center bg-[#1a1614] text-stone-500">
        <p>Next Section: Tours / About / Contact</p>
      </div>
    </main>
  );
}