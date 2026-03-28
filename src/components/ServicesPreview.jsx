"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ClipboardList, HardHat, CheckSquare, ArrowRight } from "lucide-react";

const services = [
  {
    icon: ClipboardList,
    title: "Pre-Construction",
    description:
      "Cost analysis, documentation review, value engineering, and scheduling — setting every project up for success before ground breaks.",
  },
  {
    icon: HardHat,
    title: "Construction Phase",
    description:
      "Cost estimating, expert project management, and on-site supervision ensuring quality and on-schedule delivery.",
  },
  {
    icon: CheckSquare,
    title: "Post-Construction",
    description:
      "Comprehensive warranties, punch list walkthroughs, and complete closeout documentation for a seamless handoff.",
  },
];

export default function ServicesPreview() {
  return (
    <section className="py-24" style={{ backgroundColor: "#0D1117" }}>
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
            What We Do
          </p>
          <h2
            className="text-4xl md:text-5xl font-extrabold uppercase"
            style={{ fontFamily: "var(--font-heading)", color: "#F0F6FC" }}
          >
            Full-Spectrum Construction Services
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="p-8 rounded-lg border transition-colors duration-200 group"
                style={{
                  backgroundColor: "#161B22",
                  borderColor: "#21262D",
                }}
              >
                <div
                  className="w-12 h-12 rounded flex items-center justify-center mb-5"
                  style={{ backgroundColor: "rgba(249,115,22,0.12)" }}
                >
                  <Icon size={24} style={{ color: "#F97316" }} />
                </div>
                <h3
                  className="text-2xl font-bold uppercase mb-3"
                  style={{ fontFamily: "var(--font-heading)", color: "#F0F6FC" }}
                >
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#8B949E" }}>
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest transition-colors duration-200 hover:text-orange-300"
            style={{ color: "#F97316", fontFamily: "var(--font-heading)" }}
          >
            View All Services
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
