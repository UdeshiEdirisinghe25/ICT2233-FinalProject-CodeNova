"use client";

import React, { useState } from "react";
import MenuItemCard from "../components/MenuItemCard";

const menuItems = [
//burgers

{ id: 1, category: "Burgers", name: "Aussie Burger", description: "Juicy beef patty with lettuce, tomato, cheese and special sauce.", price: 1700, image: "/aussie-burger.png" },
{ id: 2, category: "Burgers", name: "Falafel Burger", description: "Crispy falafel with fresh veggies and tahini sauce in a soft bun.", price: 1900, image: "/falafel-burger.png" },
{ id: 3, category: "Burgers", name: "Chicken Burger", description: "Grilled chicken breast with lettuce, mayo and cheddar cheese.", price: 2200, image: "/chicken-burger.png" },

//pasta

{ id: 4, category: "Pasta", name: "Fettuccine Carbonara", description: "Creamy pasta with bacon, parmesan and a hint of garlic.", price: 1800, image: "/fettuccine.png" },
{ id: 5, category: "Pasta", name: "Lasagna", description: "Layers of pasta, beef, tomato sauce and melted cheese.", price: 2800, image: "/lasagna.png" },
{ id: 6, category: "Pasta", name: "Beef Bolognese", description: "Rich beef ragu with spaghetti and parmesan cheese.", price: 2800, image: "/beef-bolongnese.png" },
  { id: 7, category: "Pasta", name: "Shrimp Alfredo", description: "Creamy Alfredo sauce with tender shrimp and fettuccine.", price: 2400, image: "/shrimp-alfredo.png" },

  // Pizza

  { id: 8, category: "Pizza", name: "Pepperoni Pizza", description: "Classic pizza with mozzarella, tomato sauce and pepperoni slices.", price: 3700, image: "/pepperoni-pizza.png" },
  { id: 9, category: "Pizza", name: "Veggie Pizza", description: "Topped with bell peppers, olives, onions, mushrooms and cheese.", price: 2900, image: "/veggie-pizza.png" },
  { id: 10, category: "Pizza", name: "Margherita Pizza", description: "Fresh mozzarella, tomato, basil and a drizzle of olive oil.", price: 3100, image: "/margherita-pizza.png" },

  // Salads

  { id: 11, category: "Salads", name: "Chicken Salad", description: "Fresh lettuce, grilled chicken, cherry tomatoes and vinaigrette.", price: 1600, image: "/chicken-salad.png" },
  { id: 12, category: "Salads", name: "Tuna Salad", description: "Tuna chunks with mixed greens, cucumber and olive oil dressing.", price: 1300, image: "/tuna-salad.png" },

    // Appetizers
  { id: 13, category: "Appetizers", name: "Garlic Bread", description: "Toasted bread slices topped with garlic butter and herbs.", price: 1100, image: "/garlic-bread.jpeg" },
  { id: 14, category: "Appetizers", name: "Spring Rolls", description: "Crispy rolls filled with vegetables and served with sweet chili sauce.", price: 1250, image: "/spring-rolls.jpeg" },
  { id: 15, category: "Appetizers", name: "Chicken Wings", description: "Spicy and crispy chicken wings served with ranch dip.", price: 1900, image: "/chicken-wings.jpeg" },

  // Desserts
  { id: 16, category: "Desserts", name: "Chocolate Lava Cake", description: "Warm chocolate cake with gooey molten center.", price: 900, image: "/chocolate-lava-cake.jpeg" },
  { id: 17, category: "Desserts", name: "Cheesecake", description: "Creamy cheesecake with a buttery graham cracker crust.", price: 1150, image: "/cheesecake.jpeg" },
  { id: 18, category: "Desserts", name: "Fruit Tart", description: "Fresh fruits on a crispy tart base with custard filling.", price: 1600, image: "/fruit-tart.jpeg" },

  // Beverages
  { id: 19, category: "Beverages", name: "Cappuccino", description: "Rich espresso with steamed milk foam.", price: 700, image: "/cappuccino.jpeg" },
  { id: 20, category: "Beverages", name: "Fresh Orange Juice", description: "Cold-pressed fresh orange juice served chilled.", price: 400, image: "/orange-juice.jpeg" },
  { id: 21, category: "Beverages", name: "Iced Latte", description: "Smooth espresso with milk over ice.", price: 650, image: "/iced-latte.jpeg" },
  { id: 22, category: "Beverages", name: "Mineral Water", description: "Refreshing bottled mineral water.", price: 200, image: "/mineral-water.jpeg" },
];

const categories = ["All","Appetizers","Salads","Burgers","Pizza","Pasta","Desserts","Beverages"];

export default function Menu() {
const [selectedCategory, setSelectedCategory] = useState("All");
const [searchTerm, setSearchTerm] = useState("");

const filteredByCategory =
selectedCategory === "All"
? [...menuItems]
: menuItems.filter((item) => item.category === selectedCategory);

const filteredItems = filteredByCategory.filter((item) =>
item.name.toLowerCase().includes(searchTerm.toLowerCase())
);

const sortedItems = filteredItems.sort((a, b) => a.name.localeCompare(b.name));

return ( <div className="bg-orange-100 px-6 md:px-20 py-10 min-h-screen">
  <h1 className="text-5xl font-bold text-center mb-10 text-black">
    Our Menu
  </h1>

  {/* Search Bar*/}

  <div className="flex justify-center mb-6">
  <input
    type="text"
    placeholder="Search menu..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    className="border border-gray-300 rounded-lg px-4 py-2 w-full max-w-md focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-orange-600 bg-gray-100 text-gray-900 placeholder-gray-500"/>
   </div>



  {/* Category Buttons */}

  <div className="flex flex-wrap justify-center gap-3 mb-8">
    {categories.map((cat) => (
      <button
        key={cat}
        onClick={() => setSelectedCategory(cat)}
        className={`px-4 py-2 rounded-lg border ${
          selectedCategory === cat ? "bg-orange-600 text-white" : "bg-white text-gray-700"
        }`}
      >
        {cat}
      </button>
    ))}
  </div>

  {/* Menu Grid */}

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
    {sortedItems.map((item) => (
      <MenuItemCard
        key={item.id}
        name={item.name}
        description={item.description}
        price={item.price}
        image={item.image}
        onAdd={() => console.log("Added to cart:", item.name)}
      />
    ))}
  </div>
</div>

);
}

