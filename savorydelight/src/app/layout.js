"use client";

import { Laila } from "next/font/google";
import "../app/styles/globals.css";
import Navbar from '../app/components/Navbar';
import Footer from "../app/components/Footer";
import { usePathname } from 'next/navigation'; 


const laila = Laila({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-laila', 
});

export default function Layout({ children }) {
  const pathname = usePathname();
  const isAdminRoute = pathname.startsWith('/admin');

  return (
    // FIX 1: Use backticks for the template literal
    <html lang="en" className={`{laila.variable}`}> 
        
        {/* FIX 2: Use quotes for the class names */}
        <body className="antialiased flex flex-col min-h-screen"> 
            
            {!isAdminRoute && <Navbar />}

            <main className="flex-grow"> 
                {children} 
            </main>

            {!isAdminRoute && <Footer/>}
            
        </body>
    </html>
  );
}