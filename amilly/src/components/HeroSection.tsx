"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { ShoppingBag } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HeroSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax effects
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section 
      id="home" 
      ref={containerRef}
      className="relative w-full h-[100vh] flex items-center justify-start overflow-hidden"
    >
      {/* Background Image Container with Parallax */}
      <motion.div 
        style={{ y: imageY }}
        className="absolute inset-0 z-0 h-[120%]"
      >
        <Image
          src="/images/PAGE 1 BACKGORUND.png"
          alt="Ammily Hero Background"
          fill
          unoptimized
          className="object-cover object-top img-low-sat"
          priority
        />
      </motion.div>

      {/* Content Container */}
      <motion.div 
        style={{ y: textY, opacity }}
        className="relative z-10 w-full px-8 md:px-[5%] mt-32 h-full flex flex-col justify-center"
      >
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="max-w-md pb-20"
        >
          <h1 className="font-junge text-5xl md:text-[5rem] leading-[1.1] text-[#111] tracking-widest mb-10 w-min">
            STYLE
            <br />
            ISN&apos;T
            <br />
            WORN.
            <br />
            IT&apos;S
            <br />
            OWNED.
          </h1>
          
          <p className="font-imprima text-[15px] md:text-[17px] tracking-[0.2em] uppercase text-[#333] mb-12 leading-relaxed">
            Dress bold. <br /> Live louder.
          </p>

          <button className="flex items-center justify-center gap-3 border-[1.5px] border-[#222] text-[#111] px-6 py-2.5 rounded-lg hover:bg-[#222] hover:text-[#eee] transition-all uppercase tracking-[3px] text-xs md:text-sm font-poppins font-medium w-auto inline-flex">
            <ShoppingBag size={16} strokeWidth={1.5} />
            Shop
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
