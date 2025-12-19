import Image from "next/image";

import { team } from "@/public/metadata/team.js";

const TeamLeaders = () => {
  return (
    <section className="relative px-6 md:px-20 py-24 text-white bg-stats">
      
      
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase text-center mb-16">
        Team Leaders of Our Club
      </h2>

     
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-5 gap-y-2.5">
        {team.map((member) => (
          <div key={member.id} className="flex flex-col items-center">
            
            
            <div className="w-50 h-50 rounded-2xl overflow-hidden mb-4">
              <Image
                src={member.img}
                alt={member.name}
                width={200}
                height={200}
                className="object-cover w-full h-full"
              />
            </div>

            
            <p className="text-sm font-semibold uppercase tracking-wide">
              {member.name}
            </p>

            
            <p className="text-sm font-semibold uppercase tracking-widest mt-1">
              {member.post}
            </p>
          </div>
        ))}
      </div>



    </section>
  );
};

export default TeamLeaders;
