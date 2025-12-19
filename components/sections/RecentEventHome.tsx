import Image from "next/image";
import EventInfoCard from "./EventInfoCard";

interface RecentEventHomeProps {
  image: string;
  title: string;
  date: string;
  description: string;
}

export default function RecentEventHome({
  image,
  title,
  date,
  description,
}: RecentEventHomeProps) {
  return (
    <section className="relative w-full py-20 bg-stars">
      
      <div className="max-w-7xl mx-auto px-6 mb-6">
        <h2 className="text-white text-[24px] md:text-[32px] font-bold tracking-widest uppercase">
          RECENT EVENTS
        </h2>
      </div>

      <div className="relative max-w-[1300px] mx-auto px-6">
      
        <div className="relative h-[360px] md:h-[560px] w-full overflow-hidden rounded-2xl">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            priority
          />

          <div className="hidden md:block">
            <EventInfoCard
              title={title}
              date={date}
              description={description}
              position={{
                right: "180px",
                top: "50%",
              }}
            />
          </div>
        </div>

        <div className="md:hidden mt-6">
          <EventInfoCard
            title={title}
            date={date}
            description={description}
          />
        </div>

      </div>
    </section>
  );
}
