import Image from "next/image";

export default function KnowMoreSection() {
  return (
    <section className="relative w-full bg-stars py-16 md:py-24 text-white">
      <div className="w-full mx-auto px-4 sm:px-6 md:px-20 lg:px-25">
        <p className="text-center text-[18px] sm:text-[22px] md:text-[32px] font-bold tracking-[0.25em] md:tracking-[0.35em] uppercase opacity-80 mb-10 md:mb-16">
          Know more about us here
        </p>

        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20">
          <div className="shrink-0">
            <Image
              src="/logos/dhruva-logo.png"
              alt="Dhruva Logo"
              width={200}
              height={220}
              className="object-contain mx-auto"
            />
          </div>

          <div className="max-w-[970px] text-center md:text-left">
            <h2 className="text-[20px] sm:text-[24px] md:text-[36px] font-semibold leading-snug mb-4 md:mb-5 uppercase">
              We are club that learn, share and explore <br className="hidden md:block" />
              everything related to our universe.
            </h2>

            <p className="text-[14px] sm:text-[16px] md:text-[24px] leading-relaxed opacity-90 uppercase">
              DHRUVA is a college club, we work toward increasing knowledge
              about space, cosmos and everything we are still learning about.
              We share and learn together.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
