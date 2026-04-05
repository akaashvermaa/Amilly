"use client";
import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

import { siteData } from "@/config/siteData";

const products = siteData.newArrivals.cards;

export default function NewArrivals() {
  return (
    <section id="products" className="relative w-full min-h-screen py-32 px-8 md:px-16 flex flex-col items-center justify-center bg-[#F3EFEA]">
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 opacity-[0.15]">
        <Image 
          src={siteData.newArrivals.backgroundImage} 
          alt="Bg" 
          fill 
          unoptimized
          className="object-cover object-top grayscale" 
        />
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto flex flex-col items-center">
        
        {/* Massive Title */}
        <div className="text-center mb-24 md:mb-32">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="font-poppins text-xs font-semibold tracking-[6px] uppercase opacity-50 mb-6 text-[#1F1F1F]"
          >
            Curated Selection
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-aboreto text-5xl md:text-7xl lg:text-[6rem] leading-[1.1] uppercase tracking-[4px] text-[#1F1F1F]"
          >
            {siteData.newArrivals.titleLine1} <br />
            {siteData.newArrivals.titleLine2}
          </motion.h2>
        </div>

        {/* Asymmetrical Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 w-full items-start">
          {products.map((prod, idx) => {
            const yOffset = idx === 1 ? "md:mt-32" : idx === 2 ? "md:mt-16" : "md:mt-0";

            const card = (
              <motion.div
                key={prod.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1, delay: idx * 0.2, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
                className={`group cursor-pointer relative w-full aspect-[4/5] overflow-hidden rounded-[2rem] bg-[#E8E2DC] shadow-lg ${yOffset}`}
              >
                <Image
                  src={prod.image}
                  alt={`New Arrival ${prod.id}`}
                  fill
                  unoptimized
                  className="object-cover object-top transition-transform duration-[1.5s] group-hover:scale-105"
                />
                
                {/* Floating Glass Hover Overlay */}
                <div className="absolute inset-0 bg-[#1F1F1F]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end items-center pb-12 z-20">
                  <span className="backdrop-blur-md bg-white/10 text-white border border-white/30 px-8 py-3 rounded-full text-xs tracking-[4px] uppercase font-poppins flex items-center gap-3 group-hover:-translate-y-4 transition-all duration-500 hover:bg-white hover:text-black">
                    Explore <ArrowRight size={16} />
                  </span>
                </div>
              </motion.div>
            );
            return prod.link ? (
              <Link key={prod.id} href={prod.link} className="block w-full">{card}</Link>
            ) : (
              <div key={prod.id} className="w-full">{card}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
