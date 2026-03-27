import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fivecoat Construction, LLC — Commercial General Contractor",
  description:
    "Nearly 40 years of excellence in commercial construction. Led by Justin Fivecoat, we deliver quality general contracting across healthcare, municipal, religious, and more.",
  keywords:
    "commercial construction, general contractor, Fivecoat Construction, Texas, healthcare construction, municipal construction",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full antialiased overflow-x-hidden">{children}</body>
    </html>
  );
}
