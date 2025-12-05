
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ShoppingCartIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navLinks = [

  { name: 'Home', href: '/home' },  
  { name: 'Menu', href: '/menu' },        
  { name: 'About', href: '/about' },
  { name: 'Contact Us', href: '/contact' },
  
]; 

export default function Navbar (){
    const currentPath = usePathname();
    
    return(
        <nav className='bg-white shadow-md rounded-lg px-6 py-3'>
          
            <div className='flex items-center justify-between'>
                <div className='flex items-center space-x-3'>
                    <Image 
                      src="/BlackLogo.png" // savory delight logo
                     alt="Logo" 
                     width={55}  
                     height={55}/>

                     <a href="/" className="text-2xl font-bold font-ui-sans text-orange-600" > Savory Delights </a> 
                </div>

                <div className='hidden md:flex space-x-6 items-center font-semibold text-gray-800 '>

                {navLinks.map((link) => (
                <Link
                    key={link.name}
                    href={link.href}
                    className={`
              ${
                    //style for present page
                 currentPath === link.href
                  ? 'text-orange-600 font-semibold' 
                  : 'text-gray-800'}

                  hover:text-orange-600 transition duration-150`}> {link.name} </Link>
        ))}
                  <Link
                    href="/cart"
                    className="bg-orange-600 text-white px-7 py-2 rounded-lg 
                                flex items-center space-x-2"> 
                    
                    <ShoppingCartIcon className="h-5 w-5" /> 
                    <span>Cart</span>
                    </Link>
                 </div>

            </div>
                
        </nav>
    )
}

