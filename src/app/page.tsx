import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="relative min-h-screen">
        {/* Full-page background image */}
        <div
          className="absolute inset-0 w-full pointer-events-none z-0"
          style={{
            backgroundImage: "url(/bg.jpg)",
            backgroundSize: "1440px 3408px",
            backgroundPosition: "top center",
            backgroundRepeat: "no-repeat",
            height: "3408px",
          }}
        />
        {/* Gradient overlay to darken the bottom half (projects area) */}
        <div
          className="absolute inset-0 w-full pointer-events-none z-[1]"
          style={{
            background:
              "linear-gradient(to bottom, transparent 0%, transparent 35%, rgba(10,10,10,0.6) 40%, rgba(10,10,10,0.9) 45%, rgba(10,10,10,1) 50%)",
            height: "3408px",
          }}
        />
        <main className="relative z-10">
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
        </main>
      </div>
    </>
  );
}
