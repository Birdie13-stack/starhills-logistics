import Branches from "@/components/Branches";
import Hero from "@/components/HeroSection";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div className=" text-neutral">
      <Hero />
      <Services />
      <Branches />
    </div>
  );
}
