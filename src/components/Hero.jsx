"use client";

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#0D1117" }}
    >
      {/* Full-screen background photo */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/photos/strip-fbck1.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark overlay — keeps text readable */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(to bottom, rgba(13,17,23,0.72) 0%, rgba(13,17,23,0.85) 60%, #0D1117 100%)" }}
      />

      {/* Orange accent glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full opacity-15 blur-3xl pointer-events-none"
        style={{ backgroundColor: "#F97316" }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-16 text-center">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs uppercase tracking-widest mb-6"
          style={{
            borderColor: "#F97316",
            color: "#F97316",
            backgroundColor: "rgba(249,115,22,0.1)",
          }}
        >
          Commercial General Contractor · Est. 1985
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold uppercase leading-none tracking-tight mb-6"
          style={{ fontFamily: "var(--font-heading)", color: "#F0F6FC" }}
        >
          Built to{" "}
          <span className="gradient-text">Last.</span>
          <br />
          Built to{" "}
          <span style={{ color: "#F97316" }}>Impress.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-2xl mx-auto text-lg md:text-xl leading-relaxed mb-10"
          style={{ color: "#8B949E" }}
        >
          Nearly 40 years of excellence in commercial construction. Fivecoat
          Construction delivers quality, detailed workmanship — from
          pre-construction planning through project closeout.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded font-bold uppercase tracking-widest text-sm transition-all duration-200 hover:brightness-110"
            style={{
              backgroundColor: "#F97316",
              color: "#0D1117",
              fontFamily: "var(--font-heading)",
            }}
          >
            Get a Free Quote
            <ArrowRight size={18} />
          </Link>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-8 py-4 rounded font-bold uppercase tracking-widest text-sm border transition-all duration-200 hover:border-orange-400"
            style={{
              borderColor: "#21262D",
              color: "#F0F6FC",
              fontFamily: "var(--font-heading)",
            }}
          >
            View Our Work
          </Link>
        </motion.div>

        {/* Quick contact */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 flex items-center justify-center gap-2 text-sm"
          style={{ color: "#8B949E" }}
        >
          <Phone size={14} style={{ color: "#F97316" }} />
          <a
            href="tel:+19729321501"
            className="transition-colors duration-200 hover:text-orange-400"
          >
            972-932-1501
          </a>
          <span className="mx-2" style={{ color: "#21262D" }}>
            |
          </span>
          <a
            href="mailto:info@fivecoat.com"
            className="transition-colors duration-200 hover:text-orange-400"
          >
            info@fivecoat.com
          </a>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent, #0D1117)",
        }}
      />
    </section>
  );
}
