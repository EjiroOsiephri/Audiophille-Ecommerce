import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#101010] text-white py-14 px-6 md:px-20 mt-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start">
        {/* Left Section */}
        <div className="text-center md:text-left max-w-xl">
          <h1 className="text-5xl mb-6 font-bold tracking-wider">audiophile</h1>
          <p className="mt-4 text-sm text-gray-400 leading-relaxed max-w-[90%] mx-auto md:mx-0">
            Audiophile is an all-in-one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility – we're open 7 days a week.
          </p>
          <p className="mt-6 text-sm text-gray-400">
            Copyright 2021. All Rights Reserved
          </p>
        </div>

        {/* Right Section */}
        <div className="mt-8 md:mt-0 flex flex-col md:items-end w-full md:w-auto">
          {/* Navigation */}
          <nav className="flex flex-wrap justify-center md:justify-end space-x-4 md:space-x-6 uppercase text-sm tracking-wider">
            <Link href="/" className="hover:text-orange-400 transition-colors">
              Home
            </Link>
            <Link
              href="/headphones"
              className="hover:text-orange-400 transition-colors"
            >
              Headphones
            </Link>
            <Link
              href="/speakers"
              className="hover:text-orange-400 transition-colors"
            >
              Speakers
            </Link>
            <Link
              href="/earphones"
              className="hover:text-orange-400 transition-colors"
            >
              Earphones
            </Link>
          </nav>

          {/* Social Media */}
          <div className="mt-8 flex justify-center md:justify-end space-x-6">
            <Link href="https://www.facebook.com" aria-label="Facebook">
              <div className="w-10 h-10 bg-white flex items-center justify-center rounded-full text-[#101010] hover:bg-orange-400 hover:text-white transition-colors">
                <FaFacebookF className="text-lg" />
              </div>
            </Link>
            <Link href="https://www.twitter.com" aria-label="Twitter">
              <div className="w-10 h-10 bg-white flex items-center justify-center rounded-full text-[#101010] hover:bg-orange-400 hover:text-white transition-colors">
                <FaTwitter className="text-lg" />
              </div>
            </Link>
            <Link href="https://www.instagram.com" aria-label="Instagram">
              <div className="w-10 h-10 bg-white flex items-center justify-center rounded-full text-[#101010] hover:bg-orange-400 hover:text-white transition-colors">
                <FaInstagram className="text-lg" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
