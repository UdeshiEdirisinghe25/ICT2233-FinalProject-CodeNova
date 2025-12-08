"use client";

import { useState } from "react";
import useCart from "@/lib/useCart";

export default function CheckoutPage() {
  const { items, total, clearCart } = useCart();
  const deliveryFee = items.length > 0 ? 300.0 : 0;
  const finalTotal = total + deliveryFee;

  const [form, setForm] = useState({
    full_name: "",
    email: "",
    phone: "",
    address: "",
    payment_method: "cod",
  });

  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handlePlaceOrder = async () => {
    if (!form.full_name || !form.address || !form.phone) {
      alert("Please fill all required fields");
      return;
    }

    try {
      const res = await fetch("/api/orders/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, items }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.error || "Something went wrong");
        return;
      }

      setOrderPlaced(true);
      clearCart();
    } catch (err) {
      console.error(err);
      alert("Failed to place order");
    }
  };

  if (orderPlaced) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-10 rounded-lg shadow-lg text-center max-w-md">
          <h2 className="text-2xl font-bold mb-2 text-green-600">✔ Order Placed!</h2>
          <p className="text-gray-800">
            Your order has been successfully placed. We’ll deliver it soon.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-start py-10 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">

        {/* Information form */}
        <div className="bg-white p-6 rounded-lg shadow-lg space-y-4">
          <h2 className="text-xl font-bold text-gray-900">Delivery Information</h2>
          <input
            type="text"
            name="full_name"
            placeholder="Your Name"
            value={form.full_name}
            onChange={handleChange}
            className="w-full border rounded p-2 placeholder-gray-500 text-gray-800"
          />
          <input
            type="email"
            name="email"
            placeholder="yourname@example.com"
            value={form.email}
            onChange={handleChange}
            className="w-full border rounded p-2 placeholder-gray-500 text-gray-800"
          />
          <input
            type="text"
            name="phone"
            placeholder="0123456789"
            value={form.phone}
            onChange={handleChange}
            className="w-full border rounded p-2 placeholder-gray-500 text-gray-800"
          />
          <textarea
            name="address"
            placeholder="Address"
            value={form.address}
            onChange={handleChange}
            className="w-full border rounded p-2 placeholder-gray-500 text-gray-800"
            rows={3}
          />

          {/* payment method */}
          <div className="mt-2">
            <label className="block mb-1 font-semibold text-gray-900">Payment Method</label>
            <select
              name="payment_method"
              value={form.payment_method}
              onChange={handleChange}
              className="w-full border rounded p-2 text-gray-800"
            >
              <option value="cod">Cash on Delivery</option>
              <option value="bank">Bank Transfer</option>
            </select>
          </div>

          {/* Summary */}
          <div className="mt-4 border-t pt-4 space-y-2 text-right text-gray-800">
            <p>Sub Total: {total.toFixed(2)}</p>
            <p>Delivery Fee: {deliveryFee.toFixed(2)}</p>
            <h2 className="text-xl font-bold text-gray-900">Total: {finalTotal.toFixed(2)}</h2>
          </div>

          {/* buttons */}

          <div className="flex justify-between mt-4">
            <button
              className="px-4 py-2 border rounded hover:bg-gray-100 text-gray-800"
              onClick={() => window.history.back()}
            >
              Cancel
            </button>
            <button
              className="px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700"
              onClick={handlePlaceOrder}
            >
              Place Order
            </button>
          </div>
        </div>

        {/* Order Summary / Cart Preview */}
        <div className="bg-white p-6 rounded-lg shadow-lg space-y-4">
          <h2 className="text-xl font-bold text-gray-900">Order Summary</h2>
          {items.map((item) => (
            <div key={item.id} className="flex justify-between border-b py-2 text-gray-800">
              <span>{item.name} x {item.quantity}</span>
              <span>{(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
          <div className="border-t pt-2 text-right space-y-1 text-gray-800">
            <p>Sub Total: {total.toFixed(2)}</p>
            <p>Delivery Fee: {deliveryFee.toFixed(2)}</p>
            <h2 className="font-bold text-lg text-gray-900">Total: {finalTotal.toFixed(2)}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
