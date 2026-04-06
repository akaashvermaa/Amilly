"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { ShoppingBag } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { siteData } from "@/config/siteData";

const headlineWords = siteData.hero.headlineWords;

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: 60, rotateX: -30 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

export default function HeroSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative w-full h-screen flex items-center justify-start overflow-hidden bg-[#111]"
    >
      {/* Background Image with Deep Parallax */}
      <motion.div
        style={{ y: imageY }}
        className="parallax-layer absolute inset-0 z-0 h-[120%] will-change-transform"
      >
        <Image
          src={siteData.hero.backgroundImage}
          alt="Ammily Hero Background"
          fill
          quality={90}
          className="object-cover object-top opacity-90 transition-opacity duration-1000"
          priority
        />
        {/* Cinematic Vignette Overlay (Reduced Blend Modes for 60fps Performance) */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#111]/70 via-[#111]/20 to-transparent"></div>
        <div className="absolute inset-0 bg-black/20"></div>
      </motion.div>

      {/* Main Content */}
      <motion.div
        style={{ y: textY, opacity }}
        className="motion-safe relative z-10 w-full px-8 md:px-16 lg:px-24 h-full flex flex-col justify-center will-change-transform"
      >
        <div className="max-w-2xl mt-20">
          
          {/* Eyebrow / Label */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="h-[1px] w-12 bg-[#1F1F1F]"></div>
            <span className="font-poppins text-xs font-semibold tracking-[6px] uppercase text-[#1F1F1F]">
              Collection MMXXVI
            </span>
          </motion.div>

          {/* Staggered Monumental Headline */}
          <motion.h1
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="font-aboreto text-6xl md:text-[6.5rem] leading-[1] text-[#1F1F1F] tracking-[2px] md:tracking-[4px] mb-12 flex flex-col perspective-[1000px]"
          >
            {headlineWords.map((word, i) => (
              <motion.span 
                key={i} 
                variants={wordVariants} 
                className={`block ${i % 2 !== 0 ? "text-[#1F1F1F]/70 italic font-medium ml-4 md:ml-12" : "font-bold"}`}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
            className="font-imprima text-lg md:text-xl tracking-[4px] uppercase text-[#1F1F1F]/80 mb-14 leading-relaxed border-l border-[#1F1F1F]/20 pl-6"
          >
            {siteData.hero.subtitle.split("\n").map((line, i) => (
              <React.Fragment key={i}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </motion.p>

          {/* Luxury Action Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const el = document.getElementById("products");
              el?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group relative flex items-center justify-center gap-4 bg-[#1F1F1F] text-[#F3EFEA] px-10 py-5 rounded-full overflow-hidden hover:bg-[#111] transition-colors"
          >
            <span className="font-poppins text-xs tracking-[4px] uppercase font-medium relative z-10 w-fit">
              Discover Form
            </span>
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform relative z-10 cursor-pointer">
              <ShoppingBag size={14} className="text-[#F3EFEA]" />
            </div>
            {/* Button Shine Effect */}
            <div className="absolute inset-0 -translate-x-[150%] bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out"></div>
          </motion.button>
        </div>
      </motion.div>

      {/* Cinematic Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-20 mix-blend-difference opacity-50 text-white"
      >
        <span className="font-poppins text-[10px] tracking-[4px] uppercase rotate-90 mb-6">Scroll</span>
        <div className="w-[1px] h-12 bg-white/30 overflow-hidden relative">
          <motion.div 
            animate={{ y: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="w-full h-1/2 bg-white"
          />
        </div>
      </motion.div>
    </section>
  );
}

