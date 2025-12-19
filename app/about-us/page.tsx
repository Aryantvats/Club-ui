import AboutUs from "@/components/sections/AboutUs";
import Moon from "@/components/sections/Moon";
import TeamLeaders from "@/components/sections/TeamLeaders";
import Image from "next/image";

const AboutUsPage = () => {
  return (
    <div className="relative overflow-x-hidden">
      <AboutUs />
      <Moon
        top="430px"
        right="-70px"
        size={380}
        className=" z-50"
      />
      <section className="w-auto h-[600px] relative z-0">
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
