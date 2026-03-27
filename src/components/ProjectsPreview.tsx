"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const featuredProjects = [
  { name: "C Life Church", category: "Religious", color: "#1a2035" },
  { name: "Kaufman Civic Center", category: "Municipal", color: "#1a2820" },
  { name: "Kleiman Evangelista Eye Center", category: "Healthcare", color: "#1a2020" },
  { name: "Lion's Den Self Storage", category: "Industrial", color: "#2a1a10" },
];

export default function ProjectsPreview() {
  return (
    <section
      className="py-24 border-t"
      style={{ backgroundColor: "#161B22", borderColor: "#21262D" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p
            className="text-xs uppercase tracking-widest mb-3"
            style={{ color: "#F97316" }}
          >
            Our Work
          </p>
          <h2
            className="text-4xl md:text-5xl font-extrabold uppercase"
            style={{ fontFamily: "var(--font-heading)", color: "#F0F6FC" }}
          >
            Featured Projects
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          {featuredProjects.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="relative overflow-hidden rounded-lg border group cursor-pointer"
              style={{
                backgroundColor: project.color,
                borderColor: "#21262D",
                minHeight: "200px",
              }}
            >
              {/* Placeholder image fill */}
              <div className="absolute inset-0 flex items-center justify-center opacity-20">
                <div
                  className="w-24 h-24 rounded-full border-4"
                  style={{ borderColor: "#F97316" }}
                />
              </div>

              {/* Hover overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ backgroundColor: "rgba(249,115,22,0.08)" }}
              />

              {/* Content */}
              <div className="relative p-8 flex flex-col justify-end h-full min-h-[200px]">
                <span
                  className="text-xs uppercase tracking-widest mb-2"
                  style={{ color: "#F97316" }}
                >
                  {project.category}
                </span>
                <h3
                  className="text-2xl font-bold uppercase"
                  style={{ fontFamily: "var(--font-heading)", color: "#F0F6FC" }}
                >
                  {project.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest transition-colors duration-200 hover:text-orange-300"
            style={{ color: "#F97316", fontFamily: "var(--font-heading)" }}
          >
            View All Projects
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
