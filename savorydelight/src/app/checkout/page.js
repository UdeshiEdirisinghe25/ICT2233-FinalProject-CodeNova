"use client"

import { useState } from "react"

const THEME = {
      PRIMARY: "bg-orange-600", 
      PRIMARY_TEXT: "text-orange-600",
      PRIMARY_HOVER: "hover:bg-orange-700",
      PRIMARY_RING: "focus:ring-orange-500/80",
      BG_SCREEN: "bg-gray-50 min-h-screen", 
      BG_CONTAINER: "bg-white", 
      TEXT: "text-gray-900", 
      MUTED_TEXT: "text-gray-600" 

} 

const INITIAL_CART_ITEMS = [
    { id: 1, name: "Classic Burger", price: 1700.00, quantity: 2, image: "https://placehold.co/96x96/ff6347/ffffff?text=B" },
    { id: 2, name: "Creamy Alfredo Pasta", price: 2000.00, quantity: 1, image: "https://placehold.co/96x96/3cb371/ffffff?text=F" },
]

function calculateTotal(items) {
    return items.reduce((acc, item) => acc + item.price * item.quantity, 0)
}

const useCart = () => {
    const items = INITIAL_CART_ITEMS; 
    const total = calculateTotal(items)
    const clearCart = () => { console.log("Mock: Cart cleared after order placement.") }
    return { items, clearCart, total }
}

const useOrders = () => {
    const placeOrder = (orderData) => { console.log("Order Placed (Mock):", orderData) }
    return { placeOrder }
}

const Button = ({ children, onClick, className, type, variant, size, disabled, ...props }) => {
    const baseStyle = "py-2 px-4 rounded-xl font-semibold transition-all duration-200"
    let style = baseStyle

    if (variant === "outline") {
        style += ` text-gray-900 border border-gray-300 hover:bg-gray-100 bg-white`
    } else if (variant === "ghost") {
        style += ` ${THEME.TEXT_CLASS} hover:bg-orange-50/50` 
    } else { 
        style += ` ${THEME.PRIMARY} text-white ${THEME.PRIMARY} shadow-md`
    }

    if (disabled) {
        style += " opacity-50 cursor-not-allowed"
    }
    
    if (size === "lg") {
        style += " py-3 px-6 text-lg"
    }

    return (
        <button 
            type={type || "button"} 
            onClick={onClick} 
            className={`${style} ${className}`} 
            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    )
}


export default function CheckoutPage() {
    const { placeOrder } = useOrders()
    const { items, total, clearCart } = useCart()
    const [formData, setFormData] = useState({
        customerName: "",
        customerEmail: "",
        customerPhone: "",
        deliveryAddress: "",
       
        paymentMethod: "cash_on_delivery",
    })
    const [orderStatus, setOrderStatus] = useState(null)
    const [validationError, setValidationError] = useState("") 

    
    const deliveryFee = total > 0 ? 300.00 : 0
    const finalTotal = total + deliveryFee 

    const handleFormChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
       
        if (validationError) {
            setValidationError("");
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        if (total <= 0) {
            console.error("Cannot place an order with an empty cart.")
            return; 
        }
        
        
        if (!formData.customerName || !formData.customerEmail || !formData.deliveryAddress || !formData.paymentMethod) {
            
            setValidationError("Please fill in all required delivery information and select a payment method.");
            return;
        }

        setOrderStatus('placing');
        setValidationError(""); 

        
        setTimeout(() => {
            placeOrder({
                items, subtotal: total, deliveryFee, total: finalTotal,
                ...formData, 
                status: "pending",
            })
            
            setOrderStatus('success');
            
            
            setTimeout(() => {
                clearCart()
                
                window.location.href = "/confirmation" 
            }, 2000)
        }, 1000)
    }

    
    if (items.length === 0 && orderStatus !== 'success') {
        return (
            <div className={`min-h-[50vh] flex items-center justify-center ${THEME.BG_SCREEN}`}>
                <div className={`max-w-xl mx-auto px-6 py-12 ${THEME.BG_CONTAINER} rounded-xl shadow-lg w-full text-center`}>
                    <h2 className={`text-3xl font-bold ${THEME.TEXT} mb-4`}>Your Cart is Empty!</h2>
                    <p className={THEME.MUTED_TEXT}>Please add items to your cart before proceeding to checkout.</p>
                    <a href="/menu" className="mt-6 inline-block">
                        <Button>Continue Shopping</Button>
                    </a>
                </div>
            </div>
        );
    }
    
    
    if (orderStatus === 'success') {
        return (
            <div className={`min-h-[50vh] flex items-center justify-center ${THEME.BG_SCREEN}`}>
                <div className={`max-w-2xl mx-auto px-4 py-12 ${THEME.BG_CONTAINER} rounded-xl shadow-lg w-full`}>
                    <div className="p-8 text-center">
                        <div className={`${THEME.PRIMARY_TEXT} text-6xl mb-4 font-extrabold`}>🎉</div> 
                        <h2 className={`text-3xl font-extrabold mb-3 ${THEME.TEXT}`}>Order Placed Successfully!</h2>
                        <p className={THEME.MUTED_TEXT}>Redirecting you to the confirmation page...</p>
                    </div>
                </div>
            </div>
        );
    }


    return (
        <div className={`${THEME.BG_SCREEN} py-12 px-4 sm:px-6 lg:px-8 font-sans`}>
            <div className="max-w-lg mx-auto">
                <h1 className={`text-4xl font-extrabold mb-8 ${THEME.TEXT}`}>
                    Checkout Details
                </h1>
                
                <form onSubmit={handleSubmit} className="space-y-6">

                    
                    {validationError && (
                        <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg" role="alert">
                            <p className="font-semibold text-sm">{validationError}</p>
                        </div>
                    )}
                    
                    
                    <div className={`${THEME.BG_CONTAINER} p-8 rounded-xl shadow-lg`}>
                        <h3 className={`text-2xl font-bold mb-6 ${THEME.TEXT}`}>Delivery Information</h3>

                        <div className="space-y-4">
                            <div>
                                <label className={`block text-sm font-medium ${THEME.MUTED_TEXT} mb-1`}>Full Name</label>
                                <input
                                    type="text" name="customerName" required value={formData.customerName} onChange={handleFormChange}
                                    className={`w-full px-4 py-2 border border-gray-300 rounded-lg bg-white ${THEME.TEXT} focus:outline-none focus:ring-2 ${THEME.PRIMARY_RING}`}
                                    placeholder="Your name"
                                />
                            </div>
                            <div>
                                <label className={`block text-sm font-medium ${THEME.MUTED_TEXT} mb-1`}>Email</label>
                                <input
                                    type="email" name="customerEmail" required value={formData.customerEmail} onChange={handleFormChange}
                                    className={`w-full px-4 py-2 border border-gray-300 rounded-lg bg-white ${THEME.TEXT} focus:outline-none focus:ring-2 ${THEME.PRIMARY_RING}`}
                                    placeholder="yourname@example.com"
                                />
                            </div>
                            <div>
                                <label className={`block text-sm font-medium ${THEME.MUTED_TEXT} mb-1`}>Phone Number</label>
                                <input
                                    type="tel" name="customerPhone" required value={formData.customerPhone} onChange={handleFormChange}
                                    className={`w-full px-4 py-2 border border-gray-300 rounded-lg bg-white ${THEME.TEXT} focus:outline-none focus:ring-2 ${THEME.PRIMARY_RING}`}
                                    placeholder="0771234567"
                                />
                            </div>
                            <div>
                                <label className={`block text-sm font-medium ${THEME.MUTED_TEXT} mb-1`}> Address</label>
                                <textarea
                                    name="deliveryAddress" required value={formData.deliveryAddress} onChange={handleFormChange}
                                    className={`w-full px-4 py-2 border border-gray-300 rounded-lg bg-white ${THEME.TEXT} focus:outline-none focus:ring-2 ${THEME.PRIMARY_RING}`}
                                    placeholder="No.22, Main Street , Colombo 07" rows={3}
                                />
                            </div>
                        </div>
                    </div>

                    
                    <div className={`${THEME.BG_CONTAINER} p-8 rounded-xl shadow-lg`}>
                        <h3 className={`text-2xl font-bold mb-6 ${THEME.TEXT}`}>Payment Method</h3>
                        <div className="space-y-3">
                            
                            
                            <label htmlFor="cash_on_delivery" className="flex items-center space-x-3 cursor-pointer p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                                <input 
                                    type="radio" 
                                    id="cash_on_delivery" 
                                    name="paymentMethod" 
                                    value="cash_on_delivery" 
                                    checked={formData.paymentMethod === 'cash_on_delivery'} 
                                    onChange={handleFormChange}
                                    className={`h-4 w-4 ${THEME.PRIMARY_TEXT} border-gray-300 focus:ring-2 ${THEME.PRIMARY_RING}`}
                                    required 
                                />
                                <span className={`text-sm font-medium ${THEME.TEXT}`}>Cash on Delivery</span>
                            </label>
                            
                           
                            <label htmlFor="basic_transfer" className="flex items-center space-x-3 cursor-pointer p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                                <input 
                                    type="radio" 
                                    id="basic_transfer" 
                                    name="paymentMethod" 
                                    value="basic_transfer" 
                                    checked={formData.paymentMethod === 'basic_transfer'} 
                                    onChange={handleFormChange}
                                    className={`h-4 w-4 ${THEME.PRIMARY_TEXT} border-gray-300 focus:ring-2 ${THEME.PRIMARY_RING}`}
                                />
                                <span className={`text-sm font-medium ${THEME.TEXT}`}>Bank Transfer</span>
                            </label>
                        </div>
                    </div>
                    


                    
                    <div className={`${THEME.BG_CONTAINER} border border-gray-200 rounded-xl p-6 shadow-xl`}>
                      

                       
                        <div className={`bg-gray-50 p-4 rounded-xl space-y-2 border border-dashed border-gray-200`}>
                            <div className="flex justify-between text-sm">
                                <span className={THEME.MUTED_TEXT}>Subtotal</span>
                                <span className={`font-medium ${THEME.TEXT}`}>LKR {total.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className={THEME.MUTED_TEXT}>Delivery Fee</span>
                                <span className={`font-medium ${THEME.TEXT}`}>LKR {deliveryFee.toFixed(2)}</span>
                            </div>
                            
                            <div className="flex justify-between font-bold text-xl pt-3 border-t border-gray-200">
                                <span className={THEME.TEXT}> Total</span>
                                <span className={THEME.PRIMARY_TEXT}>LKR {finalTotal.toFixed(2)}</span> 
                            </div>
                        </div>
                        
                        
                        <div className="flex flex-col gap-3 pt-6">
                            <Button 
                                type="submit" 
                                className={`w-full py-3 text-lg font-semibold ${THEME.PRIMARY} text-white ${THEME.PRIMARY_HOVER} transition-colors`} 
                                disabled={total <= 0 || orderStatus === 'placing'} 
                            >
                                {orderStatus === 'placing' ? 'Processing...' : `Place Order `}
                            </Button>
                            <a href="/cart" className="block"> 
                                <Button type="button" variant="outline" className="w-full">
                                    Cancel
                                </Button>
                            </a>
                            <a href="/cart" className="block"> 
                                <Button type="button" variant="outline" className="w-full">
                                    Back to Cart
                                </Button>
                            </a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}