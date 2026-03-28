"use client";

import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("@/components/Navbar"), { ssr: false });
const Hero = dynamic(() => import("@/components/Hero"), { ssr: false });
const PhotoStrip = dynamic(() => import("@/components/PhotoStrip"), { ssr: false });
const StatsBar = dynamic(() => import("@/components/StatsBar"), { ssr: false });
const ServicesPreview = dynamic(() => import("@/components/ServicesPreview"), { ssr: false });
const ProjectsPreview = dynamic(() => import("@/components/ProjectsPreview"), { ssr: false });
const CTABanner = dynamic(() => import("@/components/CTABanner"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <PhotoStrip />
        <StatsBar />
        <ServicesPreview />
        <ProjectsPreview />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
