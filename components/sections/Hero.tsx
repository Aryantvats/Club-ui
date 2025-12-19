import Image from "next/image";
import Moon from "@/components/sections/Moon";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center px-6 md:px-20 text-white ">
      <div className="max-w-7xl">
        <h1 className="text-4xl sm:text-5xl md:text-[80px] font-extrabold leading-tight uppercase">
          Let’s travel to the edge <br /> of space
        </h1>

        <p className="mt-2.5 text-sm sm:text-base md:text-[24px] text-white max-w-[950px]">
          We are a group that love to explore and learn new information related to our universe.
          Join us and explore.
        </p>

        <button className="h-[50px] mt-7.5 px-6 py-3 border border-white text-[14px] tracking-widest uppercase hover:bg-white hover:text-black transition">
          Discover More
        </button>
      </div>

      <Moon
        className="
          absolute
          bottom-[-260px]
          right-[148px]
          hidden
          lg:block
          z-50
        "
        size={360}
      />
    </section>
  );
};

export default Hero;
