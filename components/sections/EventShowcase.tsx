"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/events/event1.png",
  "/events/event2.png",
  "/events/event3.png",
  "/events/event4.png",
  "/events/event5.png",
];

const sizeMap = {
  0: { w: 800, h: 400 }, 
  1: { w: 640, h: 320 }, 
  2: { w: 480, h: 240 }, 
};

export default function EventShowcase() {
  const [active, setActive] = useState(2);

  return (
    <section className="relative pt-15 bg-stars text-white overflow-hidden">
      
      <h2 className="text-center tracking-[0.35em] text-[32px] font-bold mb-16 uppercase">
        What’s it like when we have events
      </h2>

      
      <div className="relative h-[440px] flex items-center justify-center px-20">
        {images.map((src, index) => {
          const offset = index - active;
          const absOffset = Math.abs(offset);

          if (absOffset > 2) return null;

          const size =
            sizeMap[absOffset as keyof typeof sizeMap];

          return (
            <div
              key={index}
              className="absolute transition-all duration-500 ease-out"
              style={{
                transform: `translateX(${offset * 180}px)`,
                zIndex: 10 - absOffset,
                opacity: absOffset === 2 ? 0.6 : 1,
              }}
            >
              <div
                className="relative rounded-[32px] overflow-hidden"
                style={{
                  width: size.w,
                  height: size.h,
                }}
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          );
        })}
      </div>

      
      <div className="flex items-center justify-center gap-6 mt-10">
        <button
          onClick={() =>
            setActive((p) => Math.max(p - 1, 0))
          }
          className="p-2 rounded-full hover:bg-white/10 transition"
        >
          <ChevronLeft size={22} />
        </button>

        <div className="flex gap-2">
          {images.map((_, i) => (
            <span
              key={i}
              className={`w-2 h-2 rounded-full transition ${
                i === active
                  ? "bg-white"
                  : "bg-white/30"
              }`}
            />
          ))}
        </div>

        <button
          onClick={() =>
            setActive((p) =>
              Math.min(p + 1, images.length - 1)
            )
          }
          className="p-2 rounded-full hover:bg-white/10 transition"
        >
          <ChevronRight size={22} />
        </button>
      </div>
    </section>
  );
}
