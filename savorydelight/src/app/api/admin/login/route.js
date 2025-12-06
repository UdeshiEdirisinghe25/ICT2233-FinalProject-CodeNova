import pool from '@/lib/db';
import bcrypt from 'bcryptjs';
import { createToken } from '@/lib/auth';


const jsonResponse = (data, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    const client = await pool.connect();
    try {
      const res = await client.query('SELECT * FROM admin WHERE email = $1', [email]);
      const user = res.rows[0];

      if (!user) return jsonResponse({ error: 'User not found' }, 404);

      const valid = await bcrypt.compare(password, user.password);
      if (!valid) return jsonResponse({ error: 'Invalid password' }, 401);

      return jsonResponse({ message: 'Login successful' }, 200);
    } finally {
      client.release();
    }

  } catch (err) {
    console.error(err);
    return jsonResponse({ error: 'Server error' }, 500);
  }
}
