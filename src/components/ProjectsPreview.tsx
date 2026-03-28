"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const featuredProjects = [
  { name: "C Life Church",                          category: "Religious",  photo: "/photos/project-church.jpg" },
  { name: "Clements Ranch Community Center",        category: "Community",  photo: "/photos/proj-clements.jpg" },
  { name: "FBC Kaufman – Children's Building",      category: "Religious",  photo: "/photos/proj-fbck-childrens.jpg" },
  { name: "FBC Kaufman – Worship Center",           category: "Religious",  photo: "/photos/proj-fbck-worship.jpg" },
  { name: "FBC Kaufman – The Porch",                category: "Religious",  photo: "/photos/proj-fbck-porch.jpg" },
  { name: "Kleiman Evangelista Eye Center",         category: "Healthcare", photo: "/photos/project-eye.jpg" },
  { name: "Lion's Den Self Storage",                category: "Industrial", photo: "/photos/project-storage.jpg" },
  { name: "Kaufman Civic Center",                   category: "Municipal",  photo: "/photos/project-civic.jpg" },
  { name: "St. Martin's Catholic Church",           category: "Religious",  photo: "/photos/proj-stmartins.jpg" },
  { name: "First Presbyterian – Forney",            category: "Religious",  photo: "/photos/proj-firstpres.jpg" },
  { name: "Kimley Horn",                            category: "Commercial", photo: "/photos/proj-kimleyhorn.jpg" },
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredProjects.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="relative overflow-hidden rounded-lg group cursor-pointer"
              style={{ minHeight: "320px" }}
            >
              {/* Project photo */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={project.photo}
                alt={project.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Gradient overlay — always on, darkens toward bottom */}
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to top, rgba(13,17,23,0.95) 0%, rgba(13,17,23,0.4) 50%, rgba(13,17,23,0.1) 100%)",
                }}
              />

              {/* Orange tint on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ backgroundColor: "rgba(249,115,22,0.06)" }}
              />

              {/* Orange left border accent */}
              <div
                className="absolute left-0 top-0 bottom-0 w-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ backgroundColor: "#F97316" }}
              />

              {/* Content */}
              <div className="relative p-8 flex flex-col justify-end h-full min-h-[320px]">
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
