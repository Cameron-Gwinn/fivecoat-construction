"use client";

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "rgba(13,17,23,0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid #21262D" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <Image
            src="/fivecoat-logo.png"
            alt="Fivecoat Construction"
            width={200}
            height={50}
            className="h-10 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium uppercase tracking-widest transition-colors duration-200"
              style={{
                color: pathname === link.href ? "#F97316" : "#8B949E",
                fontFamily: "var(--font-heading)",
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="px-5 py-2 text-sm font-bold uppercase tracking-widest rounded transition-colors duration-200"
            style={{
              backgroundColor: "#F97316",
              color: "#0D1117",
              fontFamily: "var(--font-heading)",
            }}
          >
            Get a Quote
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          style={{ color: "#F0F6FC" }}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden px-6 pb-6 pt-2 flex flex-col gap-4"
          style={{ backgroundColor: "#0D1117", borderTop: "1px solid #21262D" }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-base font-bold uppercase tracking-widest py-2"
              style={{
                fontFamily: "var(--font-heading)",
                color: pathname === link.href ? "#F97316" : "#F0F6FC",
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-2 px-5 py-3 text-center text-base font-bold uppercase tracking-widest rounded"
            style={{
              backgroundColor: "#F97316",
              color: "#0D1117",
              fontFamily: "var(--font-heading)",
            }}
          >
            Get a Quote
          </Link>
        </div>
      )}
    </header>
  );
}
