"use client";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./store"; // Adjust the path to your store file
import {
  increaseQuantity,
  decreaseQuantity,
  removeAllItems,
} from "./store/features/cartSlice";
import Image from "next/image";
import image from "../../public/image-removebg-preview(47).png";

export default function CartComponent({ onClose }: { onClose: () => void }) {
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.cart.items);

  const total = items.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );

  return (
    <div
      className={`fixed inset-0 z-50 text-[#000000] flex items-center justify-center md:justify-end bg-black bg-opacity-40`}
    >
      <div
        className={`bg-white w-11/12 max-w-md rounded-lg p-6 shadow-lg relative transform md:translate-x-[-20px] md:translate-y-[-40px] min-h-[500px]`}
      >
        <button
          onClick={onClose}
          className="absolute top-0 right-2 text-gray-600 hover:text-black text-2xl font-bold"
        >
          &times;
        </button>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-bold">Cart ({items.length})</h2>
          <button
            onClick={() => dispatch(removeAllItems())}
            className="text-sm text-[#D87D4A] uppercase font-semibold"
          >
            Remove all
          </button>
        </div>
        <ul className="space-y-6">
          {items.map((item, index) => (
            <li
              key={index}
              className="flex items-center justify-between border-b pb-4"
            >
              <Image
                src={image}
                alt={item.name}
                width={50}
                height={50}
                className="rounded-md"
              />
              <div className="flex-1 px-4">
                <p className="font-medium text-gray-900 truncate">
                  {item.name}
                </p>
                <p className="text-sm text-gray-600">${item.price}</p>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => dispatch(decreaseQuantity(item.name))}
                  className="px-2 py-1 border rounded-md text-sm font-semibold hover:bg-gray-200"
                >
                  -
                </button>
                <span className="text-sm font-medium">{item.quantity}</span>
                <button
                  onClick={() => dispatch(increaseQuantity(item.name))}
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
        <div className="mt-6 flex justify-between items-center">
          <p className="text-lg font-bold">Total</p>
          <p className="text-lg font-bold text-gray-900">${total}</p>
        </div>
        {items.length > 0 && (
          <button className="w-full mt-6 py-3 bg-[#D87D4A] text-white text-sm uppercase font-semibold rounded-lg hover:bg-[#bf5f33]">
            Checkout
          </button>
        )}
      </div>
    </div>
  );
}
