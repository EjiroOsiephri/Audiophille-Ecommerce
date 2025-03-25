"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "./store/index";
import CartModal from "../components/CartComponent";
import cartImage from "../../public/Combined Shape.png";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const pathname = usePathname();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleCart = () => setIsCartOpen(!isCartOpen);

  const getLinkClass = (route: string) =>
    `hover:text-[#D87D4A] ${
      pathname === route ? "text-[#D87D4A]" : ""
    } transition-colors duration-200`;

  return (
    <>
      <nav className="bg-[#0E0E0E] text-white relative z-50">
        <div className="container mx-auto px-6 lg:px-40 py-4 flex justify-between items-center">
          {/* Hamburger Menu */}
          <div
            className="md:hidden cursor-pointer z-50"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            <div
              className={`w-6 h-1 bg-white my-1 transition-all duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></div>
            <div
              className={`w-6 h-1 bg-white my-1 transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            ></div>
            <div
              className={`w-6 h-1 bg-white my-1 transition-all duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></div>
          </div>

          {/* Logo */}
          <div className="text-4xl font-extrabold tracking-wider">
            <Link href="/">audiophile</Link>
          </div>

          {/* Menu for larger screens */}
          <ul className="hidden md:flex space-x-8 text-sm uppercase tracking-widest font-medium">
            <li>
              <Link href="/" className={getLinkClass("/")}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/headphones" className={getLinkClass("/headphones")}>
                Headphones
              </Link>
            </li>
            <li>
              <Link href="/speakers" className={getLinkClass("/speakers")}>
                Speakers
              </Link>
            </li>
            <li>
              <Link href="/earphones" className={getLinkClass("/earphones")}>
                Earphones
              </Link>
            </li>
          </ul>

          {/* Cart */}
          <div onClick={toggleCart} className="relative cursor-pointer">
            <Image src={cartImage} alt="Shopping Cart" width={24} height={24} />
            {/* Badge showing number of cart items */}
            {cartItems.length > 0 && (
              <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartItems.length}
              </div>
            )}
          </div>
        </div>

        {/* Divider */}
        <div className="hidden md:block mx-20 lg:mx-40 border-b border-[#979797]"></div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-[#0E0E0E] flex flex-col items-center justify-center gap-8 text-lg font-medium z-40"
            >
              {["/", "/headphones", "/speakers", "/earphones"].map((route) => (
                <Link
                  key={route}
                  href={route}
                  onClick={toggleMenu}
                  className={getLinkClass(route)}
                >
                  {route.replace("/", "") || "Home"}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Cart Modal */}
      <AnimatePresence>
        {isCartOpen && <CartModal onClose={toggleCart} />}
      </AnimatePresence>
    </>
  );
}
