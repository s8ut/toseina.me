import AnimateOnScroll from "./AnimateOnScroll";

const projects = [
  {
    title: "Meridian Branding",
    category: "Brand Identity",
    gradient: "from-accent/20 to-teal-900/30",
  },
  {
    title: "Apex Dashboard",
    category: "UI Design",
    gradient: "from-emerald-900/30 to-accent/10",
  },
  {
    title: "Velvet Commerce",
    category: "UX Design",
    gradient: "from-teal-800/20 to-accent/15",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 md:py-32 px-6 md:px-12 lg:px-20">
      {/* Header */}
      <AnimateOnScroll direction="right">
        <div className="flex flex-col items-center md:items-end mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white tracking-tight">
            Recent <span className="font-medium text-gradient">Projects</span>
          </h2>
          <p className="text-gray-400 text-sm mt-4 max-w-lg text-center md:text-right leading-relaxed font-light tracking-wide">
            A curated showcase of recent work defined by refined standards and
            enduring quality. Each project serves as a testament to the belief
            that true luxury is found within the smallest, most intentional details.
          </p>
          <a
            href="https://behance.net/toseina"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 text-accent text-sm font-medium hover:text-accent-dark transition-colors tracking-wide"
          >
            View full portfolio on Behance &rarr;
          </a>
        </div>
      </AnimateOnScroll>

      {/* Project cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <AnimateOnScroll key={project.title} delay={i * 120} direction="up">
            <div className="glass-card group relative rounded-2xl overflow-hidden">
              {/* Placeholder image area */}
              <div
                className={`aspect-[4/3] bg-gradient-to-br ${project.gradient} flex items-center justify-center`}
              >
                <div className="w-16 h-16 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-accent/60"
                  >
                    <path
                      d="M12 2L2 9l10 13L22 9 12 2z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>
              {/* Card info */}
              <div className="p-5">
                <p className="text-xs text-accent font-medium uppercase tracking-widest">
                  {project.category}
                </p>
                <h3 className="text-white font-medium mt-1 group-hover:text-accent transition-colors duration-300 tracking-tight">
                  {project.title}
                </h3>
              </div>
            </div>
          </AnimateOnScroll>
        ))}
      </div>
    </section>
  );
}
