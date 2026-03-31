"use client";
import { motion } from "framer-motion";
import {
  FaLightbulb,
  FaDollarSign,
  FaRocket,
  FaExpandArrowsAlt,
  FaShieldAlt,
  FaUsers,
} from "react-icons/fa";

const cards = [
  {
    color: "#7F77DD",
    title: "Consultancy & Strategy",
    desc: "Technology guidance to support sustainable growth. We don't just build — we advise.",
    icon: <FaLightbulb />,
  },
  {
    color: "#1D9E75",
    title: "Cost Transparency",
    desc: "Clear pricing with no hidden costs. Get the best value for top-tier developers.",
    icon: <FaDollarSign />,
  },
  {
    color: "#D85A30",
    title: "Fast Onboarding",
    desc: "Get started in as little as 2 weeks with our streamlined onboarding process.",
    icon: <FaRocket />,
  },
  {
    color: "#D4537E",
    title: "Quick Scalability",
    desc: "Connect to a network of top talents locally to globally. Scale up or down as your project demands.",
    icon: <FaExpandArrowsAlt />,
  },
  {
    color: "#378ADD",
    title: "Security & NDA",
    desc: "All staff sign NDAs before work begins. Your intellectual property is protected at every stage.",
    icon: <FaShieldAlt />,
  },
  {
    color: "#BA7517",
    title: "Tailored Team Solutions",
    desc: "Each team is formed following a comprehensive examination of your software development needs.",
    icon: <FaUsers />,
  },
];

export default function WhyUs() {
  return (
    <section
  id="whyUs"
  className="relative w-full overflow-hidden py-24 px-4 md:px-10 lg:px-16 bg-no-repeat bg-center bg-cover md:bg-fixed"
  style={{ backgroundImage: "url('/img/whyUs.png')" }}
>
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65 }}
        viewport={{ once: true }}
        className="text-center font-semibold text-[#1a1a1a] mb-16"
        style={{ fontSize: "clamp(2rem, 5vw, 3.4rem)" }}
      >
        Reasons To Choose <span className="text-gray-400">Us</span>
      </motion.h2>

      {/* Grid */}
      <div
        className="max-w-[1100px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 overflow-hidden rounded-2xl"
        style={{
          border: "0.5px solid #E0DED8",
          gap: "0.5px",
          background: "#E0DED8",
        }}
      >
        {cards.map((card, index) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: index * 0.08 }}
            viewport={{ once: true }}
            className="group relative flex flex-col gap-4 bg-[#F7F6F2] p-8 transition-all duration-300 hover:bg-white"
          >
            {/* Icon */}
            <div
              className="w-12 h-12 flex items-center justify-center rounded-full"
              style={{ backgroundColor: `${card.color}15` }}
            >
              <span className="text-xl" style={{ color: card.color }}>
                {card.icon}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-[1.2rem] font-bold text-[#1a1a1a]">
              {card.title}
            </h3>

            {/* Desc */}
            <p className="text-sm text-gray-500 leading-relaxed">{card.desc}</p>

            {/* Hover underline */}
            <span
              className="absolute bottom-0 left-8 h-[2px] w-0 transition-all duration-300 group-hover:w-[calc(100%-4rem)]"
              style={{ background: card.color }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
