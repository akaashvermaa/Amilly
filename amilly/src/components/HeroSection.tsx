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

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative w-full h-[100vh] flex items-center justify-start overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <motion.div
        style={{ y: imageY }}
        className="absolute inset-0 z-0 h-[120%] transform-gpu will-change-transform"
      >
        <Image
          src={siteData.hero.backgroundImage}
          alt="Ammily Hero Background"
          fill
          unoptimized
          className="object-cover object-top img-low-sat"
          priority
        />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 w-full px-8 md:px-[5%] mt-32 h-full flex flex-col justify-center"
      >
        <div className="max-w-md pb-20">
          {/* Staggered word-by-word headline */}
          <motion.h1
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="font-aboreto text-5xl md:text-[5rem] leading-[1.15] text-[#111] tracking-widest mb-10 flex flex-col perspective-[800px]"
          >
            {headlineWords.map((word, i) => (
              <motion.span key={i} variants={wordVariants} className="block">
                {word}
              </motion.span>
            ))}
          </motion.h1>

          {/* Subtitle fade-up */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.2, ease: "easeOut" }}
            className="font-imprima text-[15px] md:text-[17px] tracking-[0.2em] uppercase text-[#333] mb-12 leading-relaxed"
          >
            {siteData.hero.subtitle.split("\n").map((line, i) => (
              <React.Fragment key={i}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </motion.p>

          {/* Button with scale spring */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.5, ease: "easeOut" }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center justify-center gap-3 border-[1.5px] border-[#222] text-[#111] px-6 py-2.5 rounded-lg hover:bg-[#222] hover:text-[#eee] transition-colors uppercase tracking-[3px] text-xs md:text-sm font-poppins font-medium"
          >
            <ShoppingBag size={16} strokeWidth={1.5} />
            Shop
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}

