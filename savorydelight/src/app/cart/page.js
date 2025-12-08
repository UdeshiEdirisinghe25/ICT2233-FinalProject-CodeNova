"use client";

import useCart from "@/lib/useCart";
import Link from "next/link";

export default function CartPage() {
  const { items, updateQuantity, removeFromCart, total } = useCart();

  const deliveryFee = items.length > 0 ? 300.0 : 0;
  const finalTotal = total + deliveryFee;

  if (items.length === 0) {
    return (
      <div className="p-10 text-center">
        <h2 className="text-3xl font-bold mb-4 text-black">Your Cart is Empty</h2>
        <Link href="/menu" className="text-orange-600 underline">
          Go back to Menu
        </Link>
      </div>
    );
  }

  return (
    <div className="px-6 md:px-20 py-10 min-h-screen bg-orange-100">
      <h1 className="text-4xl font-bold mb-8 text-black">Your Cart</h1>

      <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between border-b py-4"
          >
            {/* item info */}
            <div className="flex-1">
              <h3 className="font-bold text-black">{item.name}</h3>
              <p className="text-gray-800">Price: {item.price.toFixed(2)}</p>
            </div>

            {/*  controls */}

            <div className="flex items-center gap-2">
              <button
                className="px-3 py-1 bg-orange-600 text-black font-bold rounded"
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                disabled={item.quantity <= 1}
              >
                -
              </button>

              <span className="px-3 text-center w-8 font-semibold text-black">
                {item.quantity}
              </span>

              <button
                className="px-3 py-1 bg-orange-600 text-black font-bold rounded"
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
              >
                +
              </button>
            </div>

            {/* Remove */}
            <button
              className="ml-4 text-red-600 font-semibold"
              onClick={() => removeFromCart(item.id)}
            >
              Remove
            </button>

            {/*  Total */}
            <div className="text-right text-black font-semibold w-20">
              { (item.price * item.quantity).toFixed(2) }
            </div>
          </div>
        ))}

        {/* Summary */}
        <div className="mt-6 text-right space-y-2">
          <p className="text-black font-semibold">
            Subtotal: {total.toFixed(2)}
          </p>
          <p className="text-black font-semibold">
            Delivery Fee: {deliveryFee.toFixed(2)}
          </p>
          <h2 className="text-2xl font-bold text-black">
            Total: {finalTotal.toFixed(2)}
          </h2>

          <Link
            href="/checkout"
            className="mt-4 inline-block px-6 py-3 bg-orange-600 text-white rounded"
          >
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </div>
  );
}
