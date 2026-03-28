"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import ProjectLightbox, { LightboxProject } from "@/components/ProjectLightbox";
import { motion } from "framer-motion";

const projects: (LightboxProject & { thumbnail: string })[] = [
  {
    name: "C Life Church",
    category: "Religious",
    thumbnail: "/photos/project-church.jpg",
    photos: [
      "/photos/c-life-church/7.jpg",
      "/photos/c-life-church/1.jpg",
      "/photos/c-life-church/2.jpg",
      "/photos/c-life-church/3.jpg",
      "/photos/c-life-church/4.jpg",
      "/photos/c-life-church/5.jpg",
      "/photos/c-life-church/6.jpg",
    ],
  },
  {
    name: "Clements Ranch Community Center",
    category: "Community",
    thumbnail: "/photos/proj-clements.jpg",
    photos: [
      "/photos/clements-ranch/3.jpg",
      "/photos/clements-ranch/1.jpg",
      "/photos/clements-ranch/2.jpg",
      "/photos/clements-ranch/4.jpg",
      "/photos/clements-ranch/5.jpg",
      "/photos/clements-ranch/6.jpg",
    ],
  },
  {
    name: "FBC Kaufman — Children's Building",
    category: "Religious",
    thumbnail: "/photos/proj-fbck-childrens.jpg",
    photos: [
      "/photos/fbck-childrens/2.jpg",
      "/photos/fbck-childrens/1.jpg",
      "/photos/fbck-childrens/3.jpg",
      "/photos/fbck-childrens/4.jpg",
      "/photos/fbck-childrens/5.jpg",
      "/photos/fbck-childrens/6.jpg",
    ],
  },
  {
    name: "FBC Kaufman — Worship Center",
    category: "Religious",
    thumbnail: "/photos/proj-fbck-worship.jpg",
    photos: [
      "/photos/fbck-worship/4.jpg",
      "/photos/fbck-worship/1.jpg",
      "/photos/fbck-worship/2.jpg",
      "/photos/fbck-worship/3.jpg",
      "/photos/fbck-worship/5.jpg",
      "/photos/fbck-worship/6.jpg",
    ],
  },
  {
    name: "FBC Kaufman — The Porch",
    category: "Religious",
    thumbnail: "/photos/proj-fbck-porch.jpg",
    photos: [
      "/photos/fbck-porch/1.jpg",
      "/photos/fbck-porch/2.jpg",
      "/photos/fbck-porch/3.jpg",
      "/photos/fbck-porch/4.jpg",
      "/photos/fbck-porch/5.jpg",
      "/photos/fbck-porch/6.jpg",
    ],
  },
  {
    name: "Kleiman Evangelista Eye Center",
    category: "Healthcare",
    thumbnail: "/photos/project-eye.jpg",
    photos: [
      "/photos/ke-eye-center/3.jpg",
      "/photos/ke-eye-center/1.jpg",
      "/photos/ke-eye-center/2.jpg",
      "/photos/ke-eye-center/4.jpg",
      "/photos/ke-eye-center/5.jpg",
      "/photos/ke-eye-center/6.jpg",
    ],
  },
  {
    name: "Lion's Den Self Storage",
    category: "Industrial",
    thumbnail: "/photos/project-storage.jpg",
    photos: [
      "/photos/lions-den/1.jpg",
      "/photos/lions-den/2.jpg",
      "/photos/lions-den/3.jpg",
      "/photos/lions-den/4.jpg",
      "/photos/lions-den/5.jpg",
      "/photos/lions-den/6.jpg",
    ],
  },
  {
    name: "Kaufman Civic Center",
    category: "Municipal",
    thumbnail: "/photos/project-civic.jpg",
    photos: [
      "/photos/kaufman-civic/1.jpg",
      "/photos/kaufman-civic/2.jpg",
      "/photos/kaufman-civic/3.jpg",
      "/photos/kaufman-civic/4.jpg",
      "/photos/kaufman-civic/5.jpg",
      "/photos/kaufman-civic/6.jpg",
      "/photos/kaufman-civic/7.jpg",
    ],
  },
  {
    name: "St. Martin's Catholic Church",
    category: "Religious",
    thumbnail: "/photos/proj-stmartins.jpg",
    photos: [
      "/photos/st-martins/2.jpg",
      "/photos/st-martins/1.jpg",
      "/photos/st-martins/3.jpg",
      "/photos/st-martins/4.jpg",
      "/photos/st-martins/5.jpg",
      "/photos/st-martins/6.jpg",
    ],
  },
  {
    name: "First Presbyterian — Forney",
    category: "Religious",
    thumbnail: "/photos/proj-firstpres.jpg",
    photos: [
      "/photos/first-pres/1.jpg",
      "/photos/first-pres/2.jpg",
      "/photos/first-pres/3.jpg",
      "/photos/first-pres/4.jpg",
      "/photos/first-pres/5.jpg",
      "/photos/first-pres/6.jpg",
    ],
  },
  {
    name: "Kimley Horn",
    category: "Commercial",
    thumbnail: "/photos/proj-kimleyhorn.jpg",
    photos: [
      "/photos/kimley-horn/1.jpg",
      "/photos/kimley-horn/2.jpg",
      "/photos/kimley-horn/3.jpg",
      "/photos/kimley-horn/4.jpg",
      "/photos/kimley-horn/5.jpg",
      "/photos/kimley-horn/6.jpg",
    ],
  },
];

const categories = ["All", "Religious", "Community", "Healthcare", "Industrial", "Municipal", "Commercial"];

export default function ProjectsPage() {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<{ project: LightboxProject; index: number } | null>(null);

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  const openLightbox = (project: LightboxProject, index = 0) => {
    setLightbox({ project, index });
  };

  const closeLightbox = () => setLightbox(null);

  const nextPhoto = () => {
    if (!lightbox) return;
    setLightbox((prev) =>
      prev ? { ...prev, index: (prev.index + 1) % prev.project.photos.length } : null
    );
  };

  const prevPhoto = () => {
    if (!lightbox) return;
    setLightbox((prev) =>
      prev
        ? { ...prev, index: (prev.index - 1 + prev.project.photos.length) % prev.project.photos.length }
        : null
    );
  };

  return (
    <>
      <Navbar />
      <main>
        {/* Page hero */}
        <section
          className="pt-36 pb-16 relative overflow-hidden"
          style={{ backgroundColor: "#0D1117" }}
        >
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `linear-gradient(#21262D 1px, transparent 1px), linear-gradient(90deg, #21262D 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />
          <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xs uppercase tracking-widest mb-3"
              style={{ color: "#F97316" }}
            >
              Portfolio
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-7xl font-extrabold uppercase"
              style={{ fontFamily: "var(--font-heading)", color: "#F0F6FC" }}
            >
              Our Projects
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 max-w-2xl text-lg"
              style={{ color: "#8B949E" }}
            >
              A selection of completed commercial projects across Texas — from
              houses of worship to healthcare facilities and civic centers.
              <span className="block mt-1 text-sm" style={{ color: "#F97316" }}>
                Click any project to view the full photo gallery.
              </span>
            </motion.p>
          </div>
        </section>

        {/* Category filter */}
        <section className="py-6 border-b" style={{ backgroundColor: "#0D1117", borderColor: "#21262D" }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-wrap gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border transition-all duration-200"
                  style={{
                    borderColor: active === cat ? "#F97316" : "#21262D",
                    color: active === cat ? "#F97316" : "#8B949E",
                    backgroundColor: active === cat ? "rgba(249,115,22,0.1)" : "transparent",
                    fontFamily: "var(--font-heading)",
                    cursor: "pointer",
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects grid */}
        <section className="py-16" style={{ backgroundColor: "#0D1117" }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((project, i) => (
                <motion.button
                  key={project.name}
                  onClick={() => openLightbox(project)}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (i % 3) * 0.08, duration: 0.5 }}
                  className="relative overflow-hidden rounded-lg group text-left w-full"
                  style={{ minHeight: "280px" }}
                >
                  {/* Project photo */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.thumbnail}
                    alt={project.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Gradient overlay */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(13,17,23,0.95) 0%, rgba(13,17,23,0.35) 55%, rgba(13,17,23,0.05) 100%)",
                    }}
                  />

                  {/* "View Gallery" pill — appears on hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span
                      className="px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest"
                      style={{
                        backgroundColor: "#F97316",
                        color: "#0D1117",
                        fontFamily: "var(--font-heading)",
                      }}
                    >
                      View Gallery
                    </span>
                  </div>

                  {/* Orange left border on hover */}
                  <div
                    className="absolute left-0 top-0 bottom-0 w-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ backgroundColor: "#F97316" }}
                  />

                  {/* Photo count badge */}
                  <div
                    className="absolute top-4 right-4 px-2 py-0.5 rounded text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      backgroundColor: "rgba(13,17,23,0.8)",
                      color: "#8B949E",
                      fontFamily: "var(--font-heading)",
                    }}
                  >
                    {project.photos.length} photos
                  </div>

                  {/* Content */}
                  <div className="relative p-6 flex flex-col justify-end h-full min-h-[280px]">
                    <span
                      className="text-xs font-bold uppercase tracking-widest mb-2"
                      style={{ color: "#F97316", fontFamily: "var(--font-heading)" }}
                    >
                      {project.category}
                    </span>
                    <h3
                      className="text-xl font-bold uppercase leading-tight"
                      style={{ fontFamily: "var(--font-heading)", color: "#F0F6FC" }}
                    >
                      {project.name}
                    </h3>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        <CTABanner />
      </main>
      <Footer />

      {/* Lightbox */}
      {lightbox && (
        <ProjectLightbox
          project={lightbox.project}
          photoIndex={lightbox.index}
          onClose={closeLightbox}
          onNext={nextPhoto}
          onPrev={prevPhoto}
          onSelectPhoto={(i) => setLightbox((prev) => prev ? { ...prev, index: i } : null)}
        />
      )}
    </>
  );
}
