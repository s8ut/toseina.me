import SkillCard from "./SkillCard";

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
      <div className="relative z-10 max-w-6xl mx-auto px-6 grid md:grid-cols-[1fr_auto] gap-12 lg:gap-24 items-end">
        {/* Left column - positioned lower */}
        <div className="md:pb-8">
          <h2 className="font-[family-name:var(--font-playfair-display)] text-3xl md:text-4xl font-bold leading-tight">
            More About{" "}
            <span className="text-accent">Toseina</span>
          </h2>
          <p className="text-gray-400 mt-5 text-sm leading-relaxed max-w-xs">
            Guided by exacting standards and a philosophy of balance, I create
            designs where every detail matters. By choosing substance over noise,
            I ensure that every project reflects a commitment to enduring quality
            and refined aesthetics.
          </p>
        </div>

        {/* Right column - compact skill cards grid */}
        <div className="grid grid-cols-2 gap-3 max-w-md">
          {skills.map((skill) => (
            <SkillCard key={skill.value} value={skill.value} label={skill.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
