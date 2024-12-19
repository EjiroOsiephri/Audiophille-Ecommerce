"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import cartimage from "../../public/Combined Shape.png";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
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
            <Link href="/" className="hover:text-[#D87D4A]">
              Home
            </Link>
          </li>
          <li>
            <Link href="/headphones" className="hover:text-[#D87D4A]">
              Headphones
            </Link>
          </li>
          <li>
            <Link href="/speakers" className="hover:text-[#D87D4A]">
              Speakers
            </Link>
          </li>
          <li>
            <Link href="/earphones" className="hover:text-[#D87D4A]">
              Earphones
            </Link>
          </li>
        </ul>

        {/* Cart */}
        <div className="relative cursor-pointer">
          <Image
            src={cartimage}
            alt="Shopping Cart"
            width={24}
            height={24}
            className="hover:opacity-80"
          />
        </div>
      </div>

      {/* Divider for larger screens */}
      <div className="hidden md:block mx-20 lg:mx-40 border-b border-[#979797]"></div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-0 left-0 w-full h-screen bg-[#0E0E0E] flex flex-col items-center justify-center gap-8 text-lg font-medium transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 md:hidden z-40`}
      >
        <Link href="/" onClick={toggleMenu}>
          Home
        </Link>
        <Link href="/headphones" onClick={toggleMenu}>
          Headphones
        </Link>
        <Link href="/speakers" onClick={toggleMenu}>
          Speakers
        </Link>
        <Link href="/earphones" onClick={toggleMenu}>
          Earphones
        </Link>
      </div>
    </nav>
  );
}
