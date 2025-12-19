import Image from "next/image";

interface MoonProps {
  src?: string;
  top?: string;
  right?: string;
  left?: string;
  bottom?: string;
  size?: number;
  className?: string;
}

const Moon = ({
  src = "/moons/moon-hero.png",
  top,
  right,
  left,
  bottom,
  size = 342,
  className = "",
}: MoonProps) => {
  return (
    <div
      className={` md:block absolute ${className}`}
      style={{
        top,
        right,
        left,
        bottom,
      }}
    >
      <Image
        src={src}
        alt="Moon"
        width={size}
        height={size}
        className="opacity-90 pointer-events-none"
      />
    </div>
  );
};

export default Moon;
