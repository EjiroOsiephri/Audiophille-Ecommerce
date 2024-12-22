"use client";

import { useState } from "react";
import Image from "next/image";
import image from "../../public/image-removebg-preview(47).png";

interface CartItem {
  name: string;
  quantity: number;
  price: number;
}

interface CartModalProps {
  cartItems: CartItem[];
  onClose: () => void;
}

export default function CartComponent({ cartItems, onClose }: CartModalProps) {
  const [items, setItems] = useState<CartItem[]>(cartItems);

  const total = items.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );

  const handleIncrease = (index: number) => {
    const updatedItems = [...items];
    updatedItems[index].quantity += 1;
    setItems(updatedItems);
  };

  const handleDecrease = (index: number) => {
    const updatedItems = [...items];
    if (updatedItems[index].quantity > 1) {
      updatedItems[index].quantity -= 1;
    } else {
      updatedItems.splice(index, 1);
    }
    setItems(updatedItems);
  };

  const handleRemoveAll = () => setItems([]);

  return (
    <div className="fixed inset-0 z-50 text-[#000000] flex justify-center items-center bg-black bg-opacity-40">
      <div
        className={`
          bg-white w-11/12 max-w-md rounded-lg p-6 shadow-lg relative 
          transform translate-x-0 translate-y-0
          sm:translate-x-[110%] sm:-translate-y-[5%]
          min-h-[500px]
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
          <h2 className="text-lg font-bold">Cart ({items.length})</h2>
          <button
            onClick={handleRemoveAll}
            className="text-sm text-[#D87D4A] uppercase font-semibold"
          >
            Remove all
          </button>
        </div>

        {/* Cart Items */}
        <ul className="space-y-6">
          {items.map((item, index) => (
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
                <button
                  onClick={() => handleDecrease(index)}
                  className="px-2 py-1 border rounded-md text-sm font-semibold hover:bg-gray-200"
                >
                  -
                </button>
                <span className="text-sm font-medium">{item.quantity}</span>
                <button
                  onClick={() => handleIncrease(index)}
                  className="px-2 py-1 border rounded-md text-sm font-semibold hover:bg-gray-200"
                >
                  +
                </button>
              </div>
            </li>
          ))}
          {items.length === 0 && (
            <div className="flex justify-center items-center h-full">
              <p className="text-center text-gray-500">Your cart is empty.</p>
            </div>
          )}
        </ul>

        {/* Cart Total */}
        <div className="mt-6 flex justify-between items-center">
          <p className="text-lg font-bold">Total</p>
          <p className="text-lg font-bold text-gray-900">${total}</p>
        </div>

        {/* Checkout Button */}
        {items.length > 0 && (
          <button className="w-full mt-6 py-3 bg-[#D87D4A] text-white text-sm uppercase font-semibold rounded-lg hover:bg-[#bf5f33]">
            Checkout
          </button>
        )}
      </div>
    </div>
  );
}
