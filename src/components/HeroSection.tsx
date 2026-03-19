function InstagramIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function DiscordIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561 19.9312 19.9312 0 005.9932 3.0291.0778.0778 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.8733.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286 19.8975 19.8975 0 006.0023-3.0291.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z" />
    </svg>
  );
}

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center pt-14"
    >
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        {/* Badges */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <div className="flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-1.5">
            <span className="w-2 h-2 rounded-full bg-accent" />
            <span className="text-xs text-gray-300">Available for hire</span>
          </div>
          <div className="rounded-full bg-white/5 border border-white/10 px-4 py-1.5">
            <span className="text-xs">
              <span className="text-accent font-medium">50+</span>{" "}
              <span className="text-gray-300">Happy Clients</span>
            </span>
          </div>
        </div>

        {/* Heading */}
        <h1 className="font-[family-name:var(--font-playfair-display)] text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white max-w-xl leading-tight">
          Design defined by
          <br />
          precision and quality.
        </h1>

        {/* Subtitle */}
        <p className="text-gray-400 text-sm md:text-base mt-5 max-w-md leading-relaxed">
          Superior design rooted in meticulous precision, harmony, and elevated
          standards.
        </p>

        {/* Social icons */}
        <div className="flex gap-4 mt-6">
          <a
            href="#"
            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Instagram"
          >
            <InstagramIcon />
          </a>
          <a
            href="#"
            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Discord"
          >
            <DiscordIcon />
          </a>
        </div>
      </div>
    </section>
  );
}
