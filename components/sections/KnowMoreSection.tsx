import Image from "next/image";

export default function KnowMoreSection() {
  return (
    <section className="relative w-full bg-stars py-15 text-white">
      <div className="w-full mx-auto px-25">
        
        <p className="text-center text-[32px] font-bold tracking-[0.35em] uppercase opacity-80 mb-16">
          Know more about us here
        </p>

        
        <div className="flex items-center gap-20">
          
          <div className="shrink-0">
            <Image
              src="/logos/dhruva-logo.png" 
              alt="Dhruva Logo"
              width={260}
              height={290}
              className="object-contain"
            />
          </div>

          
          <div className="max-w-[970px]">
            <h2 className="text-[36px] font-semibold leading-snug mb-5 uppercase">
              We are club that learn, share and explore <br />
              everything related to our universe.
            </h2>

            <p className="text-[24px] leading-relaxed opacity-90 uppercase">
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
