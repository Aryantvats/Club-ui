import Image from "next/image";
import PodcastCard from "./PodcastCard";

const Podcasts = () => {
  return (
    <main className="relative px-4 sm:px-6 md:px-20 pt-32 md:pt-32 pb-20 md:pb-24 text-white">
      <div className="flex items-center justify-center mb-12 md:mb-20">
        <h1 className="text-[32px] sm:text-[48px] md:text-[200px] font-extrabold tracking-widest uppercase flex items-center">
          P
          <span className="relative w-[40px] h-[40px] sm:w-[60px] sm:h-[60px] md:w-[160px] md:h-[160px] mx-2 md:mr-4">
            <Image
              src="/moons/moon-podcast1.png"
              alt="Moon"
              fill
              className="object-cover rounded-full"
            />
          </span>
          DCASTS
        </h1>
      </div>

      <div className="flex flex-col gap-6 md:gap-10 max-w-7xl mx-auto">
        <PodcastCard src="/images/podcast1.png" />
        <PodcastCard src="/images/podcast2.png" />
      </div>
    </main>
  );
};

export default Podcasts;
