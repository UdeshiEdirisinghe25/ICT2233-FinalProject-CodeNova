import React from 'react';
import Image from 'next/image';
import { FaHeart, FaUsers, FaMedal, FaMapMarkerAlt, FaPhone, FaClock } from 'react-icons/fa';
import Link from 'next/link';

export default function About() {
  return (

    // orange-100
    <div className="min-h-screen bg-orange-100 py-10">

      {/* Main Content */}

      <section className="px-6 md:px-20">
        <div className="max-w-7xl mx-auto bg-white p-12 rounded-xl shadow-2xl">
          <h1 className="text-5xl font-bold text-center mb-2 text-gray-900">
            About Us
          </h1>
          <p className="text-xl text-center text-gray-600 mb-12">
            Serving delicious meals with passion since day one
          </p>

          <div className="flex flex-col lg:flex-row gap-12">

            {/* Our story content*/}

            <div className="lg:w-1/2 p-8 bg-white rounded-lg shadow-inner border border-gray-100">
              <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b-2 border-orange-600 pb-2">
                Our Story
              </h2>
              
              
               {/* IMAGE FRAME */}
              <div className="mb-6 rounded-lg overflow-hidden shadow-md w-full max-h-72 aspect-video relative mx-auto"> 
                <Image
                  src="/story.jpeg"
                  alt="Our Story at Savory Delights"
                  layout="fill" 
                  objectFit="cover" 
                  className="rounded-lg"
                />
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Savory Delights was born from a passion for creating exceptional 
                dining experiences. We believe that great food brings people 
                together and creates lasting memories.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Every dish we serve is crafted with care, using the "freshest 
                ingredients" and time-honored cooking techniques. Our diverse 
                menu celebrates flavors from around the world, offering something 
                special for every palate.
              </p>
              <p className="text-gray-700 leading-relaxed">
                From our signature burgers to our refreshing salads, each item 
                reflects our commitment to quality and taste. We're not just 
                serving food; we're creating experiences that delight and satisfy.
              </p>
            </div>

            {/* cards */}

            <div className="lg:w-1/2 space-y-6 pt-16 lg:pt-0">
              
              {/* Made With Love */}

              <div className="flex items-start p-6 bg-white rounded-lg shadow-md border-t-4 border-orange-600">
                <FaHeart size={30} className="text-orange-600 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-1 text-gray-900">Made With Love</h3>
                  <p className="text-gray-600">Every dish is prepared with passion and attention to detail, ensuring the best experience.</p>
                </div>
              </div>

              {/* Community Focused */}

              <div className="flex items-start p-6 bg-white rounded-lg shadow-md border-t-4 border-orange-600">
                <FaUsers size={30} className="text-orange-600 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-1 text-gray-900">Community Focused</h3>
                  <p className="text-gray-600">We're proud to be part of the community, serving families and friends every day.</p>
                </div>
              </div>

              {/* Quality First */}

              <div className="flex items-start p-6 bg-white rounded-lg shadow-md border-t-4 border-orange-600">
                <FaMedal size={30} className="text-orange-600 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-1 text-gray-900">Quality First</h3>
                  <p className="text-gray-600">Only the finest ingredients make it to your plate. Quality is never compromised.</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Visit Us Today Section */}
      
      <section className="bg-orange-600 py-16 px-6 md:px-20 mt-10"> 
        <div className="max-w-4xl mx-auto text-center text-white"> 
          <h2 className="text-3xl font-bold mb-4 text-white"> 
            Visit Us Today
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Experience the perfect blend of taste, quality and atmosphere. We can't wait to serve you!
          </p>
          
          <div className="inline-block p-6 rounded-xl bg-orange-700 shadow-xl"> 
            <div className="space-y-4">

              {/* Address */}

              <div className="flex items-center justify-center text-lg text-white font-semibold"> 
                <FaMapMarkerAlt size={20} className="text-white mr-3 flex-shrink-0" /> 
                <a 
                  href="https://www.bing.com/ck/a?!&&p=fa323cbd5b1efd46265e85814b18cdea893a7c89cf6653bc6d4152989011583aJmltdHM9MTc2NDU0NzIwMA&ptn=3&ver=2&hsh=4&fclid=3ea94147-eb00-67ce-31be-54c5ea5a6666&u=a1L21hcHM_Jm1lcGk9MH5-RW1iZWRkZWR-QWRkcmVzc19MaW5rJnR5PTE4JnE9U3BpY2UlMjBUcmFpbCZzcz15cGlkLllOODEwNHgxNzAxMjk2MTk4NjAyMjUzNDExMiZwcG9pcz02Ljk3MzM4ODE5NTAzNzg0Ml83OS45MTk0NzkzNzAxMTcxOV9TcGljZSUyMFRyYWlsX1lOODEwNHgxNzAxMjk2MTk4NjAyMjUzNDExMn4mY3A9Ni45NzMzODh-NzkuOTE5NDc5JnY9MiZzVj0xJkZPUk09TVBTUlBM" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-gray-200 transition duration-200"
                >
                  32/B, Kandy Road, Dalugama, Kelaniya
                </a>
              </div>

              {/* Phone */}

              <div className="flex items-center justify-center text-lg text-white font-semibold"> 
                <FaPhone size={20} className="text-white mr-3 flex-shrink-0" /> 
                <a 
                  href="tel:+94704512438" 
                  className="hover:text-gray-200 transition duration-200"
                >
                  
                +94 70 451 2438

                </a>
              </div>

              {/* Hours */}
              
              <div className="flex items-center justify-center text-lg text-white font-semibold"> 
                <FaClock size={20} className="text-white mr-3 flex-shrink-0" /> 
                <span>Mon-Sun: 09:00 AM - 11:00 PM</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}