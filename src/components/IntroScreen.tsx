"use client";

import { useEffect, useState } from "react";

export default function IntroScreen() {
  const [phase, setPhase] = useState<"logo" | "text" | "exit" | "done">("logo");

  useEffect(() => {
    // Phase 1: logo appears (already visible via CSS animation)
    const t1 = setTimeout(() => setPhase("text"), 600);
    // Phase 2: text fades in
    const t2 = setTimeout(() => setPhase("exit"), 2000);
    // Phase 3: overlay slides up and away
    const t3 = setTimeout(() => setPhase("done"), 2700);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0a0a0a] transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)]"
      style={{
        transform: phase === "exit" ? "translateY(-100%)" : "translateY(0)",
      }}
    >
      {/* Logo */}
      <div
        className="relative inline-flex items-center justify-center w-16 h-16 rounded-2xl overflow-hidden logo-box-glow transition-all duration-700 ease-out"
        style={{
          opacity: phase === "logo" || phase === "text" || phase === "exit" ? 1 : 0,
          transform:
            phase === "logo" || phase === "text" || phase === "exit"
              ? "scale(1)"
              : "scale(0.5)",
        }}
      >
        <span className="absolute inset-0 logo-box-bg" />
        <svg
          className="relative z-10"
          width="32"
          height="20"
          viewBox="0 0 15 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.58332 8.29166L2.70832 5.09722L3.37499 4H12.6667L10.7917 7.23611H5.20832L4.58332 8.29166Z"
            fill="white"
          />
          <path
            d="M13.25 3.01389L15 0H0.638889L0 1.11111L1.86111 4.25L2.52778 3.01389H13.25Z"
            fill="white"
          />
        </svg>
      </div>

      {/* Name */}
      <p
        className="mt-5 text-xl font-medium tracking-widest uppercase bg-gradient-to-r from-gray-400 to-white bg-clip-text text-transparent transition-all duration-700 ease-out"
        style={{
          opacity: phase === "text" || phase === "exit" ? 1 : 0,
          transform:
            phase === "text" || phase === "exit"
              ? "translateY(0)"
              : "translateY(12px)",
        }}
      >
        Toseina
      </p>

      {/* Subtle loading bar */}
      <div className="absolute bottom-12 w-24 h-[2px] rounded-full bg-white/10 overflow-hidden">
        <div
          className="h-full bg-accent rounded-full transition-all ease-linear"
          style={{
            width:
              phase === "logo"
                ? "30%"
                : phase === "text"
                  ? "80%"
                  : "100%",
            transitionDuration:
              phase === "logo" ? "600ms" : phase === "text" ? "1400ms" : "300ms",
          }}
        />
      </div>
    </div>
  );
}
