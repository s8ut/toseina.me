import SkillCard from "./SkillCard";
import AnimateOnScroll from "./AnimateOnScroll";

const skills = [
  { value: "3+", label: "Years of experience" },
  { value: "50+", label: "Positive reviews" },
  { value: "UX Design", label: "Specialist" },
  { value: "UI Design", label: "Pro" },
  { value: "Graphic Design", label: "Expert" },
  { value: "Brand Identity", label: "Vanguard" },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-28 md:py-40">
      <div className="relative z-10 w-full px-6 md:px-12 lg:px-20 grid md:grid-cols-[1fr_auto] gap-12 lg:gap-24 items-end">
        {/* Left column */}
        <AnimateOnScroll direction="left">
          <div className="md:pb-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight tracking-tight">
              More About{" "}
              <span className="text-accent font-medium">Toseina</span>
            </h2>
            <p className="text-gray-400 mt-5 text-sm leading-relaxed max-w-sm font-light tracking-wide">
              Guided by exacting standards and a philosophy of balance, I create
              designs where every detail matters. By choosing substance over noise,
              I ensure that every project reflects a commitment to enduring quality
              and refined aesthetics.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Right column - skill cards */}
        <div className="grid grid-cols-2 gap-3 max-w-md">
          {skills.map((skill, i) => (
            <AnimateOnScroll key={skill.value} delay={i * 80} direction="up">
              <SkillCard value={skill.value} label={skill.label} />
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
