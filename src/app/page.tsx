import HeroSection from "@/components/HeroSection";
import DefinitionSection from "@/components/DefinitionSection";
import HistoryTimeline from "@/components/HistoryTimeline";
import CoreFeatures from "@/components/CoreFeatures";
import ClimaxSection from "@/components/ClimaxSection";
import Conclusion from "@/components/Conclusion";

export default function Home() {
  return (
    <main className="relative">
      <HeroSection />
      <DefinitionSection />
      <HistoryTimeline />
      <CoreFeatures />
      <ClimaxSection />
      <Conclusion />
    </main>
  );
}
