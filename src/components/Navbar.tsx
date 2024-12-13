import Link from "next/link";
import Image from "next/image";
import cartimage from "../../public/Combined Shape.png";

export default function Navbar() {
  return (
    <nav className="bg-[#101010] text-white">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-3xl">
          <Link href="/" className="text-whitetracking-widest font-extrabold">
            audiophile
          </Link>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-8 text-sm tracking-widest font-medium">
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
    </nav>
  );
}
