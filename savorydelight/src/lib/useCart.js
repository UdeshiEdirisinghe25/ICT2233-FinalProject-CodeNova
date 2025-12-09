"use client";
import { useState, useEffect } from "react";

export default function useCart() {
  const [items, setItems] = useState([]);

  // Load cart 
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("cart") || "[]");
    
    const parsed = saved.map(item => ({ ...item, price: Number(item.price) }));
    setItems(parsed);
  }, []);

  // Save cart to localStorage
  const save = (newItems) => {
    
    const parsed = newItems.map(item => ({ ...item, price: Number(item.price) }));
    localStorage.setItem("cart", JSON.stringify(parsed));
    setItems(parsed);
  };

  // add 
  const addToCart = (item) => {
    const exist = items.find((i) => i.id === item.id);
    const newItem = { ...item, price: Number(item.price) }; // ensure number
    let newCart;
    if (exist) {
      newCart = items.map((i) =>
        i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
      );
    } else {
      newCart = [...items, { ...newItem, quantity: 1 }];
    }
    save(newCart);
  };

  // update quantity
  const updateQuantity = (id, qty) => {
    if (qty < 1) return removeFromCart(id);
    save(items.map((i) => (i.id === id ? { ...i, quantity: qty } : i)));
  };

  // remove 
  const removeFromCart = (id) => {
    save(items.filter((i) => i.id !== id));
  };

  // Clear 
  const clearCart = () => {
    localStorage.removeItem("cart");
    setItems([]);
  };

  // Calculate total
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return { items, addToCart, updateQuantity, removeFromCart, clearCart, total };
}
