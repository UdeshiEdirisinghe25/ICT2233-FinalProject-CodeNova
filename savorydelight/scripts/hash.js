
import bcrypt from 'bcryptjs';

const plain = process.argv[2] || 'Admin@savorydelights123';
const rounds = 10;

(async () => {
  const hash = await bcrypt.hash(plain, rounds);
  console.log(hash);
})();
