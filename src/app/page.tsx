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
          className="fixed inset-0 w-full h-full pointer-events-none z-0"
          style={{
            backgroundImage: "url(/bg.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "top center",
            backgroundRepeat: "no-repeat",
          }}
        />
        {/* Gradient overlay */}
        <div
          className="fixed inset-0 w-full h-full pointer-events-none z-[1]"
          style={{
            background:
              "linear-gradient(to bottom, rgba(10,10,10,0.3) 0%, rgba(10,10,10,0.5) 30%, rgba(10,10,10,0.85) 60%, rgba(10,10,10,1) 80%)",
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
