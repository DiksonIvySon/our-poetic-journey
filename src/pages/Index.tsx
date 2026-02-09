import { useRef } from "react";
import FloatingHearts from "@/components/FloatingHearts";
import MusicPlayer from "@/components/MusicPlayer";
import LandingSection from "@/components/sections/LandingSection";
import HowWeMetSection from "@/components/sections/HowWeMetSection";
import AdventuresSection from "@/components/sections/AdventuresSection";
import DistanceSection from "@/components/sections/DistanceSection";
import MemoryGameSection from "@/components/sections/MemoryGameSection";
import GallerySection from "@/components/sections/GallerySection";
import FiveYearsSection from "@/components/sections/FiveYearsSection";
import LoveLetterSection from "@/components/sections/LoveLetterSection";

const Index = () => {
  const storyRef = useRef<HTMLDivElement>(null);

  const handleBegin = () => {
    storyRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-background min-h-screen">
      <FloatingHearts />
      <MusicPlayer />
      <LandingSection onBegin={handleBegin} />
      <div ref={storyRef}>
        <HowWeMetSection />
      </div>
      <AdventuresSection />
      <DistanceSection />
      <MemoryGameSection />
      <GallerySection />
      <FiveYearsSection />
      <LoveLetterSection />

      {/* Footer */}
      <footer className="py-12 text-center bg-warm-dark">
        <p className="font-display text-2xl text-gradient-romance">MasiDikky</p>
        <p className="font-poem text-sm text-muted-foreground mt-2">
          A love story, still being written ♥
        </p>
      </footer>
    </div>
  );
};

export default Index;
