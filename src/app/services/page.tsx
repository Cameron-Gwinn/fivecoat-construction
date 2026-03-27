"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import { motion } from "framer-motion";
import {
  ClipboardList,
  HardHat,
  CheckSquare,
  Building2,
  Heart,
  Landmark,
  Church,
  Banknote,
  Briefcase,
  Home,
  Factory,
  Warehouse,
} from "lucide-react";

const phases = [
  {
    icon: ClipboardList,
    title: "Pre-Construction",
    items: [
      "Cost analysis & budgeting",
      "Documentation review",
      "Value engineering",
      "Project scheduling",
    ],
    description:
      "We work closely with owners, architects, and engineers from day one to identify opportunities that save time and money while maintaining quality.",
  },
  {
    icon: HardHat,
    title: "Construction Phase",
    items: [
      "Detailed cost estimating",
      "Expert project management",
      "On-site supervision",
      "Subcontractor coordination",
    ],
    description:
      "Our experienced team navigates the conflicting demands of deadlines, budgets, and on-site challenges — keeping your project on track every step of the way.",
  },
  {
    icon: CheckSquare,
    title: "Post-Construction",
    items: [
      "Comprehensive warranties",
      "Punch list walkthroughs",
      "Closeout documentation",
      "Owner training & handoff",
    ],
    description:
      "We don't consider a project finished until you're fully satisfied. Clients participate in every walkthrough to ensure every detail meets expectations.",
  },
];

const sectors = [
  { icon: Heart, label: "Healthcare" },
  { icon: Landmark, label: "Municipal" },
  { icon: Church, label: "Religious Institutions" },
  { icon: Banknote, label: "Financial Institutions" },
  { icon: Briefcase, label: "General Office" },
  { icon: Home, label: "Multi-Family" },
  { icon: Factory, label: "Industrial" },
  { icon: Warehouse, label: "Self-Storage" },
];

export default function ServicesPage() {
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
              What We Offer
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-7xl font-extrabold uppercase"
              style={{ fontFamily: "var(--font-heading)", color: "#F0F6FC" }}
            >
              Our Services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 max-w-2xl text-lg"
              style={{ color: "#8B949E" }}
            >
              From initial planning to final handoff, we provide comprehensive
              general contracting services across every phase of your project.
            </motion.p>
          </div>
        </section>

        {/* Service phases */}
        <section className="py-24" style={{ backgroundColor: "#0D1117" }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col gap-16">
            {phases.map((phase, i) => {
              const Icon = phase.icon;
              return (
                <motion.div
                  key={phase.title}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start p-10 rounded-lg border"
                  style={{ backgroundColor: "#161B22", borderColor: "#21262D" }}
                >
                  <div>
                    <div
                      className="w-14 h-14 rounded flex items-center justify-center mb-5"
                      style={{ backgroundColor: "rgba(249,115,22,0.12)" }}
                    >
                      <Icon size={28} style={{ color: "#F97316" }} />
                    </div>
                    <h2
                      className="text-3xl md:text-4xl font-extrabold uppercase mb-4"
                      style={{ fontFamily: "var(--font-heading)", color: "#F0F6FC" }}
                    >
                      {phase.title}
                    </h2>
                    <p className="text-base leading-relaxed" style={{ color: "#8B949E" }}>
                      {phase.description}
                    </p>
                  </div>
                  <ul className="flex flex-col gap-3">
                    {phase.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-3 text-sm py-3 px-4 rounded"
                        style={{ backgroundColor: "#0D1117", color: "#F0F6FC" }}
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ backgroundColor: "#F97316" }}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Market sectors */}
        <section
          className="py-24 border-t"
          style={{ backgroundColor: "#161B22", borderColor: "#21262D" }}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <p
                className="text-xs uppercase tracking-widest mb-3"
                style={{ color: "#F97316" }}
              >
                Industries We Serve
              </p>
              <h2
                className="text-4xl md:text-5xl font-extrabold uppercase"
                style={{ fontFamily: "var(--font-heading)", color: "#F0F6FC" }}
              >
                Market Sectors
              </h2>
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {sectors.map((sector, i) => {
                const Icon = sector.icon;
                return (
                  <motion.div
                    key={sector.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07, duration: 0.4 }}
                    className="flex flex-col items-center gap-3 p-6 rounded-lg border text-center"
                    style={{ backgroundColor: "#0D1117", borderColor: "#21262D" }}
                  >
                    <Icon size={28} style={{ color: "#F97316" }} />
                    <span
                      className="text-sm font-bold uppercase tracking-wide"
                      style={{ fontFamily: "var(--font-heading)", color: "#F0F6FC" }}
                    >
                      {sector.label}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
