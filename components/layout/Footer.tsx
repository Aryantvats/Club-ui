import Link from "next/link";
import { Mail, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative w-full bg-stars text-white py-20 px-20">
      <div className="w-full mx-auto px-20">
        {/* Quote */}
        <p className="text-center text-[20px] font-bold  uppercase mb-14">
          “Astronomy compels the soul to look upwards and leads us from this
          world to another”
        </p>

        {/* Navigation */}
        <nav className="flex justify-center gap-10 text-[16px] mb-14">
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

        {/* Bottom row */}
        <div className="flex items-center justify-between text-[16px] opacity-90">
          {/* Left */}
          <div className="flex items-center gap-2">
            <MessageCircle size={16} />
            <span>Let’s chat</span>
          </div>

          {/* Right */}
          <div className="flex items-center gap-2">
            <Mail size={16} />
            <span>info@logoipsum.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
