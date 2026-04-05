"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, ChevronDown, ChevronUp, ShoppingBag } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { siteData } from "@/config/siteData";

export default function ProductDetailPage({ params }: { params: { category: string, id: string } }) {
  const { category, id } = params;
  
  const [activeSize, setActiveSize] = useState<string | null>(null);
  const [openAccordion, setOpenAccordion] = useState<string | null>("description");

  // Fetch product data directly from configuration
  const categoryData = siteData.products[category as keyof typeof siteData.products];
  const product = categoryData && 'items' in categoryData 
    ? categoryData.items.find(item => item.id === parseInt(id))
    : null;

  if (!product) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-[#F3EFEA]">
         <p className="font-poppins uppercase tracking-[4px] text-xs">Product Not Found</p>
      </div>
    );
  }

  const sizes = siteData.products.shared.sizes;

  const accordions = [
    { id: "description", title: "Description", content: 'description' in categoryData ? categoryData.description : "An essential piece crafted with precision. Designed for the modern wardrobe." },
    { id: "details", title: "Details & Care", content: "Dry clean only. Do not tumble dry. Store in a cool, dry place away from direct sunlight to preserve the fabric's integrity." },
    { id: "shipping", title: "Shipping & Returns", content: "Complimentary express shipping on all domestic orders. Returns accepted within 14 days of delivery providing the tag remains attached." },
  ];

  return (
    <main className="relative w-full min-h-screen bg-[#F3EFEA] text-[#1F1F1F] font-poppins selection:bg-[#1F1F1F] selection:text-[#F3EFEA]">
      <Navbar />

      <section className="pt-32 pb-20 px-8 md:px-12 lg:px-16 max-w-[1600px] mx-auto min-h-[90vh]">
        
        {/* Breadcrumb Back Button */}
        <Link href={`/products${category === 'casual' ? '/casual-wear' : category === 'teens' ? '/teens-wear' : ''}`} className="inline-flex items-center gap-2 text-xs uppercase tracking-[3px] font-medium opacity-60 hover:opacity-100 transition-opacity mb-8 relative z-20">
          <ArrowLeft size={16} /> Back to Collection
        </Link>
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* ── LEFT: Sticky Image Display ─────────────────────────── */}
          <div className="w-full lg:w-1/2 relative lg:sticky lg:top-32 h-[60vh] lg:h-[80vh]">
            <motion.div 
              initial={{ opacity: 0, clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
              animate={{ opacity: 1, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
              className="relative w-full h-full bg-[#E8E2DC] rounded-[2rem] overflow-hidden"
            >
              <Image
                src={product.image}
                alt={product.name}
                fill
                unoptimized
                priority
                className={`object-cover ${product.pos} img-low-sat`}
              />
            </motion.div>
          </div>

          {/* ── RIGHT: Product Details ─────────────────────────────── */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center py-6 lg:py-12 lg:pr-12">
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <p className="font-poppins text-[10px] tracking-[4px] uppercase opacity-50 mb-4">{product.category}</p>
              <h1 className="font-aboreto text-4xl md:text-5xl lg:text-6xl uppercase tracking-[2px] leading-tight mb-6">
                {product.name}
              </h1>
              <p className="font-poppins text-lg md:text-xl font-medium tracking-[1px] mb-12">${product.price}</p>
            </motion.div>

            {/* Sizes */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-12"
            >
              <div className="flex justify-between items-center mb-4">
                <span className="font-poppins text-xs font-semibold uppercase tracking-[3px] opacity-70">Select Size</span>
                <span className="font-poppins text-xs font-medium uppercase tracking-[2px] opacity-50 underline cursor-pointer hover:text-black">Size Guide</span>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setActiveSize(size)}
                    className={`w-14 h-12 flex items-center justify-center font-poppins text-sm uppercase transition-all duration-300 border ${
                      activeSize === size
                        ? "bg-[#1F1F1F] text-[#F3EFEA] border-[#1F1F1F]"
                        : "bg-transparent text-[#1F1F1F] border-[#1F1F1F]/20 hover:border-[#1F1F1F]"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col gap-4 mb-16"
            >
              <button className="w-full h-16 bg-[#1F1F1F] text-[#F3EFEA] flex items-center justify-center gap-3 uppercase font-poppins text-xs tracking-[4px] font-semibold hover:bg-black transition-colors rounded-none relative overflow-hidden group">
                <span className="relative z-10">Add to Tote</span>
                <ShoppingBag size={14} className="relative z-10" />
                <div className="absolute top-0 right-0 w-full h-full bg-white/10 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-500 z-0"></div>
              </button>
            </motion.div>

            {/* Accordion Info */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="border-t border-[#1F1F1F]/10 pt-4"
            >
              {accordions.map((acc) => (
                <div key={acc.id} className="border-b border-[#1F1F1F]/10">
                  <button 
                    onClick={() => setOpenAccordion(openAccordion === acc.id ? null : acc.id)}
                    className="w-full flex items-center justify-between py-5 cursor-pointer text-left focus:outline-none"
                  >
                    <span className="font-poppins text-xs uppercase tracking-[3px] font-semibold">{acc.title}</span>
                    <span className="opacity-50">
                      {openAccordion === acc.id ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </span>
                  </button>
                  <motion.div 
                    initial={false}
                    animate={{ height: openAccordion === acc.id ? "auto" : 0, opacity: openAccordion === acc.id ? 1 : 0 }}
                    transition={{ duration: 0.4 }}
                    className="overflow-hidden"
                  >
                    <p className="font-imprima text-sm tracking-[1px] leading-relaxed opacity-70 pb-6 pr-6">
                      {acc.content}
                    </p>
                  </motion.div>
                </div>
              ))}
            </motion.div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
