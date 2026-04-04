"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function AboutStory() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);

  return (
    <section id="collaborate" ref={containerRef} className="relative w-full min-h-screen py-24 px-8 md:px-16 lg:px-24 flex items-center bg-[#E5E2DC] overflow-hidden">
      <div className="absolute inset-0 z-0">
         <Image 
          src="/images/Page 3 Background Image.png" 
          alt="Bg 3" 
          fill 
          unoptimized
          className="object-cover opacity-80" 
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16">
        
        {/* Text Section */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left"
        >
          <h2 className="font-junge text-5xl md:text-6xl lg:text-[4.5rem] leading-[1.1] uppercase tracking-[0.2em] text-[#1a1a1a] mb-8">
            WHY AMILLY
          </h2>
          
          <p className="font-imprima text-lg md:text-xl lg:text-2xl leading-relaxed tracking-[0.1em] lg:tracking-widest text-[#333] mb-12 max-w-lg lg:max-w-xl">
            AMILLY is built for those who wear confidence as naturally as they wear clothes. 
            Our pieces blend timeless design with modern attitude, creating styles that feel 
            effortless yet bold. Every collection is crafted to help you express who you 
            are—without saying a word.
          </p>

          <button className="flex items-center gap-3 border border-foreground/30 px-6 py-2 rounded-full hover:bg-foreground hover:text-background transition-all uppercase tracking-widest text-xs font-poppins font-medium group">
            OUR COLLECTION
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>

        {/* Collage Section */}
        <div className="w-full lg:w-1/2 flex flex-col md:flex-row gap-4 h-[600px] perspective-1000">
          {/* Big Card - Moving slightly down on scroll */}
          <motion.div 
            style={{ y: y1 }}
            className="w-full md:w-2/3 h-1/2 md:h-full relative overflow-hidden group bg-[#E5E2DC]/50 rounded-sm"
          >
            <Image
              src="/images/Why Amilly - Image big Card.jpg"
              alt="Story 1"
              fill
              unoptimized
              className="object-cover img-low-sat transition-transform duration-[1.5s] group-hover:scale-110 object-[center_20%]"
            />
          </motion.div>
          
          {/* Right column small cards - Moving slightly up on scroll */}
          <motion.div 
            style={{ y: y2 }}
            className="w-full md:w-1/3 flex flex-row md:flex-col gap-4 h-1/2 md:h-full"
          >
            <div className="w-1/2 md:w-full h-full md:h-1/2 relative overflow-hidden group bg-[#E5E2DC]/50 rounded-sm">
              <Image
                src="/images/Why Amilly - Image.jpg"
                alt="Story 2"
                fill
                unoptimized
                className="object-cover img-low-sat transition-transform duration-[1.5s] group-hover:scale-110 object-center"
              />
            </div>
            <div className="w-1/2 md:w-full h-full md:h-1/2 relative overflow-hidden group bg-[#E5E2DC]/50 rounded-sm">
              <Image
                src="/images/Why Amilly -Image.jpg"
                alt="Story 3"
                fill
                unoptimized
                className="object-cover img-low-sat transition-transform duration-[1.5s] group-hover:scale-110 object-top"
              />
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
