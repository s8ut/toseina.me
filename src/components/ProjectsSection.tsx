import AnimateOnScroll from "./AnimateOnScroll";

const projects = [
  {
    title: "Stray Romania Roleplay Game",
    tags: ["Brand Identity", "Graphic Design", "UI Design", "UX Design"],
    image: "/project1.svg",
  },
  {
    title: "Romania Festival Game",
    tags: ["Graphic Design", "UI Design", "UX Design"],
    image: "/project2.svg",
  },
  {
    title: "Theo's Admin",
    tags: ["Brand Identity", "Graphic Design", "UI Design", "UX Design"],
    image: "/project3.svg",
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
              {/* Project image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              {/* Card info */}
              <div className="p-5">
                <div className="flex flex-wrap gap-2 mb-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] text-accent font-medium uppercase tracking-widest px-2 py-0.5 rounded-full border border-accent/20 bg-accent/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
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
