import Image from "next/image";
import PodcastCard from "./PodcastCard";

const Podcasts = () => {
  return (
    <main className="relative px-6 md:px-20 pt-32 pb-24 text-white">

      {/* Heading */}
      <div className="flex items-center justify-center mb-20">
        <h1 className="text-6xl md:text-[200px] font-extrabold tracking-widest uppercase flex items-center ">
          P
          <span className="relative w-[70px] h-[70px] md:w-[160px] md:h-[160px] md:mr-4">
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

      {/* Podcast Cards */}
      <div className="flex flex-col gap-10 max-w-8xl mx-auto">
        <PodcastCard src="/images/podcast1.png" />
        <PodcastCard src="/images/podcast2.png" />
      </div>
    </main>
  );
};

export default Podcasts;
