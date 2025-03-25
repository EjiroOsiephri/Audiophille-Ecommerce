"use client";

import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { RootState } from "./store";
import {
  increaseQuantity,
  decreaseQuantity,
  removeAllItems,
} from "./store/features/cartSlice";
import Image from "next/image";
import image from "../../public/image-removebg-preview(47).png";
import { motion, AnimatePresence } from "framer-motion";

export default function CartComponent({ onClose }: { onClose: () => void }) {
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.cart.items);
  const router = useRouter();

  const total = items.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );
  const isEmpty = items.length === 0;

  const handleNavigation = () => {
    router.push("/checkout");
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex justify-end bg-black bg-opacity-40"
      >
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white w-100 max-h-[90vh] overflow-y-auto shadow-lg absolute top-20 right-6 rounded-lg p-6"
        >
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-black text-2xl font-bold"
          >
            &times;
          </button>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-bold text-black">
              Cart ({items.length})
            </h2>
            {items.length > 0 && (
              <button
                onClick={() => dispatch(removeAllItems())}
                className="text-sm text-[#D87D4A] uppercase font-semibold"
              >
                Remove all
              </button>
            )}
          </div>
          <ul className="space-y-6 overflow-y-auto max-h-[60vh] pr-2">
            {items.map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="flex items-center justify-between border-b pb-4"
              >
                <Image
                  src={item?.image || image}
                  alt={item.name}
                  width={50}
                  height={50}
                  className="rounded-md"
                />
                <div className="flex-1 px-4">
                  <p className="font-medium text-black truncate">{item.name}</p>
                  <p className="text-sm text-gray-600">${item.price}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => dispatch(decreaseQuantity(item.name))}
                    className="px-2 py-1 border rounded-md text-sm font-semibold text-black hover:bg-gray-200"
                  >
                    -
                  </button>
                  <span className="text-sm font-medium">{item.quantity}</span>
                  <button
                    onClick={() => dispatch(increaseQuantity(item.name))}
                    className="px-2 py-1 border rounded-md text-black text-sm font-semibold hover:bg-gray-200"
                  >
                    +
                  </button>
                </div>
              </motion.li>
            ))}
            {isEmpty && (
              <p className="text-center text-gray-500">Your cart is empty.</p>
            )}
          </ul>
          {items.length > 0 && (
            <>
              <div className="mt-6 flex justify-between items-center">
                <p className="text-lg font-bold text-black">Total</p>
                <p className="text-lg font-bold text-black">${total}</p>
              </div>
              <button
                onClick={handleNavigation}
                className="w-full mt-6 py-3 bg-[#D87D4A] text-white text-sm uppercase font-semibold rounded-lg hover:bg-[#bf5f33]"
              >
                Checkout
              </button>
            </>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
