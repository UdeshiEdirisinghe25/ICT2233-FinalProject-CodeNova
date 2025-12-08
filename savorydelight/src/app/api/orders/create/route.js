import { NextResponse } from "next/server";
import pool from "@/lib/db";

export async function POST(req) {
  try {
    const { full_name, address, phone, payment_method, items } = await req.json();

    if (!items || items.length === 0) {
      return NextResponse.json({ error: "Cart is empty" }, { status: 400 });
    }

    const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

    // insert order
    const orderRes = await pool.query(
      `INSERT INTO orders (full_name, address, phone, payment_method, total)
       VALUES ($1, $2, $3, $4, $5)
       RETURNING id`,
      [full_name, address, phone, payment_method, total]
    );

    const orderId = orderRes.rows[0].id;

    // Insert order items
    for (const item of items) {
      await pool.query(
        `INSERT INTO order_items (order_id, menuitem_id, quantity, item_total)
         VALUES ($1, $2, $3, $4)`,
        [orderId, item.id, item.quantity, item.price * item.quantity]
      );
    }

    return NextResponse.json({ message: "Order created", orderId });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: err.message || "Database error" }, { status: 500 });
  }
}
