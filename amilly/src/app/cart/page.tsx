"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Trash2, Lock, ArrowRight, Plus, Minus } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useCart } from "@/hooks/useCart";

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, getTotal, isLoaded } = useCart();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !isLoaded) {
    return (
      <main className="relative w-full min-h-screen font-poppins text-[#1F1F1F] bg-[#F3EFEA]">
        <Navbar />
        <section className="pt-36 pb-20 px-8 md:px-16 max-w-[1400px] mx-auto min-h-[85vh] flex items-center justify-center">
          <p className="text-center text-sm opacity-50">Loading cart...</p>
        </section>
        <Footer />
      </main>
    );
  }

  const subtotal = getTotal();
  const shipping = cartItems.length > 0 ? 25 : 0;
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
            {cartItems.length === 0 ? "Your cart is empty" : `${cartItems.reduce((sum, item) => sum + item.quantity, 0)} Items`}
          </motion.p>
        </div>

        {cartItems.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center justify-center min-h-[50vh] gap-6"
          >
            <p className="text-center text-sm opacity-50">No items in your cart yet.</p>
            <a href="/products" className="text-xs uppercase tracking-[3px] border border-[#1F1F1F] px-6 py-3 rounded-full hover:bg-[#1F1F1F] hover:text-[#F3EFEA] transition-all">
              Continue Shopping
            </a>
          </motion.div>
        ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-24 items-start">

          {/* ── LEFT: Order Summary ─────────────────────────────────────────── */}
          <div className="lg:col-span-7 flex flex-col gap-10">
            {cartItems.map((item, idx) => (
              <motion.div
                key={`${item.id}-${item.size}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.15 }}
                className="flex gap-6 pb-10 border-b border-[#1F1F1F]/10 group"
              >
                {/* Image */}
                <div className="relative w-24 h-36 md:w-32 md:h-44 bg-[#E8E2DC] rounded-none overflow-hidden shrink-0">
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
                      <p className="font-poppins font-medium">${(item.price * item.quantity).toFixed(2)}</p>
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
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}
                            className="p-1 hover:bg-[#E8E2DC] rounded transition-colors"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="text-sm font-medium w-6 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
                            className="p-1 hover:bg-[#E8E2DC] rounded transition-colors"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 mt-auto">
                    <button className="text-xs uppercase tracking-[2px] border-b border-[#1F1F1F]/30 pb-0.5 hover:border-[#1F1F1F] opacity-70 hover:opacity-100 transition-all">
                      Move to Wishlist
                    </button>
                    <button
                      onClick={() => removeFromCart(item.id, item.size)}
                      className="opacity-40 hover:opacity-100 transition-opacity"
                    >
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
        )}
      </section>

      <Footer />
    </main>
  );
}
