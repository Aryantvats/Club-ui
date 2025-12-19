"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="absolute top-6 left-4 right-4 md:top-8 md:left-20 md:right-20 z-50 text-white">
        <div className="w-full flex items-center justify-between py-4">
          <div className="leading-tight">
            <h1 className="text-[20px] md:text-[24px] font-bold tracking-wide">
              DHRUVA
            </h1>
            <p className="text-[10px] md:text-[12px] tracking-widest">
              ASTRONOMY CLUB
            </p>
          </div>

          <div className="hidden md:flex items-center gap-8 text-[20px] font-medium tracking-wide">
            <Link href="/">HOME</Link>
            <Link href="/events">EVENTS</Link>
            <Link href="/podcasts">PODCAST</Link>
            <Link href="/about-us">ABOUT</Link>
          </div>

          <button
            className="md:hidden"
            onClick={() => setOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {open && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm">
          <div className="absolute top-0 right-0 w-full h-screen bg-black text-white p-6">
            <div className="flex justify-end mb-10">
              <button onClick={() => setOpen(false)}>
                <X size={28} />
              </button>
            </div>

            <div className="flex flex-col items-center gap-8 text-[24px] font-semibold tracking-widest">
              <Link href="/" onClick={() => setOpen(false)}>
                HOME
              </Link>
              <Link href="/events" onClick={() => setOpen(false)}>
                EVENTS
              </Link>
              <Link href="/podcasts" onClick={() => setOpen(false)}>
                PODCAST
              </Link>
              <Link href="/about-us" onClick={() => setOpen(false)}>
                ABOUT
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
