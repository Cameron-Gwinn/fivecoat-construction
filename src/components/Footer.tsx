import Link from "next/link";
import { Phone, Mail, HardHat } from "lucide-react";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer
      className="border-t"
      style={{ backgroundColor: "#161B22", borderColor: "#21262D" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <HardHat size={24} style={{ color: "#F97316" }} />
              <span
                className="text-lg font-bold uppercase tracking-widest"
                style={{ fontFamily: "var(--font-heading)", color: "#F0F6FC" }}
              >
                Fivecoat<span style={{ color: "#F97316" }}> Construction</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "#8B949E" }}>
              Nearly 40 years of excellence in commercial general contracting.
              Quality, integrity, and craftsmanship on every project.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4
              className="text-sm font-bold uppercase tracking-widest mb-4"
              style={{ fontFamily: "var(--font-heading)", color: "#F0F6FC" }}
            >
              Navigation
            </h4>
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors duration-200 hover:text-orange-400"
                    style={{ color: "#8B949E" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-sm font-bold uppercase tracking-widest mb-4"
              style={{ fontFamily: "var(--font-heading)", color: "#F0F6FC" }}
            >
              Contact
            </h4>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="tel:+19729321501"
                  className="flex items-center gap-2 text-sm transition-colors duration-200 hover:text-orange-400"
                  style={{ color: "#8B949E" }}
                >
                  <Phone size={14} style={{ color: "#F97316" }} />
                  972-932-1501
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@fivecoat.com"
                  className="flex items-center gap-2 text-sm transition-colors duration-200 hover:text-orange-400"
                  style={{ color: "#8B949E" }}
                >
                  <Mail size={14} style={{ color: "#F97316" }} />
                  info@fivecoat.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="mt-10 pt-6 border-t flex flex-col md:flex-row items-center justify-between gap-2"
          style={{ borderColor: "#21262D" }}
        >
          <p className="text-xs" style={{ color: "#8B949E" }}>
            © {new Date().getFullYear()} Fivecoat Construction, LLC. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: "#8B949E" }}>
            Licensed General Contractor
          </p>
        </div>
      </div>
    </footer>
  );
}
