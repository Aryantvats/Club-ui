import EventItem from "./EventItem";
import Moon from "@/components/sections/Moon";

const RecentEvents = () => {
  return (
    <section className="relative px-4 sm:px-6 md:px-20 lg:px-40">

      <Moon
        top="-20px"
        left="20px"
        size={240}
        className="z-50 hidden"
      />

      <h2 className="text-center uppercase tracking-widest text-[24px] md:text-[32px] font-bold mb-12 md:mb-16">
        Recent Events
      </h2>

      <div className="mb-24 md:mb-40">
        <EventItem
          index={1}
          image="/images/event1.jpg"
          title="Talk on Dark Matter"
          date="18/06/2023"
        />
      </div>

      <div className="mb-24 md:mb-40">
        <EventItem
          index={2}
          image="/images/event22.jpg"
          title="Astronauts We Know"
          date="18/06/2023"
          reverse
        />
      </div>

    </section>
  );
};

export default RecentEvents;
