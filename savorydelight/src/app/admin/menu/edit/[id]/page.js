
"use client";

import { useRouter, useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function EditMenuPage() {
  const router = useRouter();
  const params = useParams();
  const id = params.id;
  const [form, setForm] = useState({ name: "", description: "", price: "", category: "", image: "" });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    fetch(`/api/menu/list`)
      .then(r => r.json())
      .then(data => {
        const item = (data.items || []).find(i => String(i.id) === String(id));
        if (item) setForm({ name: item.name || "", description: item.description || "", price: String(item.price || ""), category: item.category || "", image: item.image || "" });
        setLoading(false);
      })
      .catch(err => { console.error(err); setLoading(false); });
  }, [id]);

  const onChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`/api/menu/update/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, price: Number(form.price) })
      });
      if (!res.ok) {
        const err = await res.json();
        alert("Update failed: " + (err.error || "unknown"));
        return;
      }
      router.push("/admin/menu");
    } catch (err) {
      console.error(err);
      alert("Update error");
    }
  };

  if (loading) return <div className="p-10">Loading...</div>;

  return (
    <div className="flex min-h-screen bg-gray-100 items-start p-10">
      <div className="bg-white rounded p-8 w-full max-w-lg shadow">
        <h2 className="text-xl font-bold mb-4">Edit Menu Item</h2>
        <form onSubmit={onSubmit} className="space-y-4">
          <input name="name" value={form.name} onChange={onChange} placeholder="Name" className="w-full border p-2 rounded" required />
          <textarea name="description" value={form.description} onChange={onChange} placeholder="Description" className="w-full border p-2 rounded" />
          <input name="price" type="number" value={form.price} onChange={onChange} placeholder="Price" className="w-full border p-2 rounded" required />
          <input name="image" value={form.image} onChange={onChange} placeholder="Image path e.g. /aussie-burger.png" className="w-full border p-2 rounded" />
          <select name="category" value={form.category} onChange={onChange} className="w-full border p-2 rounded" required>
            <option value="">Select category</option>
            <option>Appetizers</option><option>Salads</option><option>Burgers</option><option>Pizza</option><option>Pasta</option><option>Desserts</option><option>Beverages</option>
          </select>

          <div className="flex justify-between">
            <button type="button" onClick={() => router.push("/admin/menu")} className="px-4 py-2 bg-gray-300 rounded">Cancel</button>
            <button type="submit" className="px-4 py-2 bg-orange-600 text-white rounded">Save changes</button>
          </div>
        </form>
      </div>
    </div>
  );
}
