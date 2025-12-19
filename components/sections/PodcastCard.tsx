import Image from "next/image";

interface PodcastCardProps {
  src: string;
}

const PodcastCard = ({ src }: PodcastCardProps) => {
  return (
    <div className="relative w-full h-[220px] sm:h-[280px] md:h-150 rounded-2xl md:rounded-3xl overflow-hidden bg-black/60">
      <Image
        src={src}
        alt="Podcast"
        fill
        className="object-cover opacity-90"
      />

      <div className="absolute inset-0 bg-black/40" />

      <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 flex items-center gap-2 text-[12px] md:text-sm">
        <span className="opacity-70">Available on</span>
        <Image
          src="/icons/youtube1.png"
          alt="YouTube"
          width={20}
          height={20}
          className="md:w-6 md:h-6"
        />
        <span className="font-semibold">YouTube</span>
      </div>
    </div>
  );
};

export default PodcastCard;
