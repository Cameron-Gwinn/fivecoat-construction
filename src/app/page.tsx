import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import ServicesPreview from "@/components/ServicesPreview";
import ProjectsPreview from "@/components/ProjectsPreview";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <ServicesPreview />
        <ProjectsPreview />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
