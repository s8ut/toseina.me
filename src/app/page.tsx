import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import IntroScreen from "@/components/IntroScreen";

export default function Home() {
  return (
    <>
      <IntroScreen />
      <Navbar />
      <main>
        {/* Section 1 — Hero */}
        <div className="relative">
          <img
            src="/bg1.jpg"
            alt=""
            className="absolute inset-0 w-full h-full pointer-events-none z-0 object-cover object-center"
          />
          <div className="relative z-10">
            <HeroSection />
          </div>
        </div>

        {/* Section 2 — About */}
        <div className="relative">
          <img
            src="/bg2.jpg"
            alt=""
            className="absolute inset-0 w-full h-full pointer-events-none z-0 object-cover object-center"
          />
          <div className="relative z-10">
            <AboutSection />
          </div>
        </div>

        {/* Section 3 — Projects & Contact (fade to black) */}
        <div className="relative">
          <img
            src="/bg3.jpg"
            alt=""
            className="absolute inset-0 w-full h-full pointer-events-none z-0 object-cover object-center"
          />
          {/* Fade to black at bottom */}
          <div
            className="absolute inset-0 w-full h-full pointer-events-none z-[1]"
            style={{
              background:
                "linear-gradient(to bottom, transparent 0%, transparent 40%, rgba(10,10,10,0.6) 70%, rgba(10,10,10,0.95) 90%, #0a0a0a 100%)",
            }}
          />
          <div className="relative z-10">
            <ProjectsSection />
            <ContactSection />
          </div>
        </div>
      </main>
    </>
  );
}
