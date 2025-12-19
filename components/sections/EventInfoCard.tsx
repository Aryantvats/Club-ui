interface EventInfoCardProps {
  title: string;
  date: string;
  description: string;
  position?: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
}

export default function EventInfoCard({
  title,
  date,
  description,
  position = {},
}: EventInfoCardProps) {
  const shouldCenterVertically = position.top === "50%";

  return (
    <div
      className={`absolute max-w-[550px] bg-white/20 backdrop-blur-md text-white p-6 ${
        shouldCenterVertically ? "-translate-y-1/2" : ""
      }`}
      style={{
        top: position.top,
        bottom: position.bottom,
        left: position.left,
        right: position.right,
      }}
    >
      <p className="text-[16px] opacity-70">{date}</p>
      <h3 className="text-[36px] font-bold mt-2">{title}</h3>
      <p className="text-[20px] mt-3 leading-relaxed">{description}</p>
      <button className="mt-4 px-4 py-2 text-[16px] font-bold border text-black bg-white">
        Read More
      </button>
    </div>
  );
}
