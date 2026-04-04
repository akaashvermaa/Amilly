"use client";
import React from "react";
import { ArrowRight, ShoppingBag } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-8 lg:px-12 py-8 grid grid-cols-3 items-center text-foreground font-poppins text-sm uppercase tracking-[4px] bg-transparent transition-all">
      
      {/* Left: Logo */}
      <div className="text-2xl font-jura font-bold tracking-[6px] text-left">AMMILY</div>
      
      {/* Center: Navigation Links */}
      <div className="hidden md:flex justify-between w-[450px] lg:w-[550px] font-medium text-[#2a2a2a] tracking-[4px] mx-auto">
        <a href="#home" className="hover:text-black transition-colors pr-1">Home</a>
        <a href="#products" className="hover:text-black transition-colors pr-1">Products</a>
        <a href="#collaborate" className="hover:text-black transition-colors pr-1">Collaborate</a>
        <a href="#more" className="hover:text-black transition-colors pr-1">More</a>
      </div>
      
      {/* Right: CTA Button */}
      <div className="flex justify-end">
        <button className="flex items-center gap-3 border border-foreground/30 px-6 py-2 rounded-full hover:bg-foreground hover:text-background transition-all tracking-[4px]">
          <span>MORE</span>
          <ArrowRight size={16} />
        </button>
      </div>

    </nav>
  );
}
