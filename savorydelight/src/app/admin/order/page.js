"use client";

import React from "react";
import { Search } from "lucide-react"; 

export default function OrderManagementPage({ orders = [] }) {
  // Fill missing rows so UI doesn't collapse (like your original table)
  const filledOrders = [
    ...orders,
    ...Array(5 - orders.length).fill({}), // always 5 rows like your original screenshot
  ];

  return (
    <div className="w-full bg-white p-8 md:p-12 lg:p-16">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Orders</h1>
        <p className="text-gray-500 mt-1">Manage and track customer orders</p>
      </header>

      {/* Search Bar */}
      <div className="flex items-center border border-gray-300 rounded-md p-2 w-full max-w-sm mb-10 shadow-sm">
        <Search className="w-5 h-5 text-gray-500 mr-2" /> {/* ✔ Only icon */}
        <input
          type="text"
          placeholder="Search Orders"
          className="flex-grow border-none outline-none text-gray-700 placeholder-gray-400"
        />
      </div>

      {/* Scrollable Table */}
      <div className="w-full overflow-x-auto rounded-lg border border-gray-200 shadow-md">
        <table className="min-w-[1200px] divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Customer Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Address</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Phone</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Items</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Total</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Payment Method</th>
            </tr>
          </thead>

          <tbody className="bg-white divide-y divide-gray-100">
            {filledOrders.map((order, index) => (
              <tr key={order.id || `empty-${index}`} className="hover:bg-gray-50 h-16">
                <td className="px-6 py-4 text-sm font-medium text-gray-900">
                  {order.id ? `#${order.id}` : ""}
                </td>
                <td className="px-6 py-4 text-sm">{order.customerName || ""}</td>
                <td className="px-6 py-4 text-sm text-gray-500">{order.address || ""}</td>
                <td className="px-6 py-4 text-sm text-gray-500">{order.email || ""}</td>
                <td className="px-6 py-4 text-sm text-gray-500">{order.phone || ""}</td>
                <td className="px-6 py-4 text-sm text-gray-500">{order.items || ""}</td>
                <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                  {order.total ? `$${order.total.toFixed(2)}` : ""}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">{order.date || ""}</td>
                <td className="px-6 py-4 text-sm">
                  {order.paymentMethod === "Card" ? (
                    <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Card</span>
                  ) : order.paymentMethod === "Cash" ? (
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">Cash</span>
                  ) : (
                    ""
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
