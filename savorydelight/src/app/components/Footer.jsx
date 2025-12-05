import Image from "next/image";
import {FaInstagram, FaFacebook, FaYoutube} from 'react-icons/fa'

export default function Footer() {
    return (
        <footer className="bg-[#222021] text-gray-200 py-0.5">
           
            <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-4 px-6 pt-8 items-start">
                
                <div className="col-span-1 md:col-span-2">
                    <div className="flex items-start space-x-3"> 
                        <Image 
                            src="/logo2.png"
                            alt="logo"
                            width={100} 
                            height={100} 
                            className="mr-2"
                        />
                        <div>
                            <h3 className="text-2xl font-semibold text-orange-600 mb-2">Savory Delights</h3>
                            <p className="text-sm">Serving delicious, fresh meals made with love and quality ingredients.</p>
                        </div>
                    </div>
                </div>

                
                <div className="col-span-1">
                    <h3 className="font-semibold mb-4 text-lg">Explore</h3>

                    <ul className="space-y-1 text-sm jflex flex-col items-center"> 
                        <li><a href="/home" className="hover:text-orange-500 transition duration-300">Home</a></li>
                        <li><a href="/menu" className="hover:text-orange-500 transition duration-300">Menu</a></li>
                        <li><a href="/about" className="hover:text-orange-500 transition duration-300">About</a></li>
                        <li><a href="/contact" className="hover:text-orange-500 transition duration-300">Contact Us</a></li>
                    </ul>
                </div>

                {/*Social Media*/}
                <div className="col-span-1">
                    <h3 className="text-lg font-semibold mb-4 text-gray-200">Connect with us!</h3>
                    <div className="flex space-x-4">
                        <a 
                            className="w-9 h-9 flex items-center justify-center rounded-full bg-white hover:bg-purple-200 transition duration-300">
                            <FaInstagram size={18} className="text-pink-500" />
                        </a>
                        <a 
                            className="w-9 h-9 flex items-center justify-center rounded-full bg-white hover:bg-blue-300 transition duration-300">
                            <FaFacebook size={18} className="text-blue-500" />
                        </a>
                        <a 
                            className="w-9 h-9 flex items-center justify-center rounded-full bg-white hover:bg-red-300 transition duration-300">
                            <FaYoutube size={18} className="text-red-500" />
                        </a>

                    </div>
                   
                </div>

                <div className="col-span-1 mb-4">
                    <div className="mb-6">
                        <h4 className="text-lg font-semibold mb-2">
                        About Savory Delights
                        </h4>
                        <p className="text-sm text-gray-300 leading-relaxed">
                        Savory Delights is an artisan kitchen. We are celebrated for our commitment to premium ingredients, hand-crafted savory meals, and consistent quality in every dish.</p>
                    </div>
                    <div className="col-span-1">
                        <p className="text-sm font-extrabold tracking-tight text-white italic">
                        Taste the difference quality makes.
                        </p>
                    </div>
                </div>

            </div>

           
            <div className="my-8"> 
                <hr className="border-gray-600"/>        {/* Separator Line */}
            </div>

          
            <div className="text-center text-sm mt-6">
                © {new Date().getFullYear()} Savory Delights. All rights reserved.   {/* Copyright Section */}
            </div>
        </footer>
    )
}