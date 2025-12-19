import Image from "next/image";

const EventBanner = () => {
  return (
    <section className="px-6 md:px-20 py-24 pt-40">
      <div className="relative w-full h-[560px] rounded-2xl overflow-hidden">
        
        {/* Background */}
        <Image
          src="/images/astronaut.jpg"
          alt="Event Banner"
          fill
          className="object-cover"
          priority
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content */}
        <div className="relative z-10 h-full flex items-center px-6 md:px-16 pt-30">
          <div className="flex flex-col md:flex-row md:items-end gap-6 md:gap-10">

            <h2 className="flex-1 text-3xl sm:text-4xl md:text-7xl font-extrabold uppercase leading-tight">
              OUR STARGAZERS <br />
              SPECTACLE
            </h2>

            <p className="text-sm md:text-[32px] uppercase tracking-widest font-extrabold mb-1">
              A Journey Through the Cosmos
            </p>

          </div>
        </div>
      </div>
    </section>
  );
};

export default EventBanner;
