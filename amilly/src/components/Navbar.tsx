"use client";
import React, { useState, useEffect } from "react";
import { ArrowRight, LogOut, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { siteData } from "@/config/siteData";
import { useCart } from "@/hooks/useCart";

const navLinks = siteData.navLinks;

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const { getItemCount } = useCart();
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem("mockAuth") === "true");
    setCartCount(getItemCount());

    const handleCartUpdate = () => {
      setCartCount(getItemCount());
    };
    window.addEventListener("storage", handleCartUpdate);
    return () => window.removeEventListener("storage", handleCartUpdate);
  }, [getItemCount]);


  const handleLogout = () => {
    localStorage.removeItem("mockAuth");
    setIsLoggedIn(false);
  };

  const handleAboutUs = (e: React.MouseEvent) => {
    e.preventDefault();
    if (pathname === "/") {
      document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push("/");
      setTimeout(() => {
        document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
      }, 500);
    }
  };

  const handleProducts = (e: React.MouseEvent) => {
    e.preventDefault();
    if (pathname === "/") {
      document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push("/");
      setTimeout(() => {
        document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
      }, 800);
    }
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
      className="absolute top-0 left-0 w-full z-50 px-6 lg:px-12 py-6 flex items-center justify-between text-foreground font-poppins text-sm uppercase tracking-[4px] bg-transparent"
    >
      {/* Left: Logo */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="text-2xl font-jura font-bold tracking-[6px] text-left"
      >
        AMMILY
      </motion.div>

      {/* Center: Navigation Links + Search */}
      <div className="hidden lg:flex items-center font-medium text-[#2a2a2a] tracking-[4px] gap-8 justify-center flex-1">
        {navLinks.map((link, i) => (
          <motion.div
            key={link.label}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + i * 0.1, duration: 0.5, ease: "easeOut" }}
          >
            {link.label === "About Us" ? (
              <a
                href={link.href}
                onClick={handleAboutUs}
                className="relative hover:text-black transition-colors pr-1 group cursor-pointer"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full" />
              </a>
            ) : link.label === "Products" ? (
              <div className="relative group cursor-pointer inline-block">
                <a
                  href={link.href}
                  onClick={handleProducts}
                  className="relative hover:text-black transition-colors pr-1"
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full" />
                </a>

                {/* Dropdown menu */}
                {link.dropdown && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    <div className="w-[180px] bg-[#F7F4F1] border border-[#D6CEC6] rounded-xl shadow-xl flex flex-col py-2 overflow-hidden">
                      {link.dropdown.map(drop => (
                        <Link 
                          key={drop.label}
                          href={drop.href}
                          className="px-5 py-3 text-[10px] tracking-[3px] text-[#2a2a2a]/70 hover:text-black hover:bg-[#E9E3DD]/50 transition-colors uppercase"
                        >
                          {drop.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                href={link.href}
                className="relative hover:text-black transition-colors pr-1 group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full" />
              </Link>
            )}
          </motion.div>
        ))}
      </div>

      {/* Right: CTA Button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="flex items-center justify-end gap-6"
      >
        <Link href="/cart" className="hover:opacity-60 transition-opacity flex items-center delay-100">
          <div className="relative">
             <ShoppingBag size={22} strokeWidth={1.5} className="text-[#1F1F1F]" />
             {cartCount > 0 && (
              <div className="absolute -top-1 -right-2 w-4 h-4 rounded-full bg-[#1F1F1F] text-[#F3EFEA] flex items-center justify-center text-[9px] font-poppins font-medium">
                {cartCount > 9 ? "9+" : cartCount}
              </div>
             )}
          </div>
        </Link>
        
        {isLoggedIn ? (
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={handleLogout}
            className="flex items-center gap-3 border border-foreground/30 px-6 py-2 rounded-full hover:bg-foreground hover:text-background transition-all tracking-[4px]"
          >
            <span>LOGOUT</span>
            <LogOut size={16} />
          </motion.button>
        ) : (
          <Link href="/auth">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-3 border border-foreground/30 px-6 py-2 rounded-full hover:bg-foreground hover:text-background transition-all tracking-[4px]"
            >
              <span>SIGN UP</span>
              <ArrowRight size={16} />
            </motion.button>
          </Link>
        )}
      </motion.div>
    </motion.nav>
  );
}

