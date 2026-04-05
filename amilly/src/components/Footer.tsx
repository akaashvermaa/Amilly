"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="w-full bg-[#111] text-[#d0cdc8] font-poppins"
    >
      {/* Top divider line */}
      <div className="w-full h-[1px] bg-[#d0cdc8]/10" />

      <div className="max-w-7xl mx-auto px-8 md:px-12 py-14 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">

        {/* Brand */}
        <div className="flex flex-col gap-4">
          <span className="font-jura font-bold text-2xl tracking-[6px] text-white">AMMILY</span>
          <p className="font-imprima text-sm tracking-[1px] text-[#888] leading-relaxed max-w-[220px]">
            Style isn't worn. It's owned. Timeless fashion for the bold.
          </p>
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-5">
          <h3 className="text-xs font-semibold tracking-[5px] uppercase text-[#aaa]">Contact</h3>
          <div className="flex flex-col gap-3">
            <a
              href="mailto:hello@ammily.com"
              className="flex items-center gap-2.5 text-sm text-[#ccc] hover:text-white transition-colors group"
            >
              <Mail size={14} className="opacity-60 group-hover:opacity-100 transition-opacity" />
              hello@ammily.com
              <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-60 transition-opacity" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2.5 text-sm text-[#ccc] hover:text-white transition-colors group"
            >
              <span className="text-xs font-bold opacity-60 group-hover:opacity-100 transition-opacity font-serif">IG</span>
              @ammily.official
              <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-60 transition-opacity" />
            </a>
          </div>
        </div>

        {/* Legal */}
        <div className="flex flex-col gap-5">
          <h3 className="text-xs font-semibold tracking-[5px] uppercase text-[#aaa]">Legal</h3>
          <div className="flex flex-col gap-3 text-sm text-[#888]">
            <Link href="#" className="hover:text-white transition-colors tracking-[1px]">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors tracking-[1px]">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition-colors tracking-[1px]">Return & Refund Policy</Link>
          </div>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#d0cdc8]/10 px-8 md:px-12 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="text-xs text-[#555] tracking-[2px]">
          © {year} AMMILY. All rights reserved.
        </p>
        <p className="text-xs text-[#444] tracking-[1px]">
          Designed &amp; crafted with care. All content and imagery protected under copyright law.
        </p>
      </div>
    </motion.footer>
  );
}
