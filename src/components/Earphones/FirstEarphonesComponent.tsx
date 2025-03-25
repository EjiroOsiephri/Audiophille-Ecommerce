"use client";

import Image from "next/image";
import Link from "next/link";
import imageone from "../../../public/Group 5.png";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/features/cartSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

const FirstEarphoneComponent = () => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const handleIncrease = () => setQuantity((prev) => prev + 1);
  const handleDecrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        name: "YX1 WIRELESS EARPHONES",
        quantity,
        price: 599,
        image: "/Group 5.png",
      })
    );
    toast.success("Item added to cart! Click on Cart to view.", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
    setQuantity(1);
  };

  return (
    <div className="bg-white px-6 md:px-20 py-10">
      <ToastContainer />
      <div className="mb-6">
        <Link href="/" className="text-gray-500 hover:text-gray-800">
          Go Back
        </Link>
      </div>

      {/* Product Details Section */}
      <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
        {/* Product Image */}
        <div className="relative w-full md:w-1/2 bg-gray-100 rounded-lg flex items-center justify-center">
          <Image
            src={imageone}
            alt="XX99 Mark II Headphones"
            width={500}
            height={500}
            style={{ objectFit: "contain" }}
            className="rounded-lg"
          />
        </div>

        {/* Product Info */}
        <div className="md:w-1/2">
          <p className="uppercase text-[#D87D4A] font-bold tracking-[0.7em] text-sm mb-4">
            New Product
          </p>
          <h1 className="text-3xl font-bold text-[#000000] uppercase mb-6">
            YX1 WIRELESS EARPHONES
          </h1>
          <p className="text-gray-600 mb-6">
            Tailor your listening experience with bespoke dynamic drivers from
            the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound
            even in noisy environments with its active noise cancellation
            feature.
          </p>
          <p className="text-2xl  text-[#000000] font-bold mb-6">$599</p>
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center border border-gray-300 rounded-md">
              <button
                onClick={handleDecrease}
                className="px-4 py-2 font-bold text-gray-500 hover:bg-gray-100"
              >
                -
              </button>
              <span className="px-4  text-[#000000] py-2">{quantity}</span>
              <button
                onClick={handleIncrease}
                className="px-4 py-2 font-bold text-gray-500 hover:bg-gray-100"
              >
                +
              </button>
            </div>
            <button
              onClick={handleAddToCart}
              className="px-6 py-2 bg-[#D87D4A] text-white uppercase text-sm font-bold rounded-md hover:bg-[#f09c6a]"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="flex flex-col md:flex-row gap-16 mb-20">
        {/* Features */}
        <div className="md:w-2/3">
          <h2 className="text-2xl font-bold uppercase  text-[#000000] mb-6">
            Features
          </h2>
          <p className="text-gray-600 mb-6">
            Experience unrivalled stereo sound thanks to innovative acoustic
            technology. With improved ergonomics designed for full day wearing,
            these revolutionary earphones have been finely crafted to provide
            you with the perfect fit, delivering complete comfort all day long
            while enjoying exceptional noise isolation and truly immersive
            sound.
          </p>
          <p className="text-gray-600">
            The YX1 Wireless Earphones features customizable controls for
            volume, music, calls, and voice assistants built into both earbuds.
            The new 7-hour battery life can be extended up to 28 hours with the
            charging case, giving you uninterrupted play time. Exquisite
            craftsmanship with a splash resistant design now available in an all
            new white and grey color scheme as well as the popular classic
            black.
          </p>
        </div>

        {/* In the Box */}
        <div className="md:w-1/3">
          <h2 className="text-2xl font-bold  text-[#000000] uppercase mb-6">
            In the Box
          </h2>
          <ul className="space-y-2">
            <li className="text-gray-600">
              <span className="text-[#D87D4A] mr-6 font-bold">1x</span>
              Headphone Unit
            </li>
            <li className="text-gray-600">
              <span className="text-[#D87D4A] mr-6 font-bold">2x</span>
              Replacement Earcups
            </li>
            <li className="text-gray-600">
              <span className="text-[#D87D4A] mr-6 font-bold">1x</span> User
              Manual
            </li>
            <li className="text-gray-600">
              <span className="text-[#D87D4A] mr-6 font-bold">1x</span> 3.5mm
              Audio Cable
            </li>
            <li className="text-gray-600">
              <span className="text-[#D87D4A] mr-6 font-bold">1x</span> Travel
              Bag
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FirstEarphoneComponent;
