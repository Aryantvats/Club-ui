import Image from "next/image";

interface PodcastCardProps {
  src: string;
}

const PodcastCard = ({ src }: PodcastCardProps) => {
  return (
    <div className="relative w-full h-150 rounded-3xl overflow-hidden bg-black/60">
      
      {/* Image */}
      <Image
        src={src}
        alt="Podcast"
        fill
        className="object-cover opacity-90"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Badge */}
      <div className="absolute bottom-6 left-6 flex items-center gap-2 text-sm">
        <span className="opacity-70">Available on</span>
        <Image
          src="/icons/youtube1.png"
          alt="YouTube"
          width={24}
          height={24}
        />
        <span className="font-semibold">YouTube</span>
      </div>
    </div>
  );
};

export default PodcastCard;
