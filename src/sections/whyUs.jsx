"use client";
import { motion } from "framer-motion";
import {
  FaLink,
  FaChartLine,
  FaMapMarkerAlt,
  FaShieldAlt,
} from "react-icons/fa";

const cards = [
  {
    color: "#7F77DD",
    title: "Unified Support",
    desc: "No more juggling multiple vendors. We handle the cable, the code, and the campaign.",
    icon: <FaLink />,
  },
  {
    color: "#1D9E75",
    title: "Scalable Solutions",
    desc: "We build systems that grow with you, whether you have 5 employees or 500.",
    icon: <FaChartLine />,
  },
  {
    color: "#D85A30",
    title: "Local Expertise",
    desc: "Deep understanding of regional market challenges and technical requirements.",
    icon: <FaMapMarkerAlt />,
  },
  {
    color: "#378ADD",
    title: "Security First",
    desc: "Every line of code and every hardware port is optimized for maximum data protection.",
    icon: <FaShieldAlt />,
  },
];

export default function WhyUs() {
  return (
    <section
  id="whyUs"
  className="relative w-full py-24 px-4 md:px-10 lg:px-16 bg-no-repeat bg-center bg-cover bg-fixed"
  style={{ backgroundImage: "url('/img/whyUs.png')" }}
>
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className="font-semibold text-[#1a1a1a]"
            style={{ fontSize: "clamp(2rem, 5vw, 3.4rem)" }}
          >
            Reasons To Choose <span className="text-[#7C3AED]">Us</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            We combine technical capability, regional insight, and secure infrastructure
            to deliver dependable solutions that grow with your business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-[24px] bg-white/95 backdrop-blur-sm p-8 min-h-[280px] border border-[#ece8df] shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition-all duration-300 hover:shadow-[0_18px_45px_rgba(0,0,0,0.10)]"
            >
              <div
                className="w-14 h-14 flex items-center justify-center rounded-2xl mb-6 transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: `${card.color}15` }}
              >
                <span className="text-2xl" style={{ color: card.color }}>
                  {card.icon}
                </span>
              </div>

              <h3 className="text-[1.25rem] font-bold text-[#1a1a1a] mb-3">
                {card.title}
              </h3>

              <p className="text-[15px] text-gray-500 leading-7">
                {card.desc}
              </p>

              <div className="mt-6">
  <span
    className="block h-[3px] w-12 rounded-full transition-all duration-300 group-hover:w-20"
    style={{ backgroundColor: card.color }}
  />
</div>

<span
  className="absolute left-0 bottom-0 h-[4px] w-full scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"
  style={{ backgroundColor: card.color }}
/>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}