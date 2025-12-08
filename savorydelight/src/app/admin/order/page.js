"use client";

import AdminSidebar from "@/app/components/AdminSidebar";
import { useEffect, useState } from "react";

export default function AdminOrdersPage() {
  const [orders, setOrders] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("/api/orders/list", { cache: "no-store" })
      .then((res) => res.json())
      .then((data) => setOrders(data.orders || []))
      .catch((err) => console.error(err));
  }, []);

  const filteredOrders = orders.filter(
    (o) =>
      o.full_name?.toLowerCase().includes(search.toLowerCase()) ||
      o.items?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="flex-1 p-8">
        <div className="bg-white rounded-xl p-8 shadow-md">
          <h1 className="text-3xl font-bold mb-1 text-[#1a1a1a]">Orders</h1>
          <p className="text-gray-800 mb-6 font-medium">Manage and track customer orders</p>

          {/* Search bar */}
          
          <div className="flex justify-between items-center mb-4">
            <input
              type="text"
              placeholder="Search Orders"
              className="border rounded-lg px-4 py-2 w-1/3 focus:outline-none focus:ring text-black"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* table */}
          <div
            className="overflow-auto mt-6 border"
            style={{ maxHeight: "400px", minWidth: "100%", width: "100%" }}
          >
            <table className="w-full text-left border-collapse min-w-[1200px]">
              <thead>
                <tr className="border-b text-black font-semibold bg-gray-100 sticky top-0">
                  <th className="py-2 px-3">ID</th>
                  <th className="py-2 px-3">Customer</th>
                  <th className="py-2 px-3">Address</th>
                  <th className="py-2 px-3">Phone</th>
                  <th className="py-2 px-3">Items</th>
                  <th className="py-2 px-3">Total</th>
                  <th className="py-2 px-3">Date</th>
                  <th className="py-2 px-3">Payment</th>
                </tr>
              </thead>
              <tbody className="text-gray-900">
                {filteredOrders.map((order) => (
                  <tr key={order.id} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-3 font-medium">#{order.id}</td>
                    <td className="py-3 px-3 font-medium">{order.full_name}</td>
                    <td className="py-3 px-3 text-gray-700">{order.address}</td>
                    <td className="py-3 px-3 text-gray-700">{order.phone}</td>
                    <td className="py-3 px-3 text-gray-700">{order.items}</td>
                    <td className="py-3 px-3 font-medium">
                      {order.total ? Number(order.total).toFixed(2) : "0.00"}
                    </td>
                    <td className="py-3 px-3 text-gray-700">
                      {order.created_at
                        ? new Date(order.created_at).toLocaleString()
                        : ""}
                    </td>
                    <td className="py-3 px-3 text-gray-700">
                      {order.payment_method === "bank" ? "Bank Transfer" : "Cash on Delivery"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
