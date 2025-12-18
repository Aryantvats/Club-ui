import Image from "next/image";

import { podcasts } from "@/public/metadata/podcasts";

const PodcastOfTheWeek = () => {
  return (
    <section className="px-6 md:px-20 py-28 text-white">

      {/* Top Section */}
      <div className="flex flex-col lg:flex-row justify-between gap-16 mb-20">
        
        {/* Left Heading */}
        <h2 className="text-[80px] sm:text-5xl md:text-6xl font-extrabold uppercase max-w-xl leading-tight">
          Podcast of <br /> the Week
        </h2>

        {/* Right Content */}
        <div className="max-w-md">
          <p className="text-[20px] leading-relaxed mb-6">
            Lorem ipsum dolor sit amet consectetur. Diam donec egestas est leo
            malesuada massa quisque vitae at. Aliquet scelerisque magna nulla
            aenean euismod sed.
          </p>

          <button className="flex items-center gap-2 px-5 py-2 border border-white rounded-lg text-sm hover:bg-white hover:text-black transition">
            Learn More
            <span className="text-lg">↗</span>
          </button>
        </div>
      </div>

      {/* Podcast Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-16">
        {podcasts.map((podcast) => (
          <div key={podcast.id}>
            
            {/* Row */}
            <div className="flex items-center gap-8">
              
              {/* Number */}
              <span className="text-2xl font-bold ">
                {podcast.id}.
              </span>

              <div className="flex items-center gap-20">      
              {/* Image */}
              <div className="w-[150px] h-[150px] rounded-xl overflow-hidden">
                <Image
                  src={podcast.img}
                  alt={podcast.title}
                  width={150}
                  height={150}
                  className="object-cover"
                />
              </div>

              {/* Text */}
              <div>
                <p className="text-[20px] font-bold">{podcast.title}</p>
                <p className="text-[20px] text-white mt-1 font-bold">{podcast.tags}</p>
                </div>
                        
              </div>
            </div>

            {/* Divider */}
            {(podcast.id=='01' || podcast.id=='03') &&<div className="mt-8 h-px bg-white" />}
          </div>
        ))}
      </div>
    </section>
  );
};

export default PodcastOfTheWeek;
