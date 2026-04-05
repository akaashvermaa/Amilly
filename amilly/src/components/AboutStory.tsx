"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { siteData } from "@/config/siteData";

export default function AboutStory() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Dramatic Parallax Speeds
  const yUp1 = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const yUp2 = useTransform(scrollYProgress, [0, 1], ["15%", "-15%"]);
  const yDown = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section 
      id="about" 
      ref={containerRef} 
      className="relative w-full min-h-[140vh] bg-[#111] text-[#F3EFEA] py-32 md:py-48 overflow-hidden flex flex-col justify-center font-poppins selection:bg-[#F3EFEA] selection:text-[#111]"
    >
      {/* Background Ambience / Monogram watermark */}
      <div className="absolute inset-0 z-0 opacity-[0.03] mix-blend-screen pointer-events-none flex items-center justify-center">
         <Image 
          src={siteData.aboutStory.backgroundImage}
          alt="Bg 3" 
          fill 
          unoptimized
          className="object-cover" 
        />
      </div>

      <div className="relative z-10 max-w-[1700px] mx-auto w-full px-6 md:px-12 lg:px-20 flex flex-col gap-24 lg:gap-32">
        
        {/* Massive Typographical Statement */}
        <div className="w-full flex flex-col">
          <motion.h2 
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
            viewport={{ once: true, margin: "-100px" }}
            className="font-aboreto text-[13vw] md:text-[10vw] leading-[0.85] tracking-[0.05em] uppercase text-left"
          >
            {siteData.aboutStory.watermarkLeft}
          </motion.h2>
          <motion.h2 
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.1, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
            viewport={{ once: true, margin: "-100px" }}
            className="font-aboreto text-[13vw] md:text-[10vw] leading-[0.85] tracking-[0.05em] uppercase text-right mt-2 md:-mt-8"
            style={{
              WebkitTextStroke: "1px rgba(243, 239, 234, 0.6)",
              color: "transparent"
            }}
          >
            {siteData.aboutStory.watermarkRight}
          </motion.h2>
        </div>

        {/* 3-Column Editorial Asymmetry */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Image Parallax Fast Up */}
          <motion.div 
            style={{ y: yUp1 }}
            className="hidden md:block md:col-span-4 h-[600px] lg:h-[800px] relative overflow-hidden group"
          >
            <Image
              src={siteData.aboutStory.images.leftTall}
              alt="Story Primary"
              fill
              unoptimized
              className="object-cover object-top transition-transform duration-[2s] group-hover:scale-105"
            />
          </motion.div>

          {/* Center Column: Narrative Core */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="col-span-1 md:col-span-4 flex flex-col justify-center items-center text-center z-20"
          >
            <span className="text-[#F3EFEA]/30 text-xs tracking-[10px] uppercase font-semibold mb-8">
              {siteData.aboutStory.sectionTitle}
            </span>
            <p className="font-imprima text-xl md:text-2xl lg:text-3xl leading-relaxed tracking-[1px] md:tracking-[2px] opacity-90 max-w-sm md:max-w-md mb-12">
              {siteData.aboutStory.paragraph}
            </p>
            <Link href="/products">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative flex items-center gap-4 text-[#F3EFEA] hover:opacity-70 transition-opacity"
              >
                <span className="text-xs md:text-sm font-semibold tracking-[4px] uppercase border-b border-[#F3EFEA]/30 pb-2 transition-colors group-hover:border-[#F3EFEA]">
                  {siteData.aboutStory.buttonText}
                </span>
                <ArrowRight size={18} className="transform group-hover:translate-x-2 transition-transform duration-300" />
              </motion.button>
            </Link>
          </motion.div>

          {/* Right Column: Double Image Stagger (Down & Slow Up) */}
          <div className="col-span-1 md:col-span-4 flex flex-col gap-12 lg:gap-24 mt-16 md:mt-0">
            <motion.div 
              style={{ y: yDown }}
              className="w-[90%] md:w-full ml-auto h-[400px] lg:h-[500px] relative overflow-hidden group"
            >
              <Image
                src={siteData.aboutStory.images.rightTop}
                alt="Story Secondary"
                fill
                unoptimized
                className="object-cover object-center transition-transform duration-[2s] group-hover:scale-105 grayscale hover:grayscale-0"
              />
            </motion.div>
            
            <motion.div 
              style={{ y: yUp2 }}
              className="w-[75%] h-[250px] lg:h-[350px] relative overflow-hidden group hidden md:block opacity-80 mix-blend-luminosity hover:mix-blend-normal hover:opacity-100 transition-all duration-700"
            >
              <Image
                src={siteData.aboutStory.images.rightBottom}
                alt="Story Tertiary"
                fill
                unoptimized
                className="object-cover object-top transition-transform duration-[2s] group-hover:scale-105"
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
