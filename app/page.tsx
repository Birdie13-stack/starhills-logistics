import Branches from "@/components/Branches";
import Hero from "@/components/HeroSection";
import Services from "@/components/Services";
import Inquiry from "@/components/Inquiry";
import Features from "@/components/Features";
import NewsSection from "@/components/NewsSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Starhills Logistics — Fast & Reliable Delivery",
  description: "Efficient cargo and freight transport across the nation",
};

export default function Home() {
  return (
    <div className=" text-neutral">
      <Hero />
      <Services />
      <Inquiry />
      <Features />
      <Branches />

      <NewsSection />
    </div>
  );
}
