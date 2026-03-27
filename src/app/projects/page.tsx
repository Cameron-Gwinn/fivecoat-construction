"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import { motion } from "framer-motion";

const projects = [
  { name: "C Life Church", category: "Religious", color: "#111827" },
  { name: "Clements Ranch Community Center", category: "Municipal", color: "#0f1f1a" },
  { name: "FBC Kaufman — Beth James Children's Building", category: "Religious", color: "#111827" },
  { name: "FBC Kaufman — Worship Center", category: "Religious", color: "#131820" },
  { name: "FBC Kaufman — The Porch", category: "Religious", color: "#111827" },
  { name: "Kleiman Evangelista Eye Center", category: "Healthcare", color: "#0f1a1a" },
  { name: "Lion's Den Self Storage", category: "Industrial", color: "#1a1510" },
  { name: "Kaufman Civic Center", category: "Municipal", color: "#0f1f1a" },
  { name: "St. Martins Catholic Church", category: "Religious", color: "#111827" },
  { name: "First Presbyterian — Forney", category: "Religious", color: "#131820" },
  { name: "Kimley Horn", category: "General Office", color: "#131418" },
];

const categories = ["All", "Religious", "Municipal", "Healthcare", "Industrial", "General Office"];

const categoryColors: Record<string, string> = {
  Religious: "#6366f1",
  Municipal: "#22c55e",
  Healthcare: "#06b6d4",
  Industrial: "#f59e0b",
  "General Office": "#8b5cf6",
};

export default function ProjectsPage() {
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
            </motion.p>
          </div>
        </section>

        {/* Category pills */}
        <section className="py-6 border-b" style={{ backgroundColor: "#0D1117", borderColor: "#21262D" }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-wrap gap-3">
              {categories.map((cat) => (
                <span
                  key={cat}
                  className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border"
                  style={{
                    borderColor: cat === "All" ? "#F97316" : "#21262D",
                    color: cat === "All" ? "#F97316" : "#8B949E",
                    backgroundColor: cat === "All" ? "rgba(249,115,22,0.1)" : "transparent",
                    fontFamily: "var(--font-heading)",
                  }}
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Projects grid */}
        <section className="py-16" style={{ backgroundColor: "#0D1117" }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, i) => (
                <motion.div
                  key={project.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (i % 3) * 0.1, duration: 0.5 }}
                  className="relative overflow-hidden rounded-lg border group"
                  style={{
                    backgroundColor: project.color,
                    borderColor: "#21262D",
                    minHeight: "220px",
                  }}
                >
                  {/* Decorative circle */}
                  <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full border-2 opacity-10"
                    style={{ borderColor: categoryColors[project.category] ?? "#F97316" }}
                  />
                  <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full opacity-10"
                    style={{ backgroundColor: categoryColors[project.category] ?? "#F97316" }}
                  />

                  {/* Hover overlay */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ backgroundColor: "rgba(249,115,22,0.06)" }}
                  />

                  {/* Content */}
                  <div className="relative p-6 flex flex-col justify-end h-full min-h-[220px]">
                    <span
                      className="text-xs font-bold uppercase tracking-widest mb-2"
                      style={{
                        color: categoryColors[project.category] ?? "#F97316",
                        fontFamily: "var(--font-heading)",
                      }}
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
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
