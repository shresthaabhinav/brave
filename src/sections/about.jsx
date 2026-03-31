"use client";
import { motion } from "framer-motion";
import React from "react";

const features = [
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
    title: "Strategic Planning",
    desc: "We analyze resources, risks, and opportunities to make decisions.",
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    title: "Project Execution",
    desc: "We monitor progress, resolves issues, and ensures successful project delivery.",
  },
];

// Replace these src values with your actual image imports or paths
const images = [
  { src: "/img/About1.jpg", alt: "Team planning session", tall: true },
  { src: "/img/about2.jpg", alt: "Writing and analysis", tall: false },
  { src: "/img/about3.jpg", alt: "Target strategy", tall: false },
  { src: "/img/about4.jpg", alt: "Document review", tall: true },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function AboutSection() {
  return (
    <>
      <div className="mt-20 flex flex-col items-center gap-3 mb-12">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-4xl sm:text-5xl md:text-6xl font-semibold text-black"
        >
          About <span style={{ color: "#999999" }}>Us</span>
        </motion.h1>
      </div>
      <section id="about" className="about-section">
        {/* ── Image grid ─────────────────────────────── */}
        <motion.div
          className="about-grid"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ show: { transition: { staggerChildren: 0.12 } } }}
        >
          {/* Column 1 — tall top, short bottom */}
          <div className="img-col">
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="img-wrap tall"
            >
              <img src={images[0].src} alt={images[0].alt} />
            </motion.div>
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="img-wrap short"
            >
              <img src={images[2].src} alt={images[2].alt} />
            </motion.div>
          </div>

          {/* Column 2 — short top, tall bottom */}
          <div className="img-col">
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="img-wrap short"
            >
              <img src={images[1].src} alt={images[1].alt} />
            </motion.div>
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="img-wrap tall"
            >
              <img src={images[3].src} alt={images[3].alt} />
            </motion.div>
          </div>
        </motion.div>

        {/* ── Text content ───────────────────────────── */}
        <motion.div
          className="about-content"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ show: { transition: { staggerChildren: 0.15 } } }}
        >
          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="about-heading"
          >
            Elevate Your Brand in
            <br />
            Digital Landscape
          </motion.h2>

          <div className="features">
            {features.map((f) => (
              <motion.div
                key={f.title}
                variants={fadeUp}
                transition={{ duration: 0.6 }}
                className="feature-item"
              >
                <div className="feature-icon">{f.icon}</div>
                <div>
                  <h3 className="feature-title">{f.title}</h3>
                  <p className="feature-desc">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <style>{`
        .about-section {
          display: flex;
          align-items: center;
          gap: 80px;
          padding: 0px 80px 100px 80px;
          max-width: 1400px;
          margin: 0 auto;
        }

        /* ── Image grid ── */
        .about-grid {
          display: flex;
          gap: 20px;
          flex-shrink: 0;
        }

        .img-col {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .img-wrap {
          border-radius: 16px;
          overflow: hidden;
          width: 260px;
        }
        .img-wrap.tall  { height: 320px; }
        .img-wrap.short { height: 220px; }

        /* second column offset upward */
        .img-col:nth-child(2) {
          margin-top: 48px;
        }

        .img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.4s ease;
        }
        .img-wrap:hover img {
          transform: scale(1.04);
        }

        /* ── Text ── */
        .about-content {
          display: flex;
          flex-direction: column;
          gap: 40px;
          max-width: 520px;
        }

        .about-heading {
          font-size: clamp(2rem, 3.5vw, 2.8rem);
          font-weight: 700;
          line-height: 1.2;
          color: #111;
          margin: 0;
        }

        .features {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        .feature-item {
          display: flex;
          align-items: flex-start;
          gap: 20px;
        }

        .feature-icon {
          flex-shrink: 0;
          width: 56px;
          height: 56px;
          border: 1.5px solid #ddd;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #111;
          margin-top: 2px;
        }

        .feature-title {
          font-size: 1.35rem;
          font-weight: 700;
          color: #111;
          margin: 0 0 8px;
        }

        .feature-desc {
          font-size: 1rem;
          color: #555;
          line-height: 1.6;
          margin: 0;
          max-width: 360px;
        }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .about-section {
            gap: 48px;
            padding: 60px 40px;
          }
          .img-wrap {
            width: 200px;
          }
          .img-wrap.tall  { height: 260px; }
          .img-wrap.short { height: 180px; }
          .about-heading {
            font-size: 2rem;
          }
        }

        @media (max-width: 768px) {
          .about-section {
            flex-direction: column;
            padding: 48px 24px;
            gap: 48px;
          }
          .about-content {
            max-width: 100%;
          }
          .img-wrap {
            width: 160px;
          }
          .img-wrap.tall  { height: 200px; }
          .img-wrap.short { height: 140px; }
          .feature-title {
            font-size: 1.2rem;
          }
          .feature-desc {
            font-size: 0.95rem;
          }
        }
      `}</style>
      </section>
    </>
  );
}
