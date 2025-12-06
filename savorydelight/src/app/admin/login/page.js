'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

async function login(email, password) {

    const res = await fetch('/api/admin/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });

  // Check if response is JSON 
  const contentType = res.headers.get('content-type');
  let data = {};

  if (contentType && contentType.includes('application/json')) {
    data = await res.json();
  } else {

    const text = await res.text();
    console.error('Non-JSON response from server:', text);
    throw new Error('Server did not return valid JSON.');
  }

  if (!res.ok) {
    throw new Error(data.error || 'Login failed.');
  }

  return data;
}

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const data = await login(email, password);
      console.log('Login success:', data);
      router.push('/admin/menu'); // redirect after login
    } catch (err) {
      console.error('Login failed:', err);
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#d8a48f]">
      <div className="bg-white rounded-lg shadow-lg p-6 w-[600px]">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img src="/logo.png" alt="Logo" className="h-40 w-40" />
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          {error && <p className="px-8 text-red-600 font-medium">⚠️ {error}</p>}

          {/* Email */}
          <div className="px-8">
            <label htmlFor="email" className="block font-bold">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-3/4 border-b-1 border-gray-400 focus:outline-none focus:border-[#d8a48f] py-2"/>
          </div>

          {/* Password */}
          <div className="px-8">
            <label htmlFor="password" className="block font-bold">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-3/4 border-b-1 border-gray-400 focus:outline-none focus:border-[#d8a48f] py-2"/>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-6 px-6 mt-10">
            <button
              type="button"
              onClick={() => {
                setEmail('');
                setPassword('');
                }}
              className="bg-gray-800 text-white font-semibold px-6 py-1 rounded-md hover:bg-gray-600 transition duration-150">
              Clear
            </button>


            <button
              type="submit"
              disabled={isLoading}
              className="bg-[#ECD0C2] text-black font-semibold px-6 py-2 rounded-md hover:bg-[#c48b76] transition duration-150">
              {isLoading ? 'Processing...' : 'Login'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
