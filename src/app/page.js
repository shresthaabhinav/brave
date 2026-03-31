"use client";

import { useRef } from "react";
import Hero from "@/sections/hero";
import Navbar from "@/components/navbar";
import About from "@/sections/about";
import Services from "@/sections/services";
import Try from "@/sections/try";
import Tech from "@/sections/tech";
import WhyUs from "@/sections/whyUs";
import Contact from "@/sections/contact";
import Footer from "@/sections/footer";

export default function Home() {
  const sectionRefs = {
    hero: useRef(null),
    about: useRef(null),
    services: useRef(null),
    tech: useRef(null),
    whyUs: useRef(null),
    contact: useRef(null),
  };

  return (
    <>
      <Navbar sectionRefs={sectionRefs} />
      <div ref={sectionRefs.hero}>
        <Hero />
      </div>
      <div ref={sectionRefs.about}>
        <About />
      </div>
      <div ref={sectionRefs.services}>
        <Services />
      </div>
      <div ref={sectionRefs.tech}>
        <Tech />
      </div>
      <div ref={sectionRefs.whyUs}>
        <WhyUs />
      </div>
      <div ref={sectionRefs.contact}>
        <Contact />
      </div>
      <Footer />
      {/* <Try/> */}
    </>
  );
}
