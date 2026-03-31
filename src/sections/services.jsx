"use client";

import { useRef } from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const slides = [
  {
    left: {
      img: "/img2/ai.jpg",
      title: "AI Solutions",
      desc: "Leverage cutting-edge artificial intelligence to automate and scale your business.",
    },
    right: {
      img: "/img2/cloud.jpg",
      title: "Cloud Services",
      desc: "Reliable cloud infrastructure tailored for performance, security, and scalability.",
    },
  },
  {
    left: {
      img: "/img2/cyber.jpg",
      title: "Cybersecurity",
      desc: "Protect your systems and data with enterprise-grade security protocols and audits.",
    },
    right: {
      img: "/img2/mobile.jpg",
      title: "Mobile Development",
      desc: "Beautiful, fast cross-platform apps built for iOS and Android.",
    },
  },
  {
    left: {
      img: "/img2/skill.jpg",
      title: "Skill Augmentation",
      desc: "On-demand expert talent to extend your team quickly and cost-effectively.",
    },
    right: {
      img: "/img2/software.jpg",
      title: "Software Development",
      desc: "End-to-end software solutions crafted with modern stacks and quality assurance.",
    },
  },
];

function ServiceCard({ img, title, desc }) {
  return (
    <div className="relative w-[320px] md:w-[370px] h-[260px] md:h-[290px] rounded-2xl overflow-hidden shadow-md flex-shrink-0 group transform-gpu will-change-transform">
      {/* Image (optimized) */}
      <Image
        src={img}
        alt={title}
        fill
        sizes="(max-width: 768px) 100vw, 370px"
        className="object-cover transition-transform duration-500 md:group-hover:scale-[1.02]"
        priority={false}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent md:group-hover:opacity-0 transition-opacity duration-300" />

      {/* Title */}
      <div className="absolute bottom-4 left-5 right-5 md:group-hover:opacity-0 transition-opacity duration-300">
        <h3 className="text-white font-bold text-[15px] md:text-[17px] drop-shadow">
          {title}
        </h3>
      </div>

      {/* Hover Content */}
      <div className="absolute inset-0 bg-black/70 opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center px-6 text-center gap-3">
        <div className="w-6 h-[2px] bg-white/60" />
        <h3 className="text-white font-bold text-[18px]">{title}</h3>
        <p className="text-gray-300 text-[12px] md:text-[13px] leading-relaxed">
          {desc}
        </p>
      </div>
    </div>
  );
}

export default function Services() {
  const autoplay = useRef(
    Autoplay({
      delay: 3500,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    }),
  );

  return (
    <div id="services" className="relative w-full flex flex-col">
      {/* TOP SECTION */}
      <div className="relative w-full max-w-[2000px] mx-auto overflow-hidden">
        <Image
          src="/img/coworkers.jpg"
          alt="Services background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 px-4 md:px-10 lg:px-16 pt-14 pb-52 flex flex-col md:flex-row gap-6 text-white">
          <div className="md:flex-[3]">
            <h1 className="font-bold text-[26px] md:text-[34px] leading-tight">
              Our Expertise Crafting Results-Driven <br />
              Campaigns For Digital Marketing
            </h1>
          </div>

          <div className="md:flex-[2] flex items-end">
            <p className="text-gray-200 text-sm leading-relaxed">
              Our expertise lies in crafting data-driven digital marketing
              campaigns that boost brand visibility, engage audiences, and
              deliver measurable business growth across multiple platforms.
            </p>
          </div>
        </div>
      </div>

      {/* WHITE SPACER */}
      <div className="bg-white h-32 md:h-44 w-full" />

      {/* CAROUSEL */}
      <div className="absolute bottom-0 left-0 right-0 h-[300px] md:h-[340px] flex items-center">
        <div className="max-w-[2000px] mx-auto w-full px-4 md:px-10 lg:px-16">
          <Carousel
            plugins={[autoplay.current]}
            opts={{ loop: true }}
            className="w-full"
          >
            <CarouselContent>
              {slides.map((slide, index) => (
                <CarouselItem key={index}>
                  {/* Responsive layout */}
                  <div className="flex justify-center items-center gap-8 md:gap-16">
                    {/* Show 1 card on mobile */}
                    <div className="block md:hidden">
                      <ServiceCard {...slide.left} />
                    </div>

                    {/* Show 2 cards on desktop */}
                    <div className="hidden md:flex gap-16">
                      <ServiceCard {...slide.left} />
                      <ServiceCard {...slide.right} />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Controls */}
            <CarouselPrevious className="text-black border-black/80 bg-white hover:bg-black/20 -left-2 " />
            <CarouselNext className="text-black border-black/80 bg-white hover:bg-black/20 -right-2" />
          </Carousel>
        </div>
      </div>
    </div>
  );
}
