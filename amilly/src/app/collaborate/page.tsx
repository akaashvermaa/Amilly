"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// ─── Data ────────────────────────────────────────────────────────────────────

const collaborationTypes = [
  {
    id: 1,
    title: "Brand Ambassadors",
    desc: "For those who embody the AMMILY lifestyle. We partner with digital creators to showcase our timeless pieces in modern, everyday contexts.",
    image: "/images/Feature 1.jpg",
    imgPos: "object-top",
  },
  {
    id: 2,
    title: "Editorial Stylists",
    desc: "We provide exclusive access to upcoming collections for fashion stylists pulling for high-end editorials, red carpets, and creative magazines.",
    image: "/images/BOY FEATURING.jpg",
    imgPos: "object-center",
  },
  {
    id: 3,
    title: "Creative Photographers",
    desc: "Visionaries who capture elegance. We collaborate on unique campaign shoots, lookbooks, and visual storytelling that align with our brand identity.",
    image: "/images/Feature 2 (1).jpg",
    imgPos: "object-top",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function CollaboratePage() {
  const [formData, setFormData] = useState({ name: "", email: "", social: "", role: "ambassador" });

  return (
    <main className="relative w-full min-h-screen bg-[#F3EFEA] text-[#1F1F1F] font-poppins overflow-hidden">
      <Navbar />

      {/* ── Hero Section ───────────────────────────── */}
      <section className="relative w-full pt-44 pb-20 px-8 md:px-16 lg:px-24 flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
          className="max-w-4xl"
        >
          <p className="text-xs font-semibold tracking-[6px] uppercase opacity-50 mb-6">Partnerships</p>
          <h1 className="font-aboreto text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.1] uppercase tracking-[4px] mb-8">
            Become a Muse
          </h1>
          <p className="font-imprima text-lg md:text-xl opacity-70 tracking-[1px] leading-relaxed max-w-2xl mx-auto">
            We are constantly seeking creative visionaries to join our narrative. 
            Whether you photograph elegance, style it, or wear it effortlessly—we want to create with you.
          </p>
        </motion.div>
      </section>

      {/* ── Highlighted Roles (Cards) ──────────────── */}
      <section className="px-8 md:px-16 max-w-7xl mx-auto py-16 flex flex-col gap-24 md:gap-32">
        {collaborationTypes.map((item, idx) => {
          const isEven = idx % 2 !== 0;
          return (
            <div 
              key={item.id} 
              className={`flex flex-col ${isEven ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-10 md:gap-20`}
            >
              {/* Image side */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
                whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
                className="w-full md:w-1/2"
              >
                <div className="relative w-full aspect-[4/5] overflow-hidden rounded-[2rem] bg-[#E8E2DC]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    unoptimized
                    className={`object-cover ${item.imgPos} transition-transform duration-[1.5s] hover:scale-105`}
                  />
                </div>
              </motion.div>

              {/* Text side */}
              <motion.div 
                initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
                className="w-full md:w-1/2 flex flex-col"
              >
                <span className="text-xs font-semibold tracking-[4px] uppercase opacity-40 mb-4">
                  0{item.id} // Role
                </span>
                <h2 className="font-junge text-3xl md:text-5xl uppercase tracking-[2px] mb-6">
                  {item.title}
                </h2>
                <p className="font-imprima text-base md:text-lg opacity-70 tracking-[1px] leading-relaxed max-w-md">
                  {item.desc}
                </p>
                <div className="mt-10">
                  <span className="inline-block border-b border-[#1F1F1F] pb-1 text-xs uppercase tracking-[3px] font-medium cursor-pointer hover:opacity-50 transition-opacity">
                    Apply Below
                  </span>
                </div>
              </motion.div>
            </div>
          );
        })}
      </section>

      {/* ── Application Form ───────────────────────── */}
      <section className="w-full bg-[#E9E3DD] py-24 px-8 md:px-16 mt-20">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-xl mx-auto bg-[#F7F4F1] p-10 md:p-14 rounded-3xl shadow-xl flex flex-col"
        >
          <div className="text-center mb-10">
            <h3 className="font-aboreto text-4xl tracking-[2px] uppercase mb-3">Initiate Contact</h3>
            <p className="font-imprima text-base opacity-70 tracking-[1px]">Introduce yourself and submit your portfolio.</p>
          </div>

          <form className="flex flex-col gap-8" onSubmit={(e) => e.preventDefault()}>
            
            {/* Role Select */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold tracking-[2px] uppercase opacity-70 ml-1">Area of Interest</label>
              <select 
                className="w-full h-11 border-b border-[#1F1F1F]/20 bg-transparent px-1 text-base outline-none focus:border-[#1F1F1F] transition-colors uppercase tracking-[1px] font-medium appearance-none cursor-pointer"
                value={formData.role}
                onChange={(e) => setFormData({...formData, role: e.target.value})}
              >
                <option value="ambassador">Brand Ambassador</option>
                <option value="stylist">Editorial Stylist</option>
                <option value="photographer">Photographer</option>
                <option value="other">Other Proposal</option>
              </select>
            </div>

            {/* Name */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold tracking-[2px] uppercase opacity-70 ml-1">Full Name / Agency</label>
              <input 
                type="text" 
                className="w-full h-10 border-b border-[#1F1F1F]/20 bg-transparent px-1 text-base outline-none focus:border-[#1F1F1F] transition-colors" 
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold tracking-[2px] uppercase opacity-70 ml-1">Email Address</label>
              <input 
                type="email" 
                className="w-full h-10 border-b border-[#1F1F1F]/20 bg-transparent px-1 text-base outline-none focus:border-[#1F1F1F] transition-colors" 
              />
            </div>

            {/* Social / Portfolio */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold tracking-[2px] uppercase opacity-70 ml-1">Portfolio or Instagram Link</label>
              <input 
                type="url" 
                className="w-full h-10 border-b border-[#1F1F1F]/20 bg-transparent px-1 text-base outline-none focus:border-[#1F1F1F] transition-colors" 
                placeholder="https://"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-6 w-full bg-[#1F1F1F] text-[#F3EFEA] py-4 uppercase font-semibold tracking-[4px] text-xs hover:bg-black transition-colors rounded-full"
            >
              Submit Application
            </motion.button>

          </form>
        </motion.div>
      </section>

      {/* ── Footer ─────────────────────────────────── */}
      <div className="bg-[#111]">
        <Footer />
      </div>

    </main>
  );
}
