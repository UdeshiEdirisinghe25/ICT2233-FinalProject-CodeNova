import Image from 'next/image';
import { FaArrowRight, FaHamburger, FaClock, FaStar } from 'react-icons/fa';


export default function Home () {
    return (
        <main>

            <section className="relative bg-center py-24 px-4 ">
                
                {/* Background Image*/}
                <div className="absolute inset-0 z-0">
                    <Image src="/hero.jpg" alt="Savory Delights Background" layout="fill" className="w-full h-full object-cover"/>
                </div>

                <div className="absolute inset-0 bg-black opacity-50 z-10"></div>


                <div className="relative z-20 text-white text-center">
                    
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        Welcome To Savory Delights 
                    </h1>
                    <p className=" text-lg md:text-xl mb-6 max-w-2xl mx-auto">
                        Experience culinary excellence with every bite. Fresh ingredients, bold flavors, unforgettable moments.
                    </p>
                    <div className="flex justify-center gap-4">
                
                        {/* Menu Button*/}
                        <a 
                            href="/menu" 
                            className="flex items-center space-x-2 bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 shadow-lg">
                            <span>View Menu</span>
                            <FaArrowRight size={14}/>
                        </a>

                        {/*Learn More Button*/}
                        <a 
                            href="/about" 
                            className="bg-gray-300 bg-opacity-0 hover:bg-opacity-50 backdrop-blur-lg hover:bg-gray-200 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 border border-white">
                            Learn More 
                        </a>
                       </div>  
                </div>
        </section>

         {/* Features section*/}
        <section className="bg-[#ECD0C2] py-12 px-4 flex flex-col md:flex-row justify-center items-start gap-12">
            
          
            <div className="text-center max-w-xs flex flex-col items-center">
                <div className="mb-4 bg-orange-600 text-white p-4 rounded-full shadow-lg">
                   
                    <FaHamburger size={36} className="w-9 h-9" /> 
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Quality Foods</h3>
                <p className="text-gray-600">Fresh ingredients and authentic recipes crafted to perfection</p>
            </div>

            
            <div className="text-center max-w-xs flex flex-col items-center">
                <div className="mb-4 bg-green-900 text-white p-4 rounded-full shadow-lg">
                   
                    <FaClock size={36} className="w-9 h-9" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Fast Service</h3>
                <p className="text-gray-600">Quick preparation without compromising on quality or taste</p>
            </div>

            <div className="text-center max-w-xs flex flex-col items-center">
                <div className="mb-4 bg-orange-600 text-white p-4 rounded-full shadow-lg">
                   
                    <FaStar size={36} className="w-9 h-9" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Top Rated</h3>
                <p className="text-gray-600">Loved by customers for our exceptional food and service</p>
            </div>
        </section>

         {/* popular categories*/}

        <section className="text-center py-16 px-4">
                <h2 className="text-3xl font-laila font-bold mb-2 text-gray-800">Popular Categories</h2>
                <p className="text-gray-600 mb-10">Discover Our Most Loved Dishes</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    
                    {/* Salad card*/}
                    <div className="relative rounded-lg overflow-hidden shadow-xl h-64 w-full group cursor-pointer transition-all duration-300 hover:shadow-2xl" >
                        <Image
                            src="/salad1.jpg"
                            alt="Fresh Salads"
                            fill={true}
                            sizes="(max-width: 768px) 100vw, 33vw"
                            className="object-cover transition duration-500 group-hover:scale-110 relative z-0"/>
                        
                        {/* Dark Overlay */}
                        <div className="absolute inset-0 bg-black opacity-20 group-hover:opacity-60 transition duration-300 z-10"></div> 
                        
                        {/* Title Text */}
                        <div className="absolute inset-0 flex items-end justify-start p-6 z-20">
                            <h4 className="text-2xl text-white font-bold tracking-tight">
                                Fresh Salads
                            </h4>
                        </div>
                    </div>
                    
                    {/* Burger card*/}
                    <div className="relative rounded-lg overflow-hidden shadow-xl h-64 w-full group cursor-pointer transition-all duration-300 hover:shadow-2xl">
                        <Image
                            src="/burger.jpg"
                            alt="Classic Burgers"
                            fill={true}
                            sizes="(max-width: 768px) 100vw, 33vw"
                            className="object-cover transition duration-500 group-hover:scale-110 relative z-0"/>
                        
                        {/* Dark Overlay */}
                        <div className="absolute inset-0 bg-black opacity-20 group-hover:opacity-60 transition duration-300 z-10"></div> 
                        
                        {/* Title Text */}
                        <div className="absolute inset-0 flex items-end justify-start p-6 z-20">
                            <h4 className="text-2xl text-white font-bold tracking-tight">
                                Burgers
                            </h4>
                        </div>
                    </div>

                    {/* Pasta card */}
                    <div className="relative rounded-lg overflow-hidden shadow-xl h-64 w-full group cursor-pointer transition-all duration-300 hover:shadow-2xl">
                        <Image
                            src="/pasta1.jpg"
                            alt="Italian Pasta Dishes"
                            fill={true}
                            sizes="(max-width: 768px) 100vw, 33vw"
                            className="object-cover transition duration-500 group-hover:scale-110 relative z-0"/>
                        
                        {/* Dark Overlay */}
                        <div className="absolute inset-0 bg-black opacity-20 group-hover:opacity-60 transition duration-300 z-10"></div> 
                        
                        {/* Title Text */}
                        <div className="absolute inset-0 flex items-end justify-start p-6 z-20">
                            <h4 className="text-2xl text-white font-bold tracking-tight">
                                Italian Pasta
                            </h4>
                        </div>
                    </div>
                </div>
            </section>

        <section className="bg-orange-600 text-white text-center py-12 px-4">
            <h2 className="text-3xl font-bold mb-4">Ready To Order?</h2>
            <p className="mb-6">Browse our full menu and discover your new favorite dish</p>
            
            <a 
                href="/menu" 
                className="inline-flex items-center justify-center space-x-2 bg-white text-orange-600 hover:bg-gray-200 
                           font-semibold py-3 px-8 rounded-lg transition duration-300 shadow-xl text-lg">
                
                <span>Explore Menu</span>
                <FaArrowRight size={16} />
            </a>
        </section>
        </main>
    )
}