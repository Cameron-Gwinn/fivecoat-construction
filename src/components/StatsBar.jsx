"use client";

"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "40+", label: "Years of Experience" },
  { value: "100+", label: "Projects Completed" },
  { value: "8", label: "Market Sectors" },
  { value: "2nd", label: "Generation Leadership" },
];

export default function StatsBar() {
  return (
    <section
      className="border-y"
      style={{ backgroundColor: "#161B22", borderColor: "#21262D" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex flex-col items-center text-center"
            >
              <span
                className="text-4xl md:text-5xl font-extrabold"
                style={{ fontFamily: "var(--font-heading)", color: "#F97316" }}
              >
                {stat.value}
              </span>
              <span
                className="mt-1 text-xs uppercase tracking-widest"
                style={{ color: "#8B949E" }}
              >
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
