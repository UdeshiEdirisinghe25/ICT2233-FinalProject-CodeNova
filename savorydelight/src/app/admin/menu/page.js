"use client";

import AdminSidebar from "@/app/components/AdminSidebar";
import { FaTrash, FaEdit } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function AdminMenuPage() {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    
    fetch("/api/menu/list", { cache: 'no-store' })

      .then(res => res.json())
      .then(data => setMenuItems(data.items))
      .catch(err => console.error(err));
  }, []);

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this item?")) return;
    await fetch(`/api/menu/delete/${id}`, { method: "DELETE" });


    
    setMenuItems(prev => prev.filter(i => i.id !== id));
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="flex-1 p-8">
        <div className="bg-white rounded-xl p-8 shadow-md">
          <h1 className="text-3xl font-bold mb-1 text-[#1a1a1a]">Menu</h1>
          <p className="text-gray-800 mb-6 font-medium">Manage your menu items and categories</p>

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

          <div className="overflow-auto mt-6 border" style={{ maxHeight: '300px', minWidth: '100%', width: '100%' }}>
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
                {menuItems.map(item => (
                  <tr key={item.id} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-3 font-medium">{item.id}</td>
                    <td className="py-3 px-3 font-medium">{item.name}</td>
                    <td className="py-3 px-3 text-gray-700">{item.description}</td>
                    <td className="py-3 px-3 font-medium">{item.price}</td>
                    <td className="py-3 px-3 text-gray-700">{item.image}</td>
                    <td className="py-3 px-3 text-gray-700">{item.category}</td>
                    <td className="py-3 px-3 flex gap-4">
                      <FaTrash className="text-red-600 cursor-pointer hover:scale-110 transition" onClick={() => handleDelete(item.id)} />
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