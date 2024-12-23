"use client";

import Image from "next/image";
import Link from "next/link";
import imageone from "../../../public/image-removebg-preview(38) (2).png";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/features/cartSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

const FirstSpeakerComponent = () => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const handleIncrease = () => setQuantity((prev) => prev + 1);
  const handleDecrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        name: " ZX9 SPEAKER",
        quantity,
        price: 4500,
        image: "/image-removebg-preview(38) (2).png",
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
            ZX9 SPEAKER
          </h1>
          <p className="text-gray-600 mb-6">
            Upgrade your sound system with the all new ZX9 active speaker. It’s
            a bookshelf speaker system that offers truly wireless connectivity
            -- creating new possibilities for more pleasing and practical audio
            setups.
          </p>
          <p className="text-2xl  text-[#000000] font-bold mb-6">$ 4,500</p>
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
            Connect via Bluetooth or nearly any wired source. This speaker
            features optical, digital coaxial, USB Type-B, stereo RCA, and
            stereo XLR inputs, allowing you to have up to five wired source
            devices connected for easy switching. Improved bluetooth technology
            offers near lossless audio quality at up to 328ft (100m).
          </p>
          <p className="text-gray-600">
            Discover clear, more natural sounding highs than the competition
            with ZX9’s signature planar diaphragm tweeter. Equally important is
            its powerful room-shaking bass courtesy of a 6.5” aluminum alloy
            bass unit. You’ll be able to enjoy equal sound quality whether in a
            large room or small den. Furthermore, you will experience new
            sensations from old songs since it can respond to even the subtle
            waveforms.
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
              Speaker Unit
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

export default FirstSpeakerComponent;
