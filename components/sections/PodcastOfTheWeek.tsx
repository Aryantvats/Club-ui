import Image from "next/image";
import { podcasts } from "@/public/metadata/podcasts.js";

const PodcastOfTheWeek = () => {
  return (
    <section className="px-4 sm:px-6 md:px-20 md:py-28 text-white">
      <div className="flex flex-col lg:flex-row justify-between gap-10 md:gap-16 mb-14 md:mb-20">
        <h2 className="text-[36px] sm:text-[44px] md:text-[64px] font-extrabold uppercase max-w-xl leading-tight">
          Podcast of <br /> the Week
        </h2>

        <div className="max-w-md">
          <p className="text-[14px] sm:text-[16px] md:text-[20px] leading-relaxed mb-6">
            Lorem ipsum dolor sit amet consectetur. Diam donec egestas est leo
            malesuada massa quisque vitae at. Aliquet scelerisque magna nulla
            aenean euismod sed.
          </p>

          <button className="flex items-center gap-2 px-4 py-2 border border-white rounded-lg text-[12px] md:text-sm hover:bg-white hover:text-black transition">
            Learn More
            <span className="text-base md:text-lg">↗</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-x-24 md:gap-y-16">
        {podcasts.map((podcast, index) => (
          <div key={podcast.id}>
            <div className="flex items-start gap-4 sm:gap-6">
              <span className="text-[18px] sm:text-[20px] md:text-2xl font-bold">
                {podcast.id}.
              </span>

              <div className="flex items-center gap-4 sm:gap-6 md:gap-10">
                <div className="w-[90px] h-[90px] sm:w-[120px] sm:h-[120px] md:w-[150px] md:h-[150px] rounded-lg overflow-hidden">
                  <Image
                    src={podcast.img}
                    alt={podcast.title}
                    width={150}
                    height={150}
                    className="object-cover"
                  />
                </div>

                <div>
                  <p className="text-[14px] sm:text-[16px] md:text-[20px] font-bold">
                    {podcast.title}
                  </p>
                  <p className="text-[12px] sm:text-[14px] md:text-[20px] text-white mt-1 font-bold">
                    {podcast.tags}
                  </p>
                </div>
              </div>
            </div>

            {index < 3 && (
              <div className="mt-6 h-px bg-white md:hidden" />
            )}

            {(podcast.id === "01" || podcast.id === "02") && (
              <div className="hidden md:block mt-8 h-px bg-white" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default PodcastOfTheWeek;
