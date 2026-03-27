"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

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
              Reach Out
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-7xl font-extrabold uppercase"
              style={{ fontFamily: "var(--font-heading)", color: "#F0F6FC" }}
            >
              Contact Us
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 max-w-xl text-lg"
              style={{ color: "#8B949E" }}
            >
              Ready to start your project? Tell us about it and we&apos;ll get
              back to you promptly.
            </motion.p>
          </div>
        </section>

        {/* Contact content */}
        <section className="py-20" style={{ backgroundColor: "#0D1117" }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2
                className="text-3xl font-extrabold uppercase mb-8"
                style={{ fontFamily: "var(--font-heading)", color: "#F0F6FC" }}
              >
                Get in Touch
              </h2>

              <div className="flex flex-col gap-6">
                <div
                  className="flex items-start gap-4 p-5 rounded-lg border"
                  style={{ backgroundColor: "#161B22", borderColor: "#21262D" }}
                >
                  <div
                    className="w-10 h-10 rounded flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "rgba(249,115,22,0.12)" }}
                  >
                    <Phone size={18} style={{ color: "#F97316" }} />
                  </div>
                  <div>
                    <p
                      className="text-xs uppercase tracking-widest mb-1"
                      style={{ color: "#8B949E" }}
                    >
                      Phone
                    </p>
                    <a
                      href="tel:+19729321501"
                      className="text-lg font-semibold transition-colors duration-200 hover:text-orange-400"
                      style={{ color: "#F0F6FC" }}
                    >
                      972-932-1501
                    </a>
                  </div>
                </div>

                <div
                  className="flex items-start gap-4 p-5 rounded-lg border"
                  style={{ backgroundColor: "#161B22", borderColor: "#21262D" }}
                >
                  <div
                    className="w-10 h-10 rounded flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "rgba(249,115,22,0.12)" }}
                  >
                    <Mail size={18} style={{ color: "#F97316" }} />
                  </div>
                  <div>
                    <p
                      className="text-xs uppercase tracking-widest mb-1"
                      style={{ color: "#8B949E" }}
                    >
                      Email
                    </p>
                    <a
                      href="mailto:info@fivecoat.com"
                      className="text-lg font-semibold transition-colors duration-200 hover:text-orange-400"
                      style={{ color: "#F0F6FC" }}
                    >
                      info@fivecoat.com
                    </a>
                  </div>
                </div>

                <div
                  className="flex items-start gap-4 p-5 rounded-lg border"
                  style={{ backgroundColor: "#161B22", borderColor: "#21262D" }}
                >
                  <div
                    className="w-10 h-10 rounded flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "rgba(249,115,22,0.12)" }}
                  >
                    <Clock size={18} style={{ color: "#F97316" }} />
                  </div>
                  <div>
                    <p
                      className="text-xs uppercase tracking-widest mb-1"
                      style={{ color: "#8B949E" }}
                    >
                      Business Hours
                    </p>
                    <p className="text-base font-semibold" style={{ color: "#F0F6FC" }}>
                      Mon – Fri: 8:00 AM – 5:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {submitted ? (
                <div
                  className="h-full flex flex-col items-center justify-center text-center p-10 rounded-lg border"
                  style={{ backgroundColor: "#161B22", borderColor: "#21262D" }}
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-5"
                    style={{ backgroundColor: "rgba(249,115,22,0.12)" }}
                  >
                    <Mail size={28} style={{ color: "#F97316" }} />
                  </div>
                  <h3
                    className="text-3xl font-extrabold uppercase mb-3"
                    style={{ fontFamily: "var(--font-heading)", color: "#F0F6FC" }}
                  >
                    Message Sent!
                  </h3>
                  <p style={{ color: "#8B949E" }}>
                    Thank you for reaching out. We&apos;ll get back to you as soon
                    as possible.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="p-8 rounded-lg border flex flex-col gap-5"
                  style={{ backgroundColor: "#161B22", borderColor: "#21262D" }}
                >
                  <h2
                    className="text-2xl font-extrabold uppercase"
                    style={{ fontFamily: "var(--font-heading)", color: "#F0F6FC" }}
                  >
                    Send a Message
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1.5">
                      <label
                        className="text-xs uppercase tracking-widest"
                        style={{ color: "#8B949E" }}
                      >
                        First Name *
                      </label>
                      <input
                        type="text"
                        required
                        className="px-4 py-3 rounded text-sm outline-none focus:ring-1 transition-all"
                        style={{
                          backgroundColor: "#0D1117",
                          border: "1px solid #21262D",
                          color: "#F0F6FC",
                        }}
                        placeholder="John"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label
                        className="text-xs uppercase tracking-widest"
                        style={{ color: "#8B949E" }}
                      >
                        Last Name *
                      </label>
                      <input
                        type="text"
                        required
                        className="px-4 py-3 rounded text-sm outline-none focus:ring-1 transition-all"
                        style={{
                          backgroundColor: "#0D1117",
                          border: "1px solid #21262D",
                          color: "#F0F6FC",
                        }}
                        placeholder="Smith"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label
                      className="text-xs uppercase tracking-widest"
                      style={{ color: "#8B949E" }}
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      className="px-4 py-3 rounded text-sm outline-none transition-all"
                      style={{
                        backgroundColor: "#0D1117",
                        border: "1px solid #21262D",
                        color: "#F0F6FC",
                      }}
                      placeholder="john@company.com"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label
                      className="text-xs uppercase tracking-widest"
                      style={{ color: "#8B949E" }}
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      className="px-4 py-3 rounded text-sm outline-none transition-all"
                      style={{
                        backgroundColor: "#0D1117",
                        border: "1px solid #21262D",
                        color: "#F0F6FC",
                      }}
                      placeholder="214-555-0100"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label
                      className="text-xs uppercase tracking-widest"
                      style={{ color: "#8B949E" }}
                    >
                      Project Type
                    </label>
                    <select
                      className="px-4 py-3 rounded text-sm outline-none transition-all"
                      style={{
                        backgroundColor: "#0D1117",
                        border: "1px solid #21262D",
                        color: "#F0F6FC",
                      }}
                    >
                      <option value="">Select a sector...</option>
                      <option>Healthcare</option>
                      <option>Municipal</option>
                      <option>Religious Institutions</option>
                      <option>Financial Institutions</option>
                      <option>General Office</option>
                      <option>Multi-Family</option>
                      <option>Industrial</option>
                      <option>Self-Storage</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label
                      className="text-xs uppercase tracking-widest"
                      style={{ color: "#8B949E" }}
                    >
                      Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      className="px-4 py-3 rounded text-sm outline-none transition-all resize-none"
                      style={{
                        backgroundColor: "#0D1117",
                        border: "1px solid #21262D",
                        color: "#F0F6FC",
                      }}
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="mt-2 py-4 rounded font-bold uppercase tracking-widest text-sm transition-all duration-200 hover:brightness-110"
                    style={{
                      backgroundColor: "#F97316",
                      color: "#0D1117",
                      fontFamily: "var(--font-heading)",
                    }}
                  >
                    Send Message
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
