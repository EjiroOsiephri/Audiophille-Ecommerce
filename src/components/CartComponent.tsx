"use client";

import Image from "next/image";
import image from "../../public/image-removebg-preview(47).png";

interface CartModalProps {
  cartItems: { name: string; quantity: number; price: number }[];
  onClose: () => void;
}

export default function CartComponent({ cartItems, onClose }: CartModalProps) {
  const total = cartItems.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );

  return (
    <div className="fixed inset-0 z-50 text-[#000000] flex justify-center items-center bg-black bg-opacity-40">
      <div
        className={`
          bg-white w-11/12 max-w-md rounded-lg p-6 shadow-lg relative 
          transform translate-x-0 translate-y-0
          sm:translate-x-[110%] sm:-translate-y-[5%]
        `}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-0 right-2 text-gray-600 hover:text-black text-2xl font-bold"
        >
          &times;
        </button>

        {/* Cart Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-bold">Cart ({cartItems.length})</h2>
          <button className="text-sm text-[#D87D4A] uppercase font-semibold">
            Remove all
          </button>
        </div>

        {/* Cart Items */}
        <ul className="space-y-6">
          {cartItems.map((item, index) => (
            <li
              key={index}
              className="flex items-center justify-between border-b pb-4"
            >
              {/* Image */}
              <Image
                src={image}
                alt={item.name}
                width={50}
                height={50}
                className="rounded-md"
              />

              {/* Item Details */}
              <div className="flex-1 px-4">
                <p className="font-medium text-gray-900 truncate">
                  {item.name}
                </p>
                <p className="text-sm text-gray-600">${item.price}</p>
              </div>

              {/* Quantity Controls */}
              <div className="flex items-center space-x-2">
                <button className="px-2 py-1 border rounded-md text-sm font-semibold hover:bg-gray-200">
                  -
                </button>
                <span className="text-sm font-medium">{item.quantity}</span>
                <button className="px-2 py-1 border rounded-md text-sm font-semibold hover:bg-gray-200">
                  +
                </button>
              </div>
            </li>
          ))}
        </ul>

        {/* Cart Total */}
        <div className="mt-6 flex justify-between items-center">
          <p className="text-lg font-bold">Total</p>
          <p className="text-lg font-bold text-gray-900">${total}</p>
        </div>

        {/* Checkout Button */}
        <button className="w-full mt-6 py-3 bg-[#D87D4A] text-white text-sm uppercase font-semibold rounded-lg hover:bg-[#bf5f33]">
          Checkout
        </button>
      </div>
    </div>
  );
}
