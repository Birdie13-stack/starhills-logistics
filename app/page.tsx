import Branches from "@/components/Branches";
import Hero from "@/components/HeroSection";
import Services from "@/components/Services";
import Inquiry from "@/components/Inquiry";
import Features from "@/components/Features";
import NewsSection from "@/components/NewsSection";

export default function Home() {
  return (
    <div className=" text-neutral">
      <Hero />
      <Services />
      <Branches />
      <Inquiry />
      <Features />
      <NewsSection />
    </div>
  );
}
