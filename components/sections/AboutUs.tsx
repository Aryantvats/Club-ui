import React from "react";
import Image from "next/image";
import Moon from "@/components/sections/Moon";

const AboutUs = () => {
  return (
    <main className="relative min-h-screen px-4 sm:px-6 md:px-20 pt-28 md:pt-28 pb-16 text-white  bg-stars">
      <h1 className="text-[32px] sm:text-[40px] md:text-[96px] font-extrabold uppercase mb-8 md:mb-10">
        About Us.
      </h1>

      <div className="w-full flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-20 justify-center">
        <div className="flex-shrink-0 flex justify-center">
          <Image
            src="/logos/dhruva-logo.png"
            alt="Dhruva Logo"
            width={220}
            height={240}
            className="opacity-90"
          />
        </div>

        <div className="text-[14px] sm:text-[15px] md:text-base text-gray-200 leading-relaxed max-w-xl md:max-w-[480px] text-center md:text-left">
          <p>
            Lorem ipsum dolor sit amet consectetur. Diam donec egestas est leo malesuada massa quisque vitae at. Aliquet scelerisque magna nulla aenean euismod sed. Adipiscing placerat quisque eu rhoncus consequat.Lorem ipsum dolor sit amet consectetur. Diam donec egestas est leo malesuada massa quisque vitae at. Aliquet scelerisque magna nulla aenean euismod sed. Adipiscing placerat quisque eu rhoncus consequat.Lorem ipsum dolor sit amet consectetur. Diam donec egestas est leo malesuada massa quisque vitae at. Aliquet scelerisque magna nulla aenean euismod sed. Adipiscing placerat quisque eu rhoncus consequat.Lorem ipsum dolor sit amet consectetur. Diam donec egestas est leo malesuada massa quisque vitae at. Aliquet scelerisque magna nulla aenean euismod sed. Adipiscing placerat quisque eu rhoncus consequat.Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>
          </div>
          
        <Moon
            bottom="-260px"
            right="-70px"
            size={380}
            className=" z-50 hidden"
        />
    </main>
  );
};

export default AboutUs;
