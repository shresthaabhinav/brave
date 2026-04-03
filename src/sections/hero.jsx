"use client";
import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

const CHARS = "#%$^&@!*?~";

function ScrambleText({ text, trigger = true, duration = 1800 }) {
  const [display, setDisplay] = useState(text);
  const frameRef = useRef(null);

  useEffect(() => {
    if (!trigger) return;

    const letters = text.split("");
    const total = letters.length;
    const start = performance.now();

    const tick = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);

      const resolved = Math.floor(progress * total);

      const scrambled = letters.map((char, i) => {
        if (char === " ") return " ";
        if (i < resolved) return char;
        return CHARS[Math.floor(Math.random() * CHARS.length)];
      });

      setDisplay(scrambled.join(""));

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(tick);
      } else {
        setDisplay(text);
      }
    };

    frameRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameRef.current);
  }, [trigger, text, duration]);

  return <>{display}</>;
}

export default function Hero() {
  const [scramble, setScramble] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setScramble(true), 600);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <div
        id="hero"
        className="relative w-full min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/img/curve.png')" }}
      >
        <div className="absolute inset-0" />

        <div className="relative z-10 flex items-center justify-center w-full h-full">
          <div className="mt-2 lg:mt-12 p-10 sm:p-16 flex flex-col items-center text-center w-full max-w-2xl">
            {/* Headline */}
            <div className="leading-none">
  <motion.h1
    className="text-xl sm:text-3xl md:text-5xl lg:text-[64px] font-semibold mb-6 leading-tight text-[#1F1F24] lg:whitespace-nowrap"
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 0.2 }}
  >
    EMPOWERING PROGRESS THROUGH
    <br />
    <span className="inline-block font-mono tracking-tight text-[#7C3AED]">
      <ScrambleText text="INTEGRATED TECHNOLOGY" trigger={scramble} duration={1200} />
    </span>
  </motion.h1>
</div>

            {/* Tagline */}
            <motion.p
              className="text-gray-700 mb-8 tracking-wide"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              "360-degree" IT ecosystem—bridging the gap between robust
              <br />
               physical hardware and sophisticated digital strategy.
            </motion.p>

            {/* Buttons */}
            <motion.div
              className="flex flex-col md:flex-row flex-wrap items-center justify-center md:justify-start gap-6 md:mr-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.5 }}
            >
              {/* Primary */}
              <a
                href="#about"
                className="relative px-8 py-3 text-xs tracking-widest uppercase font-medium text-white bg-[#7C3AED] border border-white/20 overflow-hidden group transition"
              >
                <span className="relative z-10 group-hover:text-white transition">
                  Get Started
                </span>
                <span className="absolute inset-0 bg-[#6418E5] scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
              </a>

              {/* Secondary */}
              <a
                href="#contact"
                className="relative px-6 py-3 text-xs border border-[#7C3AED] tracking-widest uppercase font-medium text-[#7C3AED] transition group hover:bg-[#7C3AED] hover:text-white"
              >
                Our Work
              </a>
            </motion.div>
          </div>
        </div>

        <div className="flex-1 hidden md:flex items-center justify-center text-white/30" />
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-3 opacity-60">
        <div className="w-6 h-10 rounded-full border border-black flex items-start justify-center p-1">
          <div
            className="w-[5px] h-[10px] rounded-full bg-black"
            style={{ animation: "scrollDot 1.5s ease-in-out infinite" }}
          />
        </div>
      </div>

      <style>{`
        @keyframes scrollDot {
          0%, 100% { transform: translateY(2px); opacity: 0.7; }
          50% { transform: translateY(6px); opacity: 1; }
        }
      `}</style>
    </>
  );
}