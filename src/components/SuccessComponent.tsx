"use client";

import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../components/store/index";
import { useRouter } from "next/navigation";

const SuccessComponent = () => {
  const items = useSelector((state: RootState) => state.cart.items);

  const grandTotal = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const router = useRouter();

  return (
    <div className="container text-black mx-auto px-4 py-12">
      {/* Success Icon and Message */}
      <div className="max-w-xl mx-auto bg-white rounded-lg shadow-lg p-6 text-center">
        {/* Success Icon */}
        <div className="flex justify-center items-center mb-6">
          <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>

        {/* Header */}
        <h2 className="text-2xl font-bold mb-4">Order Successful</h2>
        <p className="mb-6">
          Your order has been placed successfully. You will receive an email
          confirmation shortly.
        </p>

        {/* Order Summary */}
        {items.length > 0 && (
          <div className="order-summary bg-gray-100 p-4 rounded-lg mb-6">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h3 className="font-bold">{items[0].name}</h3>
                <p className="text-gray-500">
                  {items.length > 1
                    ? `and ${items.length - 1} other item(s)`
                    : `x${items[0].quantity}`}
                </p>
              </div>
              <p className="font-bold">${grandTotal.toFixed(2)}</p>
            </div>
          </div>
        )}

        {/* Grand Total */}
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-bold text-lg">GRAND TOTAL</h3>
          <p className="font-bold text-lg">${grandTotal.toFixed(2)}</p>
        </div>

        {/* Back to Home Button */}
        <button
          onClick={() => {
            router.push("/");
          }}
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default SuccessComponent;
