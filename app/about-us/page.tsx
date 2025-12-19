import AboutUs from "@/components/sections/AboutUs";
import TeamLeaders from "@/components/sections/TeamLeaders";
import Image from "next/image";

const AboutUsPage = () => {
  return (
    <div className="relative overflow-x-hidden">
      <AboutUs />
      
      <section className="w-auto h-[300px] md:h-[600px] relative z-0">
        <Image
          src="/images/group.jpg"
          alt="Community Group"
          fill
          className="object-cover"
          priority
        />
      </section>
      <section>
        <TeamLeaders />
      </section>
      </div>
  );
};

export default AboutUsPage;
