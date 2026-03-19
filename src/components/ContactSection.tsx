import AnimateOnScroll from "./AnimateOnScroll";

function DiscordIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561 19.9312 19.9312 0 005.9932 3.0291.0778.0778 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.8733.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286 19.8975 19.8975 0 006.0023-3.0291.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      width="24"
      height="24"
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

function BehanceIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988H0V5.021h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zM3 11h3.584c2.508 0 2.906-3-.312-3H3v3zm3.391 3H3v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" />
    </svg>
  );
}

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 md:py-32 px-6 md:px-12 lg:px-20">
      <AnimateOnScroll direction="up">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white tracking-tight">
            Get in <span className="font-medium">Touch</span>
          </h2>
          <p className="text-gray-400 text-sm mt-4 max-w-md mx-auto leading-relaxed font-light tracking-wide">
            Ready to bring your vision to life? Reach out through any of these
            platforms.
          </p>
        </div>
      </AnimateOnScroll>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
        <AnimateOnScroll delay={0} direction="up">
          <a
            href="https://discord.com/users/s8ut"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card group flex flex-col items-center gap-4 p-8 rounded-2xl"
          >
            <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 group-hover:text-accent group-hover:border-accent/30 transition-all duration-300">
              <DiscordIcon />
            </div>
            <div className="text-center">
              <p className="text-white font-medium text-sm tracking-tight">Discord</p>
              <p className="text-gray-400 text-xs mt-1 font-light tracking-wide">@s8ut</p>
            </div>
          </a>
        </AnimateOnScroll>

        <AnimateOnScroll delay={120} direction="up">
          <a
            href="https://instagram.com/r7zvan"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card group flex flex-col items-center gap-4 p-8 rounded-2xl"
          >
            <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 group-hover:text-accent group-hover:border-accent/30 transition-all duration-300">
              <InstagramIcon />
            </div>
            <div className="text-center">
              <p className="text-white font-medium text-sm tracking-tight">Instagram</p>
              <p className="text-gray-400 text-xs mt-1 font-light tracking-wide">@r7zvan</p>
            </div>
          </a>
        </AnimateOnScroll>

        <AnimateOnScroll delay={240} direction="up">
          <a
            href="https://behance.net/toseina"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card group flex flex-col items-center gap-4 p-8 rounded-2xl"
          >
            <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 group-hover:text-accent group-hover:border-accent/30 transition-all duration-300">
              <BehanceIcon />
            </div>
            <div className="text-center">
              <p className="text-white font-medium text-sm tracking-tight">Behance</p>
              <p className="text-gray-400 text-xs mt-1 font-light tracking-wide">toseina</p>
            </div>
          </a>
        </AnimateOnScroll>
      </div>

      {/* Footer */}
      <div className="mt-24 text-center">
        <p className="text-gray-500 text-xs font-light tracking-widest uppercase">
          Toseina &mdash; Design with precision
        </p>
      </div>
    </section>
  );
}
