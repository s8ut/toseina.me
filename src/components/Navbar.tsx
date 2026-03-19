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
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            className="text-accent"
          >
            <path
              d="M12 2L2 9l10 13L22 9 12 2z"
              fill="currentColor"
              opacity="0.9"
            />
            <path
              d="M12 2L2 9h20L12 2z"
              fill="currentColor"
              opacity="0.6"
            />
          </svg>
          <span className="text-white font-medium text-sm tracking-wide">
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
          className="hidden sm:inline-flex rounded-full bg-accent text-black px-5 py-1.5 text-xs font-medium hover:bg-accent-dark transition-colors duration-300 tracking-wide"
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
