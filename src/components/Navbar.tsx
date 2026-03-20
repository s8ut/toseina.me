"use client";

import { useState } from "react";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Portfolio", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5">
      <div className="w-full px-6 md:px-12 lg:px-20 h-14 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2">
          <span className="relative inline-flex items-center justify-center w-7 h-7 rounded-md overflow-hidden logo-box-glow">
            <span className="absolute inset-0 logo-box-bg" />
            <svg className="relative z-10" width="15" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.58332 8.29166L2.70832 5.09722L3.37499 4H12.6667L10.7917 7.23611H5.20832L4.58332 8.29166Z" fill="white"/>
              <path d="M13.25 3.01389L15 0H0.638889L0 1.11111L1.86111 4.25L2.52778 3.01389H13.25Z" fill="white"/>
            </svg>
          </span>
          <span className="font-medium text-sm tracking-wide bg-gradient-to-r from-gray-400 to-white bg-clip-text text-transparent">
            Toseina
          </span>
        </a>

        {/* Center nav links - desktop */}
        <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-gray-400 hover:text-white transition-colors duration-300 tracking-wide font-light"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA button */}
        <a
          href="#contact"
          className="hidden sm:inline-flex rounded-full bg-accent text-black px-5 py-1.5 text-xs font-medium hover:bg-accent-dark transition-all duration-300 tracking-wide hover:shadow-[0_0_20px_rgba(0,229,160,0.4)]"
        >
          Get in touch
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-1"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            {mobileOpen ? (
              <path
                d="M6 6l12 12M6 18L18 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 6h16M4 12h16M4 18h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-white/5 bg-[#0a0a0a]/95 backdrop-blur-md px-6 py-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-sm py-1 text-gray-400 hover:text-white transition-colors font-light tracking-wide"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="rounded-full bg-accent text-black px-5 py-2 text-xs font-medium text-center mt-2 tracking-wide"
          >
            Get in touch
          </a>
        </div>
      )}
    </nav>
  );
}
