import Image from "next/image";

interface ImageMarqueeProps {
  images: string[];
  height?: number;
}

export default function ImageMarquee({
  images,
  height = 200,
}: ImageMarqueeProps) {
  return (
    <div className="relative w-full overflow-hidden py-20 ">
      <div className="marquee flex flex-nowrap gap-6">
        {[...images, ...images].map((src, index) => (
          <div
            key={index}
            className="relative shrink-0 rounded-xl overflow-hidden"
            style={{ height, width: height * 1.6 }}
          >
            <Image
              src={src}
              alt=""
              fill
              className="object-cover"
              priority={index < images.length}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
