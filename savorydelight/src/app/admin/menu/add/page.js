"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AddMenuPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    image: ""
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/menu/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (!res.ok) {
        const errorData = await res.json();
        alert("Error: " + errorData.error);
        return;
      }

      // Added success alert and kept the redirect.
      alert("Menu item added successfully!"); 

      
      router.push("/admin/menu"); 
      
    } catch (err) {
      console.error(err);
      alert("Something went wrong while adding the menu item.");
    }
  }

  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="flex-1 flex justify-center items-start p-10">
        <div className="bg-white rounded-xl shadow-md p-10 w-[450px] mt-8">
          <h1 className="text-2xl font-bold text-center mb-8 text-black">ADD Menu Item</h1>
          <form className="flex flex-col gap-6 text-black" onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" onChange={handleChange} className="border rounded-lg px-4 py-2 w-full" required />
            <textarea name="description" placeholder="Description" onChange={handleChange} className="border rounded-lg px-4 py-2 w-full h-24" />
            <input type="number" name="price" placeholder="Price" onChange={handleChange} className="border rounded-lg px-4 py-2 w-full" required />
            <input type="text" name="image" placeholder="Image URL (/images/...)" onChange={handleChange} className="border rounded-lg px-4 py-2 w-full" />
            <select name="category" onChange={handleChange} className="border rounded-lg px-4 py-2 w-full" required>
              <option value="">Select Category</option>
              <option>Appetizers</option>
              <option>Salads</option>
              <option>Burgers</option>
              <option>Pizza</option>
              <option>Pasta</option>
              <option>Desserts</option>
              <option>Beverages</option>
            </select>

            <div className="flex justify-between mt-6">
              <button type="button" onClick={() => router.push("/admin/menu")} className="px-5 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">Cancel</button>
              <button type="reset" className="px-5 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800">Clear</button>
              <button type="submit" className="px-5 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}