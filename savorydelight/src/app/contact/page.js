import { FaPhone, FaEnvelope, FaClock, FaMapMarkerAlt } from 'react-icons/fa';

// Google Maps Embed URL
const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d31682.434722001224!2d79.8985906282084!3d6.973375347267474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sSpice%20Trail%20Restaurant!5e0!3m2!1sen!2slk!4v1764691449029!5m2!1sen!2slk"; 

// Metadata (For App Router)
export const metadata = {
  title: "Contact Savory Delights | Order Now", 
  description: "Crave something delicious? Contact Savory Delights for orders and delivery information.", 
};


// 1. Orange Card  (Main Button Card)
const OrangeCard = ({ isCenter }) => (
   <div className={`p-8 rounded-lg shadow-lg bg-white/80 text-gray-900 backdrop-blur-sm 
        ${isCenter ? 'col-span-4 flex flex-col justify-center items-center' : ''}`}>
        
        <div className="flex flex-col items-center w-full max-w-lg">
            <h3 className="text-3xl font-bold mb-4 text-orange-600">Order Now</h3>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 w-full justify-center">
                {/* Hotline Button: Orange Background */}
                <a 
                    href="tel:0704512438" 
                    className="flex items-center justify-center bg-orange-600 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:bg-orange-700 transition duration-300 w-full sm:w-auto text-lg"
                >
                    <FaPhone className="mr-2" /> 070 4512438
                </a>
                {/* Email Button: Orange Background */}
                <a 
                    href="mailto:support@savorydelights.com" 
                    className="flex items-center justify-center bg-orange-600 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:bg-orange-700 transition duration-300 w-full sm:w-auto text-lg"
                >
                    <FaEnvelope className="mr-2" /> Email Us
                </a>
            </div>
            {/* Email Text */}
            <p className="text-sm mt-4 text-gray-700 opacity-90">support@savorydelights.com</p>
        </div>
    </div>
);

// Info Grid Card (For Lower Section) - White Cards
const InfoGridCard = ({ icon, title, content, description, iconColor, link }) => (
    <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-[#ff7043] transition duration-300 hover:shadow-lg">
        <div className={`text-3xl mb-3 ${iconColor}`}>
            {icon}
        </div>
        <h4 className="text-base font-semibold text-gray-700">{title}</h4>
        {link ? (
            <a href={link} className="text-xl font-bold text-[#ff5722] hover:text-[#e64a19] transition duration-300 block my-1">
                {content}
            </a>
        ) : (
            <p className="text-xl font-bold text-gray-900 my-1">{content}</p>
        )}
        <p className="text-xs text-gray-500">{description}</p>
    </div>
);

export default function ContactPage() {
  return (
    <main>
        {/* Combined Hero and Order Section (Food Image Background with WHITE Overlay) */}
        <section 
            style={{ 
                backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), url("/images/food-background.jpg")', 
                backgroundSize: 'cover', 
                backgroundPosition: 'center', 
                backgroundColor: '#f5f5f5' // Light grey backup color
            }} 
            className="text-gray-900 pt-20 pb-28 px-4 md:px-8 relative overflow-hidden" 
        >
            <div className="container mx-auto max-w-6xl text-center relative z-10">
                
                {/* Hero Content: Text Color කළු පැහැයට හැරේ */}
                <p className="text-xl italic font-bold mb-2 text-white">
    Cravings something delicious? We're here to help!
</p>

<h1 className="text-7xl font-extrabold mb-4 text-gray-900 drop-shadow-sm">
    Contact Savory Delights
</h1>

<p className="text-xl font-bold mb-12 text-white">
    Craving something delicious? Have questions about your order? We'd love to hear from you!
</p>




                {/* Order Buttons Placed Directly Inside the Hero Section */}
                <div className="flex justify-center mt-10">
                    <OrangeCard isCenter={true} />
                </div>
            </div>
        </section>



        {/* Lower Section: Detailed Info and Map (White cards) */}
        <section className="bg-gray-50 py-12 px-4 md:px-8 -mt-20 relative z-30"> 
            <div className="container mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-3 gap-8">
                
                {/* Left Column: Detailed Info Grid (White Cards) */}
                <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                    
                    <InfoGridCard
                        icon={<FaPhone />}
                        title="Order Hotline"
                        content="0704512438"
                        description="Available 9:00am - 11:00pm"
                        iconColor="text-orange-500"
                        link="tel:0704512438"
                    />

                    <InfoGridCard
                        icon={<FaEnvelope />}
                        title="Email Support"
                        content="support@savorydelights.com"
                        description="24 hour response"
                        iconColor="text-orange-500"
                        link="mailto:support@savorydelights.com"
                    />
                    
                    <InfoGridCard
                        icon={<FaMapMarkerAlt />}
                        title="Delivery Area"
                        content="Colombo & Suburbs"
                        description="Free delivery over Rs. 1500"
                        iconColor="text-orange-500"
                    />

                    <InfoGridCard
                        icon={<FaClock />}
                        title="Delivery Hours"
                        content="Mon-Sun 11am - 10pm"
                        description="30-45 min delivery"
                        iconColor="text-orange-500"
                    />
                </div>

                {/* Right Column: Map Container */}
                <div className="lg:col-span-1">
                    <div className="bg-white p-4 rounded-lg shadow-xl h-full flex flex-col">
                        <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                            <FaMapMarkerAlt className="text-orange-500 mr-2" />
                            Our Delivery Zone
                            <span className="ml-auto text-xs text-green-600 bg-green-100 px-2 py-0.5 rounded-full">
                                Accepting orders
                            </span>
                        </h4>
                        
                        <div className="flex-grow rounded-lg overflow-hidden border border-gray-200">
                            <iframe
                                src={mapEmbedUrl}
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Our Delivery Zone Map"
                            />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    </main>
  );
}