import EventShowcase from "@/components/sections/EventShowcase";
import Hero from "@/components/sections/Hero";
import KnowMoreSection from "@/components/sections/KnowMoreSection";
import Moon from "@/components/sections/Moon";
import RecentEventHome from "@/components/sections/RecentEventHome";
import Image from "next/image";

export default function Home() {
  return (
    <div >
      <Hero />
      <Moon top="470px" right="148px" className="z-50"/>
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
