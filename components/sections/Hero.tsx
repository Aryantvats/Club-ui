import Image from "next/image";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center px-6 md:px-20 text-white">
      <div className="max-w-7xl ">
        
        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight uppercase">
          Let’s travel to the edge <br /> of space
        </h1>

        {/* Description */}
        <p className="mt-2.5 text-sm sm:text-base md:text-lg text-white max-w-xl">
          We are a group that love to explore and learn new information related to our universe.
          Join us and explore.
        </p>

        {/* Button */}
        <button className="mt-7.5 px-6 py-3 border border-white text-sm tracking-widest uppercase hover:bg-white hover:text-black transition">
          Discover More
        </button>
          </div>
          
       
    </section>
  );
};

export default Hero;
