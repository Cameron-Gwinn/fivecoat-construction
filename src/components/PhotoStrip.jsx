"use client";

"use client";

import { useRef } from "react";
import { motion } from "framer-motion";

const photos = [
  { src: "/photos/project-church.jpg",       label: "C Life Church" },
  { src: "/photos/proj-clements.jpg",        label: "Clements Ranch Community Center" },
  { src: "/photos/proj-fbck-childrens.jpg",  label: "FBC Kaufman – Children's Building" },
  { src: "/photos/proj-fbck-worship.jpg",    label: "FBC Kaufman – Worship Center" },
  { src: "/photos/proj-fbck-porch.jpg",      label: "FBC Kaufman – The Porch" },
  { src: "/photos/project-eye.jpg",          label: "Kleiman Evangelista Eye Center" },
  { src: "/photos/project-storage.jpg",      label: "Lion's Den Self Storage" },
  { src: "/photos/project-civic.jpg",        label: "Kaufman Civic Center" },
  { src: "/photos/proj-stmartins.jpg",       label: "St. Martin's Catholic Church" },
  { src: "/photos/proj-firstpres.jpg",       label: "First Presbyterian – Forney" },
  { src: "/photos/proj-kimleyhorn.jpg",      label: "Kimley Horn" },
];

// Duplicate for seamless infinite scroll
const allPhotos = [...photos, ...photos];

export default function PhotoStrip() {
  const trackRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-16 overflow-hidden" style={{ backgroundColor: "#0D1117" }}>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-6 lg:px-8 mb-10"
      >
        <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "#F97316" }}>
          Our Portfolio
        </p>
        <h2
          className="text-3xl md:text-4xl font-extrabold uppercase"
          style={{ fontFamily: "var(--font-heading)", color: "#F0F6FC" }}
        >
          Decades of Craftsmanship
        </h2>
      </motion.div>

      {/* Scrolling strip */}
      <div className="relative w-full overflow-hidden">
        {/* Left/right fade masks */}
        <div
          className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, #0D1117, transparent)" }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, #0D1117, transparent)" }}
        />

        <motion.div
          ref={trackRef}
          className="flex gap-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, ease: "linear", repeat: Infinity }}
          style={{ width: "max-content" }}
        >
          {allPhotos.map((photo, i) => (
            <div
              key={i}
              className="relative flex-shrink-0 overflow-hidden rounded-lg group"
              style={{ width: 320, height: 220 }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={photo.src}
                alt={photo.label}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Label overlay */}
              <div
                className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "linear-gradient(to top, rgba(13,17,23,0.9) 0%, transparent 60%)" }}
              >
                <span
                  className="text-xs font-bold uppercase tracking-widest"
                  style={{ fontFamily: "var(--font-heading)", color: "#F0F6FC" }}
                >
                  {photo.label}
                </span>
              </div>
              {/* Orange bottom border on hover */}
              <div
                className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ backgroundColor: "#F97316" }}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
