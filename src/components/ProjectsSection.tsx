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
    <section id="projects" className="py-24 md:py-32 px-6">
      {/* Header - right aligned on desktop */}
      <div className="max-w-6xl mx-auto flex flex-col items-center md:items-end mb-16">
        <h2 className="font-[family-name:var(--font-playfair-display)] text-3xl md:text-4xl font-bold text-white">
          Recent <span className="text-white">Projects</span>
        </h2>
        <p className="text-gray-400 text-sm mt-4 max-w-lg text-center md:text-right leading-relaxed">
          Selected commissions: A curated showcase of recent work defined by
          refined standards and enduring quality. This collection represents a
          dedicated pursuit of balance, where technical precision meets aesthetic
          purpose. By prioritizing substance over fleeting trends, each project
          serves as a testament to the belief that true luxury is found within
          the smallest, most intentional details.
        </p>
      </div>

      {/* Project cards grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="group relative rounded-2xl overflow-hidden border border-white/5 bg-surface hover:border-accent/20 transition-all duration-300"
          >
            {/* Placeholder image area */}
            <div
              className={`aspect-[4/3] bg-gradient-to-br ${project.gradient} flex items-center justify-center`}
            >
              <div className="w-16 h-16 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center">
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
              <p className="text-xs text-accent font-medium uppercase tracking-wider">
                {project.category}
              </p>
              <h3 className="text-white font-semibold mt-1 group-hover:text-accent transition-colors">
                {project.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
