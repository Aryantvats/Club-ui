import Image from "next/image";
import EventInfoCard from "./EventInfoCard";

interface EventItemProps {
  index: number;
  image: string;
  title: string;
  date: string;
  reverse?: boolean;
}

const EventItem = ({ index, image, title, date, reverse }: EventItemProps) => {
  return (
    <div className="relative">

      <div
        className={`relative w-[880px] h-[700px] overflow-hidden ${
          reverse ? "ml-auto" : ""
        }`}
      >
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      <EventInfoCard
        title={title}
        date={date}
        description="Lorem ipsum dolor sit amet consectetur. Augue duis etiam pulvinar duis interdum accumsan tempor bibendum amet. Lorem ipsum dolor sit amet consectetur. Augue duis etiam pulvinar duis interdum accumsan tempor bibendum amet.Lorem ipsum dolor sit amet consectetur. Augue duis etiam pulvinar duis interdum accumsan tempor bibendum amet."
        position={{
          bottom: "40px",
          ...(reverse
            ? { left: "160px" }
            : { right: "160px" }),
        }}
      />

      <span
        className={`absolute top-0 text-[32px] font-bold ${
          reverse ? "left-0" : "right-0"
        }`}
      >
        #{index}
      </span>
    </div>
  );
};

export default EventItem;
