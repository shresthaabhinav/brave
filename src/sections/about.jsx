"use client";
import { motion } from "framer-motion";
import React from "react";

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
          About <span style={{ color: "#7C3AED" }}>Us</span>
        </motion.h1>
      </div>

      <section id="about" className="about-section">
        <motion.div
          className="about-grid"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ show: { transition: { staggerChildren: 0.12 } } }}
        >
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
            DD Digital World
          </motion.h2>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="about-text"
          >
            <p className="text-justify">
              DD Digital World is a premier technology solutions provider
              dedicated to building the future of business infrastructure. We
              specialize in delivering a seamless, "360-degree" IT ecosystem—
              bridging the gap between robust physical hardware and
              sophisticated digital strategy.
            </p>

            <p className="text-justify">
              In today's fast-paced market, businesses often struggle with
              fragmented systems. We solve that by providing a single point of
              accountability for everything from server installation and custom
              software development to high-impact digital marketing.
            </p>

            <p className="text-justify">
              Our mission is to simplify complexity, allowing you to focus on
              your core business while we ensure your technology is fast,
              secure, and scalable.
            </p>
          </motion.div>
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

          .img-wrap.tall { height: 320px; }
          .img-wrap.short { height: 220px; }

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

          .about-content {
            display: flex;
            flex-direction: column;
            gap: 28px;
            max-width: 560px;
          }

          .about-heading {
  font-size: clamp(2rem, 3.5vw, 2.8rem);
  font-weight: 700;
  line-height: 1.2;
  margin: 0;
  background: linear-gradient(90deg, #7C3AED 0%, #E79736 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
}

          .about-text {
            display: flex;
            flex-direction: column;
            gap: 18px;
          }

          .about-text p {
            font-size: 1rem;
            color: #555;
            line-height: 1.8;
            margin: 0;
          }

          @media (max-width: 1024px) {
            .about-section {
              gap: 48px;
              padding: 60px 40px;
            }

            .img-wrap {
              width: 200px;
            }

            .img-wrap.tall { height: 260px; }
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

            .img-wrap.tall { height: 200px; }
            .img-wrap.short { height: 140px; }

            .about-text p {
              font-size: 0.95rem;
            }
          }
        `}</style>
      </section>
    </>
  );
}