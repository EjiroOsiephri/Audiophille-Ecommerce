"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  "pk_test_51QZ9kuIPEE29XbFrRDYPPRJDVkeS4IrA2GX7Nj8S5Fj4Gtj7072Dls4HiETLZ2awIB9Pd4O4KNNcmvtV8jZXUovE00bmIxuJEp"
);

function CardPaymentForm() {
  const stripe = useStripe();
  const elements = useElements();
  const searchParams = useSearchParams();
  const router = useRouter();
  const clientSecret = searchParams.get("clientSecret");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    if (!stripe || !elements) {
      setError("Stripe is not ready.");
      setLoading(false);
      return;
    }

    const card = elements.getElement(CardElement);
    if (!card) {
      setError("Card Element is not loaded.");
      setLoading(false);
      return;
    }

    const result = await stripe.confirmCardPayment(clientSecret!, {
      payment_method: {
        card,
      },
    });

    if (result.error) {
      setError(result.error.message || "Payment failed.");
    } else if (result.paymentIntent?.status === "succeeded") {
      setSuccess("Payment successful!");
      setTimeout(() => router.push("/thank-you"), 2000);
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-6 rounded-md shadow-md max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4">Enter Card Details</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <CardElement
              options={{
                style: {
                  base: {
                    fontSize: "16px",
                    color: "#424770",
                    "::placeholder": { color: "#aab7c4" },
                  },
                  invalid: { color: "#9e2146" },
                },
              }}
            />
          </div>
          {error && <p className="text-red-500">{error}</p>}
          {success && <p className="text-green-500">{success}</p>}
          <button
            type="submit"
            className={`w-full py-2 mt-4 bg-[#D87D4A] text-white rounded-md ${
              loading ? "opacity-50 cursor-not-allowed" : "hover:bg-[#bf5f33]"
            }`}
            disabled={!stripe || loading}
          >
            {loading ? "Processing..." : "Pay Now"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default function Cardpayment() {
  return (
    <Elements stripe={stripePromise}>
      <CardPaymentForm />
    </Elements>
  );
}
