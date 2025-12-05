"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaBars, FaSignOutAlt, FaClipboardList } from "react-icons/fa";

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 h-screen bg-[#e1b097] flex flex-col p-6">
      
      {/* Logo Section */}
      <div className="text-center mb-10 flex flex-col items-center">
        <Image
          src="/blackLogo.png"
          width={70}
          height={70}
          alt="Restaurant Logo"
          className="mb-3"
        />
        <h1 className="text-2xl font-bold">ADMIN</h1>
        <p className="text-sm text-gray-700">Dashboard</p>
      </div>

      {/* Menu */}
      <nav className="flex flex-col gap-2">
        <Link
          href="/admin/menu"
          className={`flex items-center gap-3 px-4 py-3 rounded-lg text-black 
            ${pathname.includes("/admin/menu") ? "bg-white" : "hover:bg-white/60"}`}
        >
          <FaBars />
          Menu
        </Link>

        <Link
          href="/admin/order"
          className={`flex items-center gap-3 px-4 py-3 rounded-lg text-black 
            ${pathname.includes("/admin/orders") ? "bg-white" : "hover:bg-white/60"}`}
        >
          <FaClipboardList />
          Orders
        </Link>
      </nav>

      {/* Logout */}
      <div className="mt-auto">
        <button className="flex items-center gap-3 bg-white rounded-lg px-4 py-2">
          <FaSignOutAlt />
          Logout
        </button>
      </div>
    </aside>
  );
}