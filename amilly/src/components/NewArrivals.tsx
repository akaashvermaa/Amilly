"use client";
import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const products = [
  { id: 1, image: "/images/Feature 1.jpg", link: "/products/casual-wear" },
  { id: 2, image: "/images/Featured.jpg", link: "/products" },
  { id: 3, image: "/images/Feature 2 (1).jpg", link: "/products/teens-wear" },
];

export default function NewArrivals() {
  return (
    <section id="products" className="relative w-full min-h-screen py-24 px-8 md:px-16 flex flex-col items-center justify-center">
      {/* Background with slight gradient/texture if needed per design, assuming inherited from body or absolute image */}
      <div className="absolute inset-0 z-0 opacity-40">
        <Image 
          src="/images/Page 2 BACKGROUND.png" 
          alt="Bg" 
          fill 
          unoptimized
          className="object-cover img-low-sat" 
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="font-junge text-3xl md:text-5xl uppercase tracking-[0.3em] text-center mb-16 text-[#1a1a1a]"
        >
          FEATURING <br />
          NEW ARRIVALS
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 w-full">
          {products.map((prod, idx) => {
            const card = (
              <motion.div
                key={prod.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                className="group cursor-pointer flex flex-col transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl rounded-[2.5rem] bg-transparent"
              >
                <div className="relative w-full aspect-[4/5] rounded-[2.5rem] overflow-hidden mb-0 bg-[#d6d3d1]/20">
                  <Image
                    src={prod.image}
                    alt={`New Arrival ${prod.id}`}
                    fill
                    unoptimized
                    className="object-cover img-low-sat transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex justify-between items-center w-full px-6 py-4 bg-background/80 backdrop-blur-md rounded-b-[2rem] -mt-12 z-20 relative transition-colors group-hover:bg-background">
                  <span className="font-poppins uppercase tracking-widest text-xs font-semibold text-[#1a1a1a]">Explore</span>
                  <ArrowRight size={18} className="text-[#1a1a1a] transition-transform duration-300 group-hover:translate-x-2" />
                </div>
              </motion.div>
            );
            return prod.link ? (
              <Link key={prod.id} href={prod.link}>{card}</Link>
            ) : (
              <div key={prod.id}>{card}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
