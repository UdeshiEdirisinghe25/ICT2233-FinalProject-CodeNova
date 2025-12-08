import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import pool from '@/lib/db';
import { createToken } from '@/lib/auth';

export async function POST(req) {
  try {
    const { email, password } = await req.json();
    if (!email || !password) return NextResponse.json({ error: 'Missing fields' }, { status: 400 });

    const r = await pool.query('SELECT * FROM admin WHERE email=$1', [email]);
    if (r.rowCount === 0) return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });

    const admin = r.rows[0];
    const ok = bcrypt.compareSync(password, admin.password);
    if (!ok) return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });

    const token = createToken({ id: admin.id, email: admin.email });

    const res = NextResponse.json({ message: 'Login successful' });

    // set HttpOnly cookie 
    res.cookies.set('token', token, { httpOnly: true, path: '/', maxAge: 60 * 60 * 24 });
    return res;
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
