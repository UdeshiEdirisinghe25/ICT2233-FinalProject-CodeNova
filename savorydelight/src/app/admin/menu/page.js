"use client";

import AdminSidebar from "@/app/components/AdminSidebar";
import { FaTrash, FaEdit } from "react-icons/fa";

export default function AdminMenuPage() {
  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* Main content */}
      
      <div className="flex-1 p-8">
        <div className="bg-white rounded-xl p-8 shadow-md">

          {/* Title */}

          <h1 className="text-3xl font-bold mb-1 text-[#1a1a1a]">Menu</h1>
          <p className="text-gray-800 mb-6 font-medium">
            Manage your menu items and categories
          </p>

          {/* Top bar */}

          <div className="flex justify-between items-center mb-4">
            <input
              type="text"
              placeholder="Search Menu Items"
              className="border rounded-lg px-4 py-2 w-1/3 focus:outline-none focus:ring text-black"
            />
            <a
              href="/admin/menu/add"
              className="bg-black text-white px-6 py-2 rounded-lg font-semibold hover:bg-gray-800"
            >
              + ADD NEW
            </a>
          </div>

          {/* table */}

          <div
            className="overflow-auto mt-6 border"
            style={{ maxHeight: '300px', minWidth: '100%', width: '100%' }}
          >
            <table className="w-full text-left border-collapse min-w-[1200px]">
              <thead>
                <tr className="border-b text-black font-semibold bg-gray-100 sticky top-0">
                  <th className="py-2 px-3">ID</th>
                  <th className="py-2 px-3">Name</th>
                  <th className="py-2 px-3">Description</th>
                  <th className="py-2 px-3">Price</th>
                  <th className="py-2 px-3">Image</th>
                  <th className="py-2 px-3">Category</th>
                  <th className="py-2 px-3">Action</th>
                </tr>
              </thead>

              <tbody className="text-gray-900">
                {Array.from({ length: 20 }).map((_, idx) => (
                  <tr key={idx} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-3 font-medium">{idx + 1}</td>
                    <td className="py-3 px-3 font-medium">Item {idx + 1}</td>
                    <td className="py-3 px-3 text-gray-700">menu item description</td>
                    <td className="py-3 px-3 font-medium">1000.00</td>
                    <td className="py-3 px-3 text-gray-700">Image</td>
                    <td className="py-3 px-3 text-gray-700">Category</td>
                    <td className="py-3 px-3 flex gap-4">
                      <FaTrash className="text-red-600 cursor-pointer hover:scale-110 transition" />
                      <FaEdit className="text-black cursor-pointer hover:scale-110 transition" />
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
