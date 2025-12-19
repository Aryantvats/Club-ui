import Image from "next/image";
import { team } from "@/public/metadata/team.js";

const TeamLeaders = () => {
  return (
    <section className="relative px-4 sm:px-6 md:px-20 py-16 md:py-24 text-white bg-stats">
      <h2 className="text-[20px] sm:text-[24px] md:text-[32px] font-extrabold uppercase text-center mb-10 md:mb-16">
        Team Leaders of Our Club
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-4 sm:gap-x-5 gap-y-6">
        {team.map((member) => (
          <div key={member.id} className="flex flex-col items-center">
            <div className="w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] md:w-[180px] md:h-[180px] rounded-xl md:rounded-2xl overflow-hidden mb-3 md:mb-4">
              <Image
                src={member.img}
                alt={member.name}
                width={200}
                height={200}
                className="object-cover w-full h-full"
              />
            </div>

            <p className="text-[12px] sm:text-[13px] md:text-sm font-semibold uppercase tracking-wide text-center">
              {member.name}
            </p>

            <p className="text-[11px] sm:text-[12px] md:text-sm font-semibold uppercase tracking-widest mt-1 text-center">
              {member.post}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamLeaders;
