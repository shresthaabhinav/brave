"use client";
import { motion } from "framer-motion";

import {
  SiTypescript,
  SiCplusplus,
  SiMysql,
  SiExpress,
  SiCss,
  SiAngular,
  SiDotnet,
  SiNodedotjs,
  SiJavascript,
  SiPython,
  SiMongodb,
  SiKubernetes,
  SiDjango,
  SiVuedotjs,
  SiPostgresql,
  SiReact,
  SiDocker,
  SiHtml5,
  SiLaravel,
  SiPhp,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

const row1 = [
  { name: "TypeScript", icon: <SiTypescript size={22} color="#3178c6" /> },
  { name: "C++", icon: <SiCplusplus size={22} color="#00599c" /> },
  { name: "MySql", icon: <SiMysql size={22} color="#4479a1" /> },
  { name: "Express.js", icon: <SiExpress size={22} color="#000000" /> },
  { name: "CSS", icon: <SiCss size={22} color="#1572b6" /> },
  { name: "Angular", icon: <SiAngular size={22} color="#dd0031" /> },
  { name: "C#", icon: <SiDotnet size={22} color="#512bd4" /> },
];

const row2 = [
  { name: "Node.js", icon: <SiNodedotjs size={22} color="#339933" /> },
  { name: "JavaScript", icon: <SiJavascript size={22} color="#f7df1e" /> },
  { name: "Python", icon: <SiPython size={22} color="#3776ab" /> },
  { name: "MongoDB", icon: <SiMongodb size={22} color="#47a248" /> },
  { name: "Kubernetes", icon: <SiKubernetes size={22} color="#326ce5" /> },
  { name: "Django", icon: <SiDjango size={22} color="#092e20" /> },
  { name: "Vue", icon: <SiVuedotjs size={22} color="#42b883" /> },
];

const row3 = [
  { name: "PostgreSQL", icon: <SiPostgresql size={22} color="#4169e1" /> },
  { name: "React", icon: <SiReact size={22} color="#61dafb" /> },
  { name: "Java", icon: <FaJava size={22} color="#ed8b00" /> },
  { name: "Docker", icon: <SiDocker size={22} color="#2496ed" /> },
  { name: "HTML", icon: <SiHtml5 size={22} color="#e34f26" /> },
  { name: "Laravel", icon: <SiLaravel size={22} color="#ff2d20" /> },
  { name: "PHP", icon: <SiPhp size={22} color="#777bb4" /> },
];

const double = (arr) => [...arr, ...arr, ...arr];

function TechBadge({ icon, name }) {
  return (
    <div className="flex items-center gap-3 px-5 py-3 bg-white rounded-xl border border-gray-200 whitespace-nowrap select-none mx-2 flex-shrink-0">
      <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <span className="text-sm font-medium text-gray-800">{name}</span>
    </div>
  );
}

function MarqueeRow({ items, direction = "left", speed = 35 }) {
  const doubled = double(items);
  const animClass =
    direction === "left" ? "animate-marquee-left" : "animate-marquee-right";

  return (
    <div className="overflow-hidden w-full">
      <div
        className={`flex ${animClass}`}
        style={{ "--speed": `${speed}s`, width: "max-content" }}
      >
        {doubled.map((item, i) => (
          <TechBadge key={i} icon={item.icon} name={item.name} />
        ))}
      </div>
    </div>
  );
}

export default function TechStack() {
  return (
    <section
      id="tech"
      className="bg-white mx-auto pb-20 max-w-[2000px] overflow-hidden w-full"
    >
      {/* Heading */}
      <div className="mt-20 flex flex-col items-center gap-3 mb-12">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-4xl sm:text-5xl md:text-6xl font-semibold text-black"
        >
          Our <span style={{ color: "#7C3AED" }}>Tech</span> Stack
        </motion.h1>
      </div>

      {/* Marquee rows — no horizontal padding so strips bleed edge to edge */}
      <div className="flex flex-col gap-5">
        <MarqueeRow items={row1} direction="left" speed={30} />
        <MarqueeRow items={row2} direction="right" speed={34} />
        <MarqueeRow items={row3} direction="left" speed={28} />
      </div>

      <style>{`
        @keyframes marquee-left {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-left {
          animation: marquee-left var(--speed, 30s) linear infinite;
        }
        .animate-marquee-right {
          animation: marquee-right var(--speed, 34s) linear infinite;
        }
        .animate-marquee-left:hover,
        .animate-marquee-right:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
