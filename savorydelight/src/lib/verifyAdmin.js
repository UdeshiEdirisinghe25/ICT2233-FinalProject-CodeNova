import { verifyToken } from './auth';
import pool from './db';

export async function requireAdminFromCookie(req) {
 
  const cookieHeader = req.headers.get('cookie') || '';
  const match = cookieHeader.match(/(?:^|; )token=([^;]+)/);
  const token = match ? match[1] : null;
  if (!token) throw new Error('Unauthorized');

  const payload = verifyToken(token);

  // optionally confirm admin exists

  const res = await pool.query('SELECT id FROM Admin WHERE id=$1', [payload.id]);
  if (res.rowCount === 0) throw new Error('Unauthorized');
  return payload;
}
