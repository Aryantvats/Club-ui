import EventItem from "./EventItem";
import Moon from "@/components/sections/Moon";

const RecentEvents = () => {
  return (
    <section className="relative  px-6 md:px-40">

      
      <Moon top="-30px" left="40px" size={360} className="z-50"/>

      
      <h2 className="text-center uppercase tracking-widest text-[32px] font-bold mb-16">
        Recent Events
      </h2>

      <EventItem
        index={1}
        image="/images/event1.jpg"
        title="Talk on Dark Matter"
        date="18/06/2023"
      />

      <EventItem
        index={2}
        image="/images/event22.jpg"
        title="Astronauts We Know"
        date="18/06/2023"
        reverse
      />
    </section>
  );
};

export default RecentEvents;
