// src/pages/index.js

import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Contact Page එකට redirect කරන්න
    router.replace('/contact');
  }, [router]);

  // Home Page එක load වන අතරතුර පෙන්වීමට
  return (
    <div className="flex justify-center items-center h-screen">
      <p className="text-xl">Redirecting to Contact Page...</p>
    </div>
  );
}

// 🛑 වැදගත්: ඔබගේ Next.js version (16.0.3) අනුව, 
// ඔබගේ Next.js Config එකේ `trailingSlash: true` තිබේ නම්, 
// `router.replace('/contact/')` ලෙස වෙනස් කරන්න.