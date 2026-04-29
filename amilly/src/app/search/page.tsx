"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, ArrowRight } from "lucide-react";
import { useSearch } from "@/hooks/useSearch";
import { useCart } from "@/hooks/useCart";
import { useRouter } from "next/navigation";

function SearchContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const { searchProducts } = useSearch();
  const { addToCart } = useCart();
  const router = useRouter();

  const [results, setResults] = useState<any[]>([]);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [showSizeModal, setShowSizeModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const sizes = ["XS", "S", "M", "L", "XL"];

  useEffect(() => {
    if (query) {
      const searchResults = searchProducts(query);
      setResults(searchResults);
    }
  }, [query, searchProducts]);

  const handleQuickAdd = (product: any) => {
    setSelectedProduct(product);
    setSelectedSize(null);
    setShowSizeModal(true);
  };

  const handleAddToCart = () => {
    if (selectedProduct && selectedSize) {
      addToCart(selectedProduct, selectedSize, selectedProduct.categoryType);
      setShowSizeModal(false);
      setSelectedSize(null);
    }
  };

  return (
    <main className="relative w-full min-h-screen font-poppins text-[#1F1F1F]" style={{ background: "linear-gradient(180deg, #F3EFEA 0%, #E8E2DC 100%)" }}>
      <Navbar />

      <section className="pt-36 pb-20 px-8 md:px-16 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-aboreto text-4xl md:text-5xl tracking-[4px] uppercase mb-2">Search Results</h1>
          <p className="font-imprima text-sm tracking-[2px] opacity-60 uppercase">
            {query ? `Results for "${query}"` : "No search query"}
          </p>
        </motion.div>

        {results.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center min-h-[60vh] gap-6"
          >
            <p className="text-center text-sm opacity-50">
              {query ? `No products found for "${query}"` : "Enter a search query to find products"}
            </p>
            <a
              href="/products"
              className="text-xs uppercase tracking-[3px] border border-[#1F1F1F] px-6 py-3 rounded-full hover:bg-[#1F1F1F] hover:text-[#F3EFEA] transition-all"
            >
              Browse All Products
            </a>
          </motion.div>
        ) : (
          <div className="mt-12">
            <p className="text-xs text-[#1F1F1F]/40 tracking-[2px] uppercase mb-8">
              {results.length} product{results.length !== 1 ? "s" : ""} found
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12">
              <AnimatePresence mode="wait">
                {results.map((product, idx) => (
                  <motion.div
                    key={`${product.categoryType}-${product.id}`}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: (idx % 8) * 0.07 }}
                    className="flex flex-col cursor-pointer"
                  >
                    {/* Product Card */}
                    <div
                      onClick={() => router.push(`/product/${product.categoryType}/${product.id}`)}
                      className="relative w-full aspect-[3/4] overflow-hidden rounded-xl bg-[#F7F4F1] group mb-4"
                    >
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        unoptimized
                        className={`object-cover ${product.pos} transition-transform duration-700 group-hover:scale-106`}
                        style={{ transform: "scale(1)" }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = "scale(1.06)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = "scale(1)";
                        }}
                      />

                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 flex items-end justify-center pb-5 transition-opacity duration-300">
                        <motion.button
                          initial={{ y: 12, opacity: 0 }}
                          whileHover={{ y: 0, opacity: 1 }}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleQuickAdd(product);
                          }}
                          className="bg-white text-[#1F1F1F] text-xs font-poppins tracking-[3px] uppercase px-6 py-2.5 rounded-full hover:bg-[#1F1F1F] hover:text-white transition-colors flex items-center gap-2"
                        >
                          <ShoppingBag size={12} />
                          Add to Cart
                        </motion.button>
                      </div>
                    </div>

                    {/* Info */}
                    <div className="flex flex-col gap-1">
                      <p className="font-imprima text-sm tracking-[1px] text-[#1F1F1F] leading-tight opacity-90">{product.name}</p>
                      <p className="font-poppins text-sm font-semibold text-[#1F1F1F]">${product.price}</p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        )}
      </section>

      {/* Size Selection Modal */}
      <AnimatePresence>
        {showSizeModal && selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center"
            onClick={() => setShowSizeModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl p-8 max-w-sm w-full mx-4"
            >
              <h3 className="font-aboreto text-xl uppercase tracking-[2px] mb-2">Select Size</h3>
              <p className="text-sm opacity-60 mb-6">{selectedProduct.name}</p>

              <div className="grid grid-cols-5 gap-3 mb-8">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-3 text-sm font-medium uppercase transition-all border ${
                      selectedSize === size
                        ? "bg-[#1F1F1F] text-white border-[#1F1F1F]"
                        : "border-[#D6CEC6] text-[#1F1F1F] hover:border-[#1F1F1F]"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>

              <button
                onClick={handleAddToCart}
                disabled={!selectedSize}
                className="w-full bg-[#1F1F1F] text-white py-3 uppercase text-xs tracking-[3px] font-medium rounded-full disabled:opacity-50 transition-all"
              >
                Add to Cart
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mt-12 bg-[#111]">
        <Footer />
      </div>
    </main>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={
      <main className="relative w-full min-h-screen font-poppins text-[#1F1F1F]">
        <Navbar />
        <section className="pt-36 pb-20 px-8 md:px-16 max-w-7xl mx-auto flex items-center justify-center min-h-[60vh]">
          <p className="text-sm opacity-50">Loading search results...</p>
        </section>
        <Footer />
      </main>
    }>
      <SearchContent />
    </Suspense>
  );
}
