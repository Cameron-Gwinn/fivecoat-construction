"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import { motion } from "framer-motion";
import { Shield, Users, Award, Wrench } from "lucide-react";

const values = [
  {
    icon: Award,
    title: "Excellence",
    description:
      "We are committed to delivering quality, detailed workmanship on every project, large or small.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "Clients participate in the process every step of the way — your input shapes the outcome.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description:
      "Honest communication, transparent budgeting, and accountability at every phase of construction.",
  },
  {
    icon: Wrench,
    title: "Craftsmanship",
    description:
      "Combined decades of knowledge applied to every detail — from the foundation to the finish.",
  },
];

export default function AboutPage() {
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
              Who We Are
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-7xl font-extrabold uppercase"
              style={{ fontFamily: "var(--font-heading)", color: "#F0F6FC" }}
            >
              About Us
            </motion.h1>
          </div>
        </section>

        {/* Story */}
        <section className="py-24" style={{ backgroundColor: "#0D1117" }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <p
                  className="text-xs uppercase tracking-widest mb-4"
                  style={{ color: "#F97316" }}
                >
                  Our Story
                </p>
                <h2
                  className="text-4xl md:text-5xl font-extrabold uppercase mb-6"
                  style={{ fontFamily: "var(--font-heading)", color: "#F0F6FC" }}
                >
                  Nearly 40 Years of Building Excellence
                </h2>
                <p className="text-base leading-relaxed mb-5" style={{ color: "#8B949E" }}>
                  Fivecoat Construction, LLC has built its reputation over nearly four
                  decades as a trusted commercial general contractor. Our deep roots in
                  the industry — combined with a commitment to evolving with modern
                  construction methods — allow us to deliver projects that stand the
                  test of time.
                </p>
                <p className="text-base leading-relaxed" style={{ color: "#8B949E" }}>
                  Today, the firm is led by second-generation executive{" "}
                  <span style={{ color: "#F0F6FC", fontWeight: 600 }}>Justin Fivecoat</span>,
                  who carries forward the same values of quality and client-first service
                  that have defined the company since its founding. Our team brings
                  combined decades of knowledge to every project we take on.
                </p>
              </motion.div>

              {/* Stats panel */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-2 gap-4"
              >
                {[
                  { value: "~1985", label: "Founded" },
                  { value: "40+", label: "Years Experience" },
                  { value: "100+", label: "Projects Completed" },
                  { value: "8", label: "Market Sectors" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="p-8 rounded-lg border flex flex-col"
                    style={{ backgroundColor: "#161B22", borderColor: "#21262D" }}
                  >
                    <span
                      className="text-4xl font-extrabold mb-2"
                      style={{ fontFamily: "var(--font-heading)", color: "#F97316" }}
                    >
                      {stat.value}
                    </span>
                    <span
                      className="text-xs uppercase tracking-widest"
                      style={{ color: "#8B949E" }}
                    >
                      {stat.label}
                    </span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values */}
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
                What Drives Us
              </p>
              <h2
                className="text-4xl md:text-5xl font-extrabold uppercase"
                style={{ fontFamily: "var(--font-heading)", color: "#F0F6FC" }}
              >
                Our Core Values
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, i) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="p-6 rounded-lg border"
                    style={{ backgroundColor: "#0D1117", borderColor: "#21262D" }}
                  >
                    <div
                      className="w-10 h-10 rounded flex items-center justify-center mb-4"
                      style={{ backgroundColor: "rgba(249,115,22,0.12)" }}
                    >
                      <Icon size={20} style={{ color: "#F97316" }} />
                    </div>
                    <h3
                      className="text-xl font-bold uppercase mb-2"
                      style={{ fontFamily: "var(--font-heading)", color: "#F0F6FC" }}
                    >
                      {value.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#8B949E" }}>
                      {value.description}
                    </p>
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
