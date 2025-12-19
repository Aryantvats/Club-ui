import Link from "next/link";
import { Mail, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative w-full bg-stars text-white py-16 px-4 sm:px-6 md:px-20 .bg-stars-footer">
      <div className="w-full mx-auto">

        <p className="text-center text-[14px] sm:text-[16px] md:text-[20px] font-bold uppercase mb-10 md:mb-14">
          “Astronomy compels the soul to look upwards and leads us from this
          world to another”
        </p>

        <nav className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-10 text-[14px] md:text-[16px] mb-10 md:mb-14">
          <Link href="/" className="hover:opacity-80 transition">
            Home
          </Link>
          <Link href="/experts" className="hover:opacity-80 transition">
            Experts
          </Link>
          <Link href="/about-us" className="hover:opacity-80 transition">
            About us
          </Link>
          <Link href="/podcasts" className="hover:opacity-80 transition">
            Podcasts
          </Link>
          <Link href="/contact" className="hover:opacity-80 transition">
            Contacts
          </Link>
        </nav>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[14px] md:text-[16px] opacity-90">
          <div className="flex items-center gap-2">
            <MessageCircle size={16} />
            <span>Let’s chat</span>
          </div>

          <div className="flex items-center gap-2">
            <Mail size={16} />
            <span>info@logoipsum.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
