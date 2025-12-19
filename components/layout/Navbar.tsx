import Link from "next/link";

export default function Navbar() {
  return (
    <nav className=" absolute top-8.5 left-17.5 right-17.5 z-50">
      <div className="w-full flex items-center justify-between py-4">
        
        {/* Left: Logo (flush left) */}
        <div className="pl-6 leading-tight">
          <h1 className="text-[24px] font-bold tracking-wide">
            DHRUVA
          </h1>
          <p className="text-[12px]  tracking-widest">
            ASTRONOMY CLUB
          </p>
        </div>

        {/* Right: Links (flush right) */}
        <div className="pr-6 hidden md:flex items-center gap-8 text-[20px] font-medium tracking-wide">
          <Link href="/" >
            HOME
          </Link>
          <Link href="/events" >
            EVENTS
          </Link>
          <Link href="/podcasts" >
            PODCAST
          </Link>
          <Link href="/about-us" >
            ABOUT
          </Link>
        </div>

      </div>
    </nav>
  );
}
