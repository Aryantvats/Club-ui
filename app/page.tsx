import EventShowcase from "@/components/sections/EventShowcase";
import Hero from "@/components/sections/Hero";
import KnowMoreSection from "@/components/sections/KnowMoreSection";
import RecentEventHome from "@/components/sections/RecentEventHome";
import Image from "next/image";

export default function Home() {
  return (
    <div >
      <Hero />
      
      <RecentEventHome
        image="/images/nebula.jpg"
        date="18/06/2023"
        title="TALK ON COSMIC NEBULA"
        description="Lorem ipsum dolor sit amet consectetur. Augue duis etiam pulvinar duis interdum accumsan tempor bibendum amet. Lorem ipsum dolor sit amet consectetur. Augue duis etiam pulvinar duis interdum accumsan tempor bibendum amet.Lorem ipsum dolor sit amet consectetur. Augue duis etiam pulvinar duis interdum accumsan tempor bibendum amet."
      />
      <EventShowcase />
      <KnowMoreSection />
    </div>
  );
}
