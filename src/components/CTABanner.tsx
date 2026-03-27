"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTABanner() {
  return (
    <section
      className="py-20"
      style={{ backgroundColor: "#0D1117" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-lg p-12 md:p-16 text-center relative overflow-hidden"
          style={{ backgroundColor: "#161B22", border: "1px solid #21262D" }}
        >
          {/* Background accent */}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              background: "radial-gradient(ellipse at center, #F97316 0%, transparent 70%)",
            }}
          />
          <div className="relative">
            <p
              className="text-xs uppercase tracking-widest mb-4"
              style={{ color: "#F97316" }}
            >
              Ready to Build?
            </p>
            <h2
              className="text-4xl md:text-6xl font-extrabold uppercase mb-6"
              style={{ fontFamily: "var(--font-heading)", color: "#F0F6FC" }}
            >
              Let&apos;s Start Your Project
            </h2>
            <p className="max-w-xl mx-auto text-base leading-relaxed mb-10" style={{ color: "#8B949E" }}>
              Whether you&apos;re in the planning phase or ready to break ground, our
              team is here to guide you every step of the way.
            </p>
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
          </div>
        </motion.div>
      </div>
    </section>
  );
}
