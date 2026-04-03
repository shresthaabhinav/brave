"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
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
      img: "/img2/software.jpg",
      title: "Custom Software Development",
      href: "/service",
      desc: "Tailor-made applications built to automate your unique workflows. We develop scalable ERPs, CRMs, and management tools that solve specific operational challenges and improve efficiency.",
    },
    right: {
      img: "/img2/web.jpg",
      title: "Professional Web Development",
      href: "/service",
      desc: "High-speed, responsive, and secure websites that serve as your 24/7 storefront. From corporate landing pages to complex e-commerce platforms, we build for performance and conversion.",
    },
  },
  {
    left: {
      img: "/img2/ui.jpg",
      title: "UI/UX Design",
      href: "/service",
      desc: "User-centric design focused on intuition and aesthetics. We create seamless digital interfaces that enhance user satisfaction, reduce friction, and strengthen brand loyalty.",
    },
    right: {
      img: "/img2/mobile.jpg",
      title: "Digital Marketing & Ad Campaigns",
      href: "/service",
      desc: "Data-driven strategies to amplify your reach. We manage end-to-end SEO, social media growth, and high-ROI Google/Meta ad campaigns to turn browsers into buyers.",
    },
  },
  {
    left: {
      img: "/img2/video.jpg",
      title: "Professional Video Production",
      href: "/service",
      desc: "High-impact visual storytelling for the digital age. We provide 4K video editing, motion graphics, and corporate videography to elevate your brand’s social media and television presence.",
    },
    right: {
      img: "/img2/hardware.jpg",
      title: "IT Infrastructure & Hardware",
      href: "/service",
      desc: "The physical backbone of your office. We handle structured cabling, server room setup, networking architecture, and advanced security system installations.",
    },
  },
];

function ServiceCard({ img, title, desc, href }) {
  return (
    <Link
      href={href}
      className="relative w-[320px] md:w-[370px] h-[260px] md:h-[290px] rounded-2xl overflow-hidden shadow-md flex-shrink-0 group transform-gpu will-change-transform block cursor-pointer"
    >
      <Image
        src={img}
        alt={title}
        fill
        sizes="(max-width: 768px) 100vw, 370px"
        className="object-cover transition-transform duration-500 md:group-hover:scale-[1.02]"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent md:group-hover:opacity-0 transition-opacity duration-300" />

      <div className="absolute bottom-4 left-5 right-5 md:group-hover:opacity-0 transition-opacity duration-300">
        <h3 className="text-white font-bold text-[15px] md:text-[17px] drop-shadow">
          {title}
        </h3>
      </div>

      <div className="absolute inset-0 bg-black/70 opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center px-6 text-center gap-3">
        <div className="w-6 h-[2px] bg-white/60" />
        <h3 className="text-white font-bold text-[18px]">{title}</h3>
        <p className="text-gray-300 text-[12px] md:text-[13px] leading-relaxed">
          {desc}
        </p>
      </div>
    </Link>
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
          <div>
            <h1 className="font-bold text-[26px] md:text-[42px] leading-tight">
              Our Expertise
              <br />
              <span className="font-medium text-[16px]">
                Integrated solutions designed for high-performance business
                growth.
              </span>
            </h1>
          </div>
        </div>
      </div>

      <div className="bg-white h-32 md:h-44 w-full" />

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
                  <div className="flex justify-center items-center gap-8 md:gap-16">
                    <div className="block md:hidden">
                      <ServiceCard {...slide.left} />
                    </div>

                    <div className="hidden md:flex gap-16">
                      <ServiceCard {...slide.left} />
                      <ServiceCard {...slide.right} />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="text-black border-black/80 bg-white hover:bg-black/20 -left-2" />
            <CarouselNext className="text-black border-black/80 bg-white hover:bg-black/20 -right-2" />
          </Carousel>
        </div>
      </div>
    </div>
  );
}