"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Trash2, Lock, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Mock Data for aesthetics
const mockCartOptions = [
  {
    id: 1,
    name: "Classic Tailored Suit",
    category: "Two-Piece",
    price: 120,
    size: "M",
    image: "/images/PRODUCT (1).jpg",
    pos: "object-top"
  },
  {
    id: 2,
    name: "Straight Leg Trousers",
    category: "Trousers",
    price: 130,
    size: "S",
    image: "/images/PRODUCT (2).jpg",
    pos: "object-top"
  }
];

export default function CartPage() {
  const subtotal = mockCartOptions.reduce((acc, curr) => acc + curr.price, 0);
  const shipping = 25;
  const total = subtotal + shipping;

  return (
    <main className="relative w-full min-h-screen font-poppins text-[#1F1F1F] bg-[#F3EFEA]">
      <Navbar />

      <section className="pt-36 pb-20 px-8 md:px-16 max-w-[1400px] mx-auto min-h-[85vh]">
        
        {/* Page Header */}
        <div className="mb-14">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-aboreto text-4xl md:text-5xl uppercase tracking-[4px] mb-2"
          >
            Your Selection
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-imprima text-sm tracking-[2px] opacity-60 uppercase"
          >
            2 Items Reserved
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* ── LEFT: Order Summary ─────────────────────────────────────────── */}
          <div className="lg:col-span-7 flex flex-col gap-10">
            {mockCartOptions.map((item, idx) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.15 }}
                className="flex gap-6 pb-10 border-b border-[#1F1F1F]/10 group"
              >
                {/* Image */}
                <div className="relative w-32 h-44 bg-[#E8E2DC] rounded-none overflow-hidden shrink-0">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    unoptimized
                    className={`object-cover ${item.pos} grayscale-[30%] group-hover:grayscale-0 transition-all duration-700`}
                  />
                </div>
                
                {/* Item Details */}
                <div className="flex flex-col justify-between flex-1 py-1">
                  <div>
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-imprima text-xl tracking-[1px] font-semibold">{item.name}</h3>
                      <p className="font-poppins font-medium">${item.price}</p>
                    </div>
                    <p className="text-xs uppercase tracking-[2px] opacity-50 mb-4">{item.category}</p>
                    
                    <div className="flex items-center gap-4">
                      <div className="flex flex-col gap-1">
                        <span className="text-[10px] uppercase tracking-[2px] opacity-40">Size</span>
                        <span className="text-sm font-medium">{item.size}</span>
                      </div>
                      <div className="w-[1px] h-6 bg-[#1F1F1F]/20 mx-2"></div>
                      <div className="flex flex-col gap-1">
                        <span className="text-[10px] uppercase tracking-[2px] opacity-40">Qty</span>
                        <span className="text-sm font-medium">1</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 mt-auto">
                    <button className="text-xs uppercase tracking-[2px] border-b border-[#1F1F1F]/30 pb-0.5 hover:border-[#1F1F1F] opacity-70 hover:opacity-100 transition-all">
                      Move to Wishlist
                    </button>
                    <button className="opacity-40 hover:opacity-100 transition-opacity">
                      <Trash2 size={16} strokeWidth={1.5} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* ── RIGHT: Payment / Checkout Form ────────────────────────────── */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-5 bg-[#E8E2DC] p-8 md:p-12 rounded-2xl flex flex-col relative overflow-hidden shadow-2xl shadow-[#E8E2DC]/50"
          >
            {/* Ambient Graphic */}
            <div className="absolute top-0 right-0 p-8 opacity-10 font-aboreto text-6xl pointer-events-none select-none">A.</div>

            <h3 className="font-aboreto text-2xl uppercase tracking-[3px] mb-8 relative z-10">Summary</h3>

            {/* Price lines */}
            <div className="flex flex-col gap-4 text-sm font-imprima tracking-[1px] mb-8 relative z-10">
              <div className="flex justify-between">
                <span className="opacity-70">Subtotal</span>
                <span>${subtotal}</span>
              </div>
              <div className="flex justify-between">
                <span className="opacity-70">Estimated Shipping</span>
                <span>${shipping}</span>
              </div>
              <div className="flex justify-between">
                <span className="opacity-70">Taxes</span>
                <span className="text-xs opacity-50 relative top-1">Calculated at checkout</span>
              </div>
            </div>

            <div className="w-full h-[1px] bg-[#1F1F1F]/10 mb-6 relative z-10"></div>

            <div className="flex justify-between text-xl font-aboreto font-semibold uppercase tracking-[2px] mb-12 relative z-10">
              <span>Total</span>
              <span>${total}</span>
            </div>

            {/* Mock Fields to enhance visual complexity */}
            <div className="flex flex-col gap-4 mb-10 relative z-10">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Promo Code" 
                  className="w-full bg-transparent border-b border-[#1F1F1F]/30 py-3 text-xs tracking-[2px] uppercase outline-none focus:border-[#1F1F1F] transition-colors"
                />
                <button className="absolute right-0 top-3 text-xs uppercase tracking-[2px] font-semibold hover:opacity-70 transition-opacity">Apply</button>
              </div>
            </div>

            {/* Checkout Button */}
            <button className="w-full bg-[#1F1F1F] text-[#F3EFEA] py-5 rounded-full flex items-center justify-center gap-3 relative overflow-hidden group mb-4">
               <span className="font-poppins text-xs uppercase tracking-[4px] relative z-20 transition-transform group-hover:-translate-x-2">Proceed to Checkout</span>
               <ArrowRight size={14} className="relative z-20 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
               <div className="absolute inset-0 bg-[#000] scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-in-out z-10"></div>
            </button>

            <div className="flex items-center justify-center gap-2 text-[10px] uppercase tracking-[2px] opacity-40 mt-4">
              <Lock size={12} />
              <span>Secure Encrypted Checkout</span>
            </div>

          </motion.div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
