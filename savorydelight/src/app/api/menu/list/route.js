import { NextResponse } from 'next/server';
import pool from '@/lib/db';


export const dynamic = 'force-dynamic'; 

export async function GET() {
  try {
 
    const r = await pool.query('SELECT * FROM menu_items ORDER BY id DESC');
    return NextResponse.json({ items: r.rows });   
     } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'DB error' }, { status: 500 });
  }
}