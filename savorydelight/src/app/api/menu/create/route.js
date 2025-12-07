import { NextResponse } from "next/server";
import pool from "@/lib/db";

export async function POST(req) {
  try {
    const { name, description, price, category, image } = await req.json();

    if (!name || !price) {
      return NextResponse.json({ error: "Name and price are required" }, { status: 400 });
    }

    const numericPrice = Number(price);

    const result = await pool.query(
      `INSERT INTO menu_items (name, description, price, category, image) 
       VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      [name, description, numericPrice, category, image]
    );

    return NextResponse.json(result.rows[0], { status: 201 });
  } catch (err) {
    console.error("DB ERROR:", err);
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}
