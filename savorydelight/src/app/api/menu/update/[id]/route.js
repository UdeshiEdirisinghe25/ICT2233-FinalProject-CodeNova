
import { NextResponse } from "next/server";
import pool from "@/lib/db";

export async function PUT(req, { params }) {
  const id = params.id;
  try {
    const { name, description, price, category, image } = await req.json();

    if (!name || price == null) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const numericPrice = Number(price);
    if (Number.isNaN(numericPrice)) {
      return NextResponse.json({ error: "Invalid price" }, { status: 400 });
    }

    const r = await pool.query(
      `UPDATE menu_items SET name=$1, description=$2, price=$3, category=$4, image=$5
       WHERE id=$6 RETURNING *`,
      [name, description || "", numericPrice, category || "", image || "", id]
    );

    if (r.rowCount === 0) return NextResponse.json({ error: "Not found" }, { status: 404 });

    return NextResponse.json({ item: r.rows[0] }, { status: 200 });
  } catch (err) {
    console.error("DB UPDATE ERROR:", err);
    return NextResponse.json({ error: err.message || "Database error" }, { status: 500 });
  }
}
