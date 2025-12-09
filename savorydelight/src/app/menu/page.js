"use client";

import React, { useEffect, useState } from "react";
import MenuItemCard from "@/app/components/MenuItemCard";
import useCart from "@/lib/useCart"; 

const categories = ["All","Appetizers","Salads","Burgers","Pizza","Pasta","Desserts","Beverages"];

export default function Menu() {
  const [menuItems, setMenuItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const { addToCart } = useCart();  

  // Fetch menu items
  useEffect(() => {
    fetch("/api/menu/list", { cache: 'no-store' })
      .then(res => res.json())
      .then(data => setMenuItems(data.items))
      .catch(err => console.error(err));
  }, []);

  const filteredItems =
    selectedCategory === "All"
      ? menuItems
      : menuItems.filter(item => item.category === selectedCategory);

  const searchedItems = filteredItems.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-orange-100 px-6 md:px-20 py-10 min-h-screen">
      <h1 className="text-5xl font-bold text-center mb-10 text-black">Our Menu</h1>

      {/* Search Bar */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search menu..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 w-full max-w-md focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-orange-600 bg-gray-100 text-gray-900 placeholder-gray-500"
        />
      </div>

      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-lg border ${selectedCategory === cat ? "bg-orange-600 text-white" : "bg-white text-gray-700"}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Menu grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
        {searchedItems.map(item => (
          <MenuItemCard
            key={item.id}
            name={item.name}
            description={item.description}
            price={item.price}
            image={item.image}
            onAdd={() => addToCart(item)}  
          />
        ))}
      </div>
    </div>
  );
}
