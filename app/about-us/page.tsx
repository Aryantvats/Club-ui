import Moon from "@/components/sections/Moon";
import TeamLeaders from "@/components/sections/TeamLeaders";
import Image from "next/image";

const AboutUsPage = () => {
  return (
    <div className="relative overflow-x-hidden">
      <main className="relative min-h-screen px-6 md:px-20 pt-28 pb-16 text-white overflow-hidden bg-stars" >
      
      {/* Heading */}
      <h1 className="text-4xl sm:text-5xl md:text-[96px] font-extrabold uppercase mt-5 mb-10">
        About Us.
      </h1>

      {/* Content Wrapper */}
      
        <div className="w-full flex flex-col md:flex-row items-start gap-50 justify-center">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex justify-center md:justify-end">
            <Image
              src="/logos/dhruva-logo.png"
              alt="Dhruva Logo"
              width={335}
              height={370}
              className="opacity-90"
            />
          </div>

          {/* Text */}
          <div className="text-sm sm:text-base text-gray-200 leading-relaxed max-w-120">
            <p>
              Lorem ipsum dolor sit amet consectetur. Diam donec egestas est leo malesuada massa  quisque vitae at. Aliquet scelerisque magna nulla aenean euismod sed. Adipiscing placerat quisque eu rhoncus consequat.Lorem ipsum dolor sit amet consectetur. Diam donec egestas est leo malesuada massa quisque vitae at. Aliquet scelerisque magna nulla aenean euismod sed. Adipiscing placerat quisque eu rhoncus consequat.Lorem ipsum dolor sit amet consectetur. Diam donec egestas est leo malesuada massa quisque vitae at. Aliquet scelerisque magna nulla aenean euismod sed. Adipiscing placerat quisque eu rhoncus consequat.Lorem ipsum dolor sit amet consectetur. Diam donec egestas est leo malesuada massa quisque vitae at. Aliquet scelerisque magna nulla aenean euismod sed. Adipiscing placerat quisque eu rhoncus consequat.Lorem ipsum dolor sit amet consectetur. 
            </p>

            
          </div>

        </div>
      </main>
      {/* Moon */}
      <Moon
        top="430px"
        right="-70px"
        size={380}
        className=" z-50"
      />
      {/* Group Image Section */}
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
