import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="relative">
        {/* Full-page background image */}
        <div
          className="absolute inset-0 w-full h-full pointer-events-none z-0"
          style={{
            backgroundImage: "url(/bg.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "top center",
            backgroundRepeat: "no-repeat",
          }}
        />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0 w-full h-full pointer-events-none z-[1]"
          style={{
            background:
              "linear-gradient(to bottom, rgba(10,10,10,0.2) 0%, rgba(10,10,10,0.4) 20%, rgba(10,10,10,0.6) 40%, rgba(10,10,10,0.75) 60%, rgba(10,10,10,0.85) 80%, rgba(10,10,10,0.95) 100%)",
          }}
        />
        <main className="relative z-10">
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <ContactSection />
        </main>
      </div>
    </>
  );
}
