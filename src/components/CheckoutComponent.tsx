"use client";

import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../components/store/index"; // Adjust to your store's path

export default function CheckoutPage() {
  const items = useSelector((state: RootState) => state.cart.items);

  const total = items.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );
  const vat = (total * 0.2).toFixed(2); // Example VAT calculation (20%)
  const shipping = 50; // Flat shipping rate
  const grandTotal = total + shipping + parseFloat(vat);

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    zipCode: "",
    city: "",
    country: "",
    paymentMethod: "", // Track selected payment method
  });

  const [formValid, setFormValid] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    const updatedFormData = { ...formData, [field]: value };
    setFormData(updatedFormData);

    // Check if all fields are filled and a payment method is selected
    const allFieldsFilled = Object.values(updatedFormData).every(
      (input, index) =>
        (index < Object.keys(updatedFormData).length - 1 &&
          input.trim() !== "") ||
        updatedFormData.paymentMethod !== ""
    );
    setFormValid(allFieldsFilled);
  };

  return (
    <div className="min-h-screen text-black bg-gray-100 flex justify-center items-center p-4">
      <div className="bg-white max-w-6xl w-full rounded-lg shadow-lg overflow-hidden grid grid-cols-1 lg:grid-cols-2">
        {/* Left Side: Form */}
        <div className="p-8">
          <h1 className="text-3xl font-bold mb-6">Checkout</h1>
          {/* Billing Details */}
          <SectionHeader title="Billing Details" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <InputField
              label="Name"
              placeholder="Alexei Ward"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
            />
            <InputField
              label="Email Address"
              placeholder="alexei@mail.com"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
            />
            <InputField
              label="Phone Number"
              placeholder="+1 202-555-0136"
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
            />
          </div>

          {/* Shipping Info */}
          <SectionHeader title="Shipping Info" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <InputField
              label="Address"
              placeholder="1137 Williams Avenue"
              value={formData.address}
              onChange={(e) => handleInputChange("address", e.target.value)}
              fullWidth
            />
            <InputField
              label="ZIP Code"
              placeholder="10001"
              value={formData.zipCode}
              onChange={(e) => handleInputChange("zipCode", e.target.value)}
            />
            <InputField
              label="City"
              placeholder="New York"
              value={formData.city}
              onChange={(e) => handleInputChange("city", e.target.value)}
            />
            <InputField
              label="Country"
              placeholder="United States"
              value={formData.country}
              onChange={(e) => handleInputChange("country", e.target.value)}
            />
          </div>

          {/* Payment Details */}
          <SectionHeader title="Payment Details" />
          <div className="mb-6">
            <PaymentMethod
              selected={formData.paymentMethod}
              onChange={(value) => handleInputChange("paymentMethod", value)}
            />
          </div>
        </div>

        {/* Right Side: Summary */}
        <div className="bg-gray-50 p-8">
          <h1 className="text-2xl font-bold mb-6">Summary</h1>
          <ul className="space-y-4">
            {items.map((item, index) => (
              <li key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  <div>
                    <p className="font-bold text-gray-900">{item.name}</p>
                    <p className="text-sm text-gray-600">
                      ${item.price} x {item.quantity}
                    </p>
                  </div>
                </div>
                <p className="font-bold text-[#D87D4A]">
                  ${item.price * item.quantity}
                </p>
              </li>
            ))}
          </ul>
          <div className="mt-8 space-y-6">
            <div className="flex justify-between items-center">
              <p className="text-lg font-bold text-gray-700 uppercase">Total</p>
              <p className="text-lg font-bold text-gray-700 uppercase">
                ${total}
              </p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-lg font-bold text-gray-700 uppercase">
                Shipping
              </p>
              <p className="text-lg font-bold text-gray-700 uppercase">
                ${shipping}
              </p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-lg font-bold text-gray-700 uppercase">
                VAT (included)
              </p>
              <p className="text-lg font-bold text-gray-700 uppercase">
                ${vat}
              </p>
            </div>
            <div className="flex justify-between items-center border-t pt-4">
              <p className="text-2xl font-extrabold text-gray-800 uppercase">
                Grand Total
              </p>
              <p className="text-2xl font-extrabold text-[#D87D4A]">
                ${grandTotal.toFixed(2)}
              </p>
            </div>
          </div>
          <button
            className={`w-full mt-6 py-3 text-white text-lg uppercase font-semibold rounded-lg ${
              formValid
                ? "bg-[#D87D4A] hover:bg-[#bf5f33]"
                : "bg-gray-300 cursor-not-allowed"
            }`}
            disabled={!formValid}
          >
            Continue & Pay
          </button>
        </div>
      </div>
    </div>
  );
}

// Reusable Components
const SectionHeader = ({ title }: { title: string }) => (
  <h3 className="text-lg font-bold text-[#D87D4A] mb-4">{title}</h3>
);

const InputField = ({
  label,
  placeholder,
  value,
  onChange,
  fullWidth = false,
}: {
  label: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  fullWidth?: boolean;
}) => (
  <div className={`col-span-1 ${fullWidth ? "md:col-span-2" : ""}`}>
    <label className="block text-sm md:text-base font-bold mb-1">{label}</label>
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full border border-gray-300 rounded-md p-2 focus:ring-[#D87D4A] focus:border-[#D87D4A]"
    />
  </div>
);

const PaymentMethod = ({
  selected,
  onChange,
}: {
  selected: string;
  onChange: (value: string) => void;
}) => (
  <div className="space-y-4">
    {["Pay with Stripe", "Pay with PayStack", "Pay with Crypto"].map(
      (method) => (
        <label
          key={method}
          className={`flex bg-gray-200 p-5 items-center space-x-3 ${
            selected === method ? "ring-2 ring-[#D87D4A]" : ""
          }`}
        >
          <input
            type="radio"
            name="paymentMethod"
            value={method}
            checked={selected === method}
            onChange={() => onChange(method)}
            className="w-4 h-4 text-[#D87D4A] focus:ring-[#D87D4A] border-gray-300"
          />
          <span className="text-sm font-medium">{method}</span>
        </label>
      )
    )}
  </div>
);
