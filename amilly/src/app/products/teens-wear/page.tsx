"use client";

import React, { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { SlidersHorizontal, ChevronDown, X } from "lucide-react";

import { siteData } from "@/config/siteData";

const categories = siteData.products.teens.categories;
const products = siteData.products.teens.items;

const sizes = siteData.products.shared.sizes;
const sortOptions = siteData.products.shared.sortOptions;

// ─── Product Card ─────────────────────────────────────────────────────────────

function ProductCard({ product, idx }: { product: typeof products[0]; idx: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: (idx % 8) * 0.07 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group cursor-pointer flex flex-col"
    >
      {/* Image */}
      <div className="relative w-full aspect-[3/4] overflow-hidden rounded-xl bg-[#F7F4F1]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          unoptimized
          className={`object-cover ${product.pos} transition-transform duration-700 ${hovered ? "scale-108" : "scale-100"}`}
          style={{ transform: hovered ? "scale(1.06)" : "scale(1)" }}
        />
        {/* Hover overlay */}
        <motion.div
          initial={false}
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-black/10 flex items-end justify-center pb-5"
        >
          <motion.button
            initial={{ y: 12, opacity: 0 }}
            animate={{ y: hovered ? 0 : 12, opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white text-[#1F1F1F] text-xs font-poppins tracking-[3px] uppercase px-6 py-2.5 rounded-full hover:bg-[#1F1F1F] hover:text-white transition-colors"
          >
            Quick View
          </motion.button>
        </motion.div>
      </div>

      {/* Info */}
      <div className="mt-4 px-1 flex flex-col gap-1">
        <p className="font-imprima text-sm tracking-[1px] text-[#1F1F1F] leading-tight opacity-90">{product.name}</p>
        <p className="font-poppins text-sm font-semibold text-[#1F1F1F]">${product.price}</p>
      </div>
    </motion.div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function TeensWearPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeSize, setActiveSize]         = useState<string | null>(null);
  const [sortBy, setSortBy]                 = useState("Newest");
  const [showSort, setShowSort]             = useState(false);
  const [showFilters, setShowFilters]       = useState(false);
  const [visibleCount, setVisibleCount]     = useState(8);

  // Filter + sort
  let filtered = products.filter(p =>
    activeCategory === "All" || p.category === activeCategory
  );
  if (activeSize) filtered = filtered; // size filter placeholder
  if (sortBy === "Price: Low → High")  filtered = [...filtered].sort((a, b) => a.price - b.price);
  if (sortBy === "Price: High → Low")  filtered = [...filtered].sort((a, b) => b.price - a.price);

  const visible = filtered.slice(0, visibleCount);

  return (
    <main 
      className="relative w-full min-h-screen font-poppins text-[#1F1F1F]"
      style={{ background: "linear-gradient(180deg, #F3EFEA 0%, #E8E2DC 100%)" }}
    >
      <Navbar />

      {/* ── Category Header ─────────────────────────── */}
      <section className="pt-36 pb-10 px-8 md:px-16 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
        >
          <p className="font-poppins text-xs tracking-[6px] uppercase opacity-50 mb-3 text-[#1F1F1F]">{siteData.products.teens.subtitle}</p>
          <h1 className="font-aboreto text-4xl md:text-6xl tracking-[6px] uppercase mb-4 text-[#1F1F1F]">
            {activeCategory === "All" ? siteData.products.teens.title : activeCategory}
          </h1>
          <p className="font-imprima text-base md:text-lg opacity-70 tracking-[1px] max-w-xl leading-relaxed text-[#1F1F1F]">
            {siteData.products.teens.description}
          </p>
        </motion.div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-3 mt-8">
          {categories.map(cat => (
            <motion.button
              key={cat}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => { setActiveCategory(cat); setVisibleCount(8); }}
              className={`px-5 py-2 rounded-full text-xs tracking-[3px] uppercase font-medium transition-all duration-300 border ${
                activeCategory === cat
                  ? "bg-[#1F1F1F] text-[#F3EFEA] border-[#1F1F1F]"
                  : "bg-transparent text-[#1F1F1F]/70 border-[#D6CEC6] hover:border-[#1F1F1F] hover:text-[#1F1F1F]"
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>
      </section>

      {/* ── Filter + Sort Bar ───────────────────────── */}
      <section className="px-8 md:px-16 max-w-7xl mx-auto border-t border-[#D6CEC6] py-5 flex flex-wrap items-center justify-between gap-4">

        {/* Left: Filters */}
        <div className="flex items-center gap-4 flex-wrap">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 text-xs tracking-[3px] uppercase font-medium text-[#1F1F1F]/70 hover:text-[#1F1F1F] transition-colors"
          >
            <SlidersHorizontal size={14} />
            {showFilters ? "Hide Filters" : "Filters"}
          </button>

          {/* Size pills (shown when filters open) */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="flex items-center gap-2 flex-wrap"
              >
                <span className="text-xs text-[#1F1F1F]/50 tracking-[2px] uppercase">Size:</span>
                {sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setActiveSize(activeSize === size ? null : size)}
                    className={`w-8 h-8 text-xs rounded-full border transition-all ${
                      activeSize === size
                        ? "bg-[#1F1F1F] text-white border-[#1F1F1F]"
                        : "border-[#D6CEC6] text-[#1F1F1F]/70 hover:border-[#1F1F1F] hover:text-[#1F1F1F]"
                    }`}
                  >
                    {size}
                  </button>
                ))}
                {activeSize && (
                  <button onClick={() => setActiveSize(null)} className="text-[#1F1F1F]/50 hover:text-[#1F1F1F]">
                    <X size={14} />
                  </button>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Right: Sort + count */}
        <div className="flex items-center gap-6">
          <span className="text-xs text-[#1F1F1F]/40 tracking-[2px]">{filtered.length} items</span>

          <div className="relative">
            <button
              onClick={() => setShowSort(!showSort)}
              className="flex items-center gap-2 text-xs tracking-[3px] uppercase font-medium text-[#1F1F1F]/70 hover:text-[#1F1F1F] transition-colors"
            >
              Sort: {sortBy}
              <ChevronDown size={13} className={`transition-transform ${showSort ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {showSort && (
                <motion.div
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  className="absolute right-0 top-8 bg-[#F7F4F1] border border-[#D6CEC6] rounded-xl shadow-xl z-30 min-w-[220px] overflow-hidden"
                >
                  {sortOptions.map(opt => (
                    <button
                      key={opt}
                      onClick={() => { setSortBy(opt); setShowSort(false); }}
                      className={`w-full text-left px-5 py-3 text-xs tracking-[2px] hover:bg-[#E9E3DD]/50 transition-colors ${
                        sortBy === opt ? "font-semibold text-[#1F1F1F]" : "text-[#1F1F1F]/70"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ── Product Grid ────────────────────────────── */}
      <section className="px-8 md:px-16 max-w-7xl mx-auto py-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory + sortBy}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12"
          >
            {visible.map((product, idx) => (
              <ProductCard key={product.id} product={product} idx={idx} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* ── Load More ───────────────────────────────── */}
        {visibleCount < filtered.length && (
          <div className="flex justify-center mt-16">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setVisibleCount(v => v + 8)}
              className="border border-[#1F1F1F] text-[#1F1F1F] px-10 py-3 rounded-full text-xs tracking-[4px] uppercase font-medium hover:bg-[#1F1F1F] hover:text-[#F3EFEA] transition-all duration-300"
            >
              Load More
            </motion.button>
          </div>
        )}

        {/* All loaded message */}
        {visibleCount >= filtered.length && filtered.length > 8 && (
          <p className="text-center mt-14 text-xs text-[#1F1F1F]/40 tracking-[4px] uppercase">
            You&apos;ve seen it all
          </p>
        )}
      </section>

      <div className="mt-12 bg-[#111]">
        <Footer />
      </div>
    </main>
  );
}
