'use client'
import axios from 'axios';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async (e: any) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3100/auth/login', { username, password });
      localStorage.setItem('userRole', response.data.role);
      router.push('/main-menu');
    } catch (error) {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-[#D31145]">
      <div className="bg-pink-300 p-8 rounded-lg shadow-lg w-80 lg:w-[36%] lg:h-[40%]">
        <form onSubmit={handleLogin}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="User name"
            className="w-full p-2 mb-4 border rounded-lg"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full p-2 mb-4 border rounded-lg"
          />
          <button type="submit" className="w-full bg-black text-white p-2 rounded-lg">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
