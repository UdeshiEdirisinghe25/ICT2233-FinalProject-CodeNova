"use client";

import React from "react";

export default function AdminMenuPage() {
  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-xl p-6">
        <h1 className="text-3xl font-semibold mb-4">Admin Menu Management</h1>

        <p className="text-gray-700 mb-6">
          Use this page to manage your restaurant menu items. You can add, edit,
          delete, or update menu information here.
        </p>

        {/* Example Layout – You can replace this with actual components later */}
        <div className="space-y-4">
          <div className="border p-4 rounded-md bg-gray-100">
            <h2 className="text-xl font-medium mb-2">Menu Items</h2>
            <p className="text-gray-600">Your menu list will appear here.</p>
          </div>

          <div className="border p-4 rounded-md bg-gray-100">
            <h2 className="text-xl font-medium mb-2">Actions</h2>
            <button className="px-4 py-2 bg-orange-600 text-white rounded-lg">
              Add New Item
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
