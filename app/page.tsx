import Hero from "@/components/sections/Hero";
import Moon from "@/components/sections/Moon";
import Image from "next/image";

export default function Home() {
  return (
    <div >
      <Hero />
      <Moon top="470px" right="148px" />
    </div>
  );
}
