"use client";

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
  const grandTotal = total + shipping;

  return (
    <div className="min-h-screen text-black bg-gray-100 flex justify-center items-center p-4">
      <div className="bg-white max-w-6xl w-full rounded-lg shadow-lg overflow-hidden grid grid-cols-1 lg:grid-cols-2">
        {/* Left Side: Form */}
        <div className="p-8">
          <h1 className="text-3xl font-bold mb-6">Checkout</h1>
          {/* Billing Details */}
          <SectionHeader title="Billing Details" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <InputField label="Name" placeholder="Alexei Ward" />
            <InputField label="Email Address" placeholder="alexei@mail.com" />
            <InputField label="Phone Number" placeholder="+1 202-555-0136" />
          </div>

          {/* Shipping Info */}
          <SectionHeader title="Shipping Info" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <InputField
              label="Address"
              placeholder="1137 Williams Avenue"
              fullWidth
            />
            <InputField label="ZIP Code" placeholder="10001" />
            <InputField label="City" placeholder="New York" />
            <InputField label="Country" placeholder="United States" />
          </div>

          {/* Payment Details */}
          <SectionHeader title="Payment Details" />
          <div className="mb-6">
            <PaymentMethod />
          </div>
        </div>

        {/* Right Side: Summary */}
        <div className="bg-gray-50 p-8">
          <h2 className="text-lg font-bold mb-4">Summary</h2>
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
          <div className="mt-8">
            <h1>
              <SummaryRow label="Total" value={`$${total}`} />
            </h1>
            <SummaryRow label="Shipping" value={`$${shipping}`} />
            <SummaryRow label="VAT (included)" value={`$${vat}`} />
            <SummaryRow label="Grand Total" value={`$${grandTotal}`} bold />
          </div>
          <button className="w-full mt-6 py-3 bg-[#D87D4A] text-white text-sm uppercase font-semibold rounded-lg hover:bg-[#bf5f33]">
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
  fullWidth = false,
}: {
  label: string;
  placeholder: string;
  fullWidth?: boolean;
}) => (
  <div className={`${fullWidth ? "col-span-2" : ""}`}>
    <label className="block text-sm font-medium mb-1">{label}</label>
    <input
      type="text"
      placeholder={placeholder}
      className="w-full border border-gray-300 rounded-md p-2 focus:ring-[#D87D4A] focus:border-[#D87D4A]"
    />
  </div>
);

const PaymentMethod = () => (
  <div>
    <div className="space-y-4">
      <label className="flex  bg-gray-200 p-5 items-center space-x-3">
        <input
          type="radio"
          name="paymentMethod"
          value="Pay with Stripe"
          className="w-4 h-4 text-[#D87D4A] focus:ring-[#D87D4A] border-gray-300"
        />
        <span className="text-sm font-medium">Pay with Stripe</span>
      </label>
      <label className="flex bg-gray-200 p-5 items-center space-x-3">
        <input
          type="radio"
          name="paymentMethod"
          value="Pay with PayPal"
          className="w-4 h-4 text-[#D87D4A] focus:ring-[#D87D4A] border-gray-300"
        />
        <span className="text-sm font-medium">Pay with PayPal</span>
      </label>
    </div>
  </div>
);

const SummaryRow = ({
  label,
  value,
  bold = false,
}: {
  label: string;
  value: string;
  bold?: boolean;
}) => (
  <div className="flex justify-between items-center mb-2">
    <p
      className={`text-sm ${
        bold ? "font-bold text-gray-900" : "text-gray-600"
      }`}
    >
      {label}
    </p>
    <p
      className={`text-sm ${
        bold ? "font-bold text-[#D87D4A]" : "text-gray-900"
      }`}
    >
      {value}
    </p>
  </div>
);
