import { NextResponse } from "next/server";
import pool from "@/lib/db";

export async function GET() {
  try {
    const result = await pool.query(`
      SELECT 
        o.id,
        o.full_name,
        o.address,
        o.phone,
        o.payment_method,
        o.total,
        o.created_at,
        STRING_AGG(m.name || ' x' || oi.quantity, ', ') AS items
      FROM orders o
      LEFT JOIN order_items oi ON o.id = oi.order_id
      LEFT JOIN menu_items m ON oi.menuitem_id = m.id
      GROUP BY o.id
      ORDER BY o.id DESC
    `);

    return NextResponse.json({ orders: result.rows });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: err.message || "DB error" }, { status: 500 });
  }
}
