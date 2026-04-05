"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { siteData } from "@/config/siteData";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(false);
  const router = useRouter();

  const handleAuth = () => {
    localStorage.setItem("mockAuth", "true");
    router.push("/");
  };

  const handleToggle = () => setIsLogin((prev) => !prev);

  return (
    <div className="relative w-full h-screen flex font-poppins text-[#1F1F1F] bg-[#F3EFEA] overflow-hidden">
      
      {/* ── LEFT PANEL: Form ──────────────────────────────────────────────────────── */}
      <div className="w-full lg:w-[45%] h-full flex flex-col relative z-10 px-8 py-10 md:px-16 lg:px-24">
        
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-auto"
        >
          <Link href="/" className="text-black font-jura font-bold tracking-[8px] text-2xl">
            AMMILY
          </Link>
        </motion.div>

        {/* Auth Container */}
        <div className="w-full max-w-[400px] mx-auto my-auto relative">
          
          {/* Header Typography */}
          <div className="mb-10 lg:mb-14">
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-xs font-poppins tracking-[4px] uppercase text-[#1F1F1F]/50 mb-4"
            >
              Step into the world of
            </motion.p>
            <AnimatePresence mode="wait">
              <motion.h1
                key={isLogin ? "login-title" : "signup-title"}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3 }}
                className="text-4xl md:text-5xl font-aboreto tracking-[2px] uppercase text-[#1F1F1F]"
              >
                {isLogin ? "Welcome Back" : "Join AMMILY"}
              </motion.h1>
            </AnimatePresence>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-4 font-imprima text-[#1F1F1F]/70 tracking-[1px] text-sm"
            >
              {isLogin 
                ? "Enter your details to access your curated wardrobe." 
                : "Create an account to explore timeless fashion and exclusive collections."}
            </motion.p>
          </div>

          {/* Form Area */}
          <div className="relative min-h-[360px]">
            <AnimatePresence mode="wait">
              {!isLogin ? (
                /* ── CREATE ACCOUNT FORM ── */
                <motion.div
                  key="signup"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
                  className="flex flex-col gap-6"
                >
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                    <label className="block text-[10px] font-semibold tracking-[4px] uppercase text-[#1F1F1F]/60 mb-2">Full Name</label>
                    <input type="text" className="w-full h-10 border-b border-[#1F1F1F]/20 bg-transparent px-0 text-sm outline-none focus:border-[#1F1F1F] transition-colors" />
                  </motion.div>

                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
                    <label className="block text-[10px] font-semibold tracking-[4px] uppercase text-[#1F1F1F]/60 mb-2">Email</label>
                    <input type="email" className="w-full h-10 border-b border-[#1F1F1F]/20 bg-transparent px-0 text-sm outline-none focus:border-[#1F1F1F] transition-colors" />
                  </motion.div>

                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                    <label className="block text-[10px] font-semibold tracking-[4px] uppercase text-[#1F1F1F]/60 mb-2">Password</label>
                    <input type="password" className="w-full h-10 border-b border-[#1F1F1F]/20 bg-transparent px-0 text-sm outline-none focus:border-[#1F1F1F] transition-colors" />
                  </motion.div>

                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} className="flex items-center gap-3 mt-2">
                    <input type="checkbox" id="terms" className="w-4 h-4 border border-[#1F1F1F] rounded-none accent-[#1F1F1F]" />
                    <label htmlFor="terms" className="text-xs font-medium tracking-[1px] text-[#1F1F1F]/70 cursor-pointer">I agree to Terms & Conditions</label>
                  </motion.div>

                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mt-4">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleAuth}
                      className="w-full bg-[#1F1F1F] text-[#F3EFEA] py-4 uppercase font-semibold tracking-[4px] text-xs hover:bg-black transition-colors"
                    >
                      Create Account
                    </motion.button>
                  </motion.div>
                </motion.div>
              ) : (
                /* ── LOGIN FORM ── */
                <motion.div
                  key="login"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
                  className="flex flex-col gap-6"
                >
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                    <label className="block text-[10px] font-semibold tracking-[4px] uppercase text-[#1F1F1F]/60 mb-2">Email</label>
                    <input type="email" className="w-full h-10 border-b border-[#1F1F1F]/20 bg-transparent px-0 text-sm outline-none focus:border-[#1F1F1F] transition-colors" />
                  </motion.div>

                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
                    <div className="flex justify-between items-end mb-2">
                      <label className="block text-[10px] font-semibold tracking-[4px] uppercase text-[#1F1F1F]/60">Password</label>
                      <button className="text-[10px] tracking-[2px] text-[#1F1F1F]/60 hover:text-[#1F1F1F] transition-colors">FORGOT?</button>
                    </div>
                    <input type="password" className="w-full h-10 border-b border-[#1F1F1F]/20 bg-transparent px-0 text-sm outline-none focus:border-[#1F1F1F] transition-colors" />
                  </motion.div>

                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-8">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleAuth}
                      className="w-full bg-[#1F1F1F] text-[#F3EFEA] py-4 uppercase font-semibold tracking-[4px] text-xs hover:bg-black transition-colors"
                    >
                      Sign In
                    </motion.button>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Persistent Footer (Google + Toggle) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-8 pt-8 border-t border-[#1F1F1F]/10 flex flex-col gap-6"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleAuth}
              className="w-full flex items-center justify-center border border-[#1F1F1F] py-3.5 hover:bg-[#1F1F1F] hover:text-[#F3EFEA] transition-colors group"
            >
              <div className="w-4 h-4 rounded-full border border-[#1F1F1F] group-hover:border-[#F3EFEA] flex items-center justify-center mr-3 font-semibold text-[10px] font-serif transition-colors">
                G
              </div>
              <span className="text-xs font-semibold tracking-[2px] uppercase">Continue with Google</span>
            </motion.button>

            <div className="text-center">
              <span className="text-xs text-[#1F1F1F]/60 tracking-[1px]">
                {!isLogin ? "Already have an account?" : "Don't have an account?"}
              </span>
              <button
                onClick={handleToggle}
                className="text-xs font-bold tracking-[2px] uppercase text-[#1F1F1F] ml-3 hover:opacity-70 transition-opacity"
              >
                {!isLogin ? "Log In" : "Sign up"}
              </button>
            </div>
          </motion.div>

        </div>
        
        {/* Blank spacer for flex balance */}
        <div className="mt-auto"></div>
      </div>

      {/* ── RIGHT PANEL: Image ────────────────────────────────────────────────────── */}
      <motion.div 
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
        className="hidden lg:block lg:w-[55%] h-full relative"
      >
        <Image
          src={siteData.auth.editorialImage}
          alt="Fashion Models"
          fill
          className="object-cover object-[center_30%]"
          quality={100}
          unoptimized
          priority
        />
        {/* Subtle overlay for richness */}
        <div className="absolute inset-0 bg-black/10 mix-blend-overlay"></div>
        
        {/* Floating Brand Element */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="absolute bottom-12 right-12 text-white text-right mix-blend-difference"
        >
          <p className="font-aboreto text-3xl tracking-[12px] uppercase opacity-90">{siteData.auth.floatingText}</p>
        </motion.div>
      </motion.div>

    </div>
  );
}
