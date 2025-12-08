"use client";

import { useSearchParams } from "next/navigation";

export default function OrderSuccess() {
  const params = useSearchParams();
  const orderId = params.get("orderId");

  return (
    <div className="px-6 md:px-20 py-10 text-center min-h-screen bg-orange-100">
      <h1 className="text-4xl font-bold mb-6 text-green-700">
        Order Successful!
      </h1>

      <p className="text-xl">Your order ID is:</p>
      <p className="text-3xl font-bold mt-2">{orderId}</p>

      <a
        href="/menu"
        className="mt-8 inline-block px-6 py-3 bg-orange-600 text-white rounded"
      >
        Back to Menu
      </a>
    </div>
  );
}
