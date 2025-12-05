"use client"

import { useState } from "react"
import { Trash2, Plus, Minus } from "lucide-react"

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

function calculateSubTotal(items) {
    return items.reduce((acc, item) => acc + item.price * item.quantity, 0)
}

const useCart = () => {
    const [items, setItems] = useState(INITIAL_CART_ITEMS)
    const total = calculateSubTotal(items)

    const removeFromCart = (id) => setItems(prev => prev.filter(item => item.id !== id))
    const clearCart = () => setItems([])
    const updateQuantity = (id, newQuantity) => {
        if (newQuantity < 1) {
            removeFromCart(id)
            return
        }
        setItems(prev => prev.map(item => 
            item.id === id ? { ...item, quantity: newQuantity } : item
        ))
    }

    return { items, removeFromCart, updateQuantity, clearCart, total }
}

const Button = ({ children, onClick, className, type, variant, size, disabled, ...props }) => {
    const baseStyle = "py-2 px-4 rounded-xl font-semibold transition-all duration-200"
    let style = baseStyle

    if (variant === "outline") {
        style += ` text-gray-900 border border-gray-300 hover:bg-gray-100 bg-white`
    } else if (variant === "ghost") {
        style += ` ${THEME.PRIMARY_TEXT} hover:bg-orange-50/50`
    } else { 
        style += ` ${THEME.PRIMARY} text-white ${THEME.PRIMARY_HOVER} shadow-md`
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


export default function CartPage() {
    
    const { items, removeFromCart, updateQuantity, clearCart, total } = useCart()
    
    if (items.length === 0) {
        return (
        
            <div className={`min-h-[50vh] flex items-center justify-center ${THEME.BG_SCREEN}`}>
                <div className={`max-w-2xl mx-auto px-4 py-12 ${THEME.BG_CONTAINER} rounded-xl shadow-lg w-full`}>
                    <div className="text-center space-y-6">
                        <h1 className={`${THEME.PRIMARY_TEXT} text-4xl font-extrabold`}>🛒</h1>
                        <h2 className={`text-3xl font-bold ${THEME.TEXT}`}>Your Cart is Empty</h2>
                        <p className={THEME.MUTED_TEXT}>Time to treat yourself! Add some delicious items from our menu to start your order.</p>
                        <a href="/menu" > {}
                            <Button size="lg" className="shadow-md hover:shadow-lg transition-shadow">
                                Browse Menu
                            </Button>
                        </a>
                    </div>
                </div>
            </div>
        )
    }

    const deliveryFee = total > 0 ? 300.00 : 0
    const finalTotal = total + deliveryFee 

    return (
        <div className={`${THEME.BG_SCREEN} py-12 px-4 sm:px-6 lg:px-8 font-sans`}>
            <div className="max-w-6xl mx-auto">
                <h1 className={`text-4xl font-extrabold mb-10 ${THEME.TEXT} border-b border-gray-200 pb-4`}>
                     Shopping Cart
                </h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    
                    <div className="lg:col-span-2 space-y-6">
                        {items.map((item) => (
                            <div 
                                key={item.id} 
                                className={`${THEME.BG_CONTAINER} border border-gray-200 rounded-xl p-5 flex gap-5 shadow-sm hover:shadow-md transition-shadow`}
                            >
                                
                                <div className="w-24 h-24 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                                    <img 
                                        src={item.image || `https://placehold.co/96x96/4f46e5/ffffff?text=${item.name.charAt(0)}`} 
                                        alt={item.name} 
                                        className="w-full h-full object-cover" 
                                        onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/96x96/4f46e5/ffffff?text=${item.name.charAt(0)}` }}
                                    />
                                </div>

                                
                                <div className="flex-1 flex flex-col justify-between">
                                    <h3 className={`font-bold text-lg ${THEME.TEXT}`}>{item.name}</h3>
                                    <p className={`text-sm ${THEME.MUTED_TEXT} mb-2`}>Price: LKR {item.price.toFixed(2)}</p>

                                    <div className="flex items-center gap-2 bg-gray-100 w-fit rounded-full p-0.5 border border-transparent hover:border-orange-200 transition-colors">
                                        <button
                                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                            className={`p-1.5 text-gray-600 hover:bg-orange-50 rounded-full transition-colors disabled:opacity-50`}
                                            disabled={item.quantity <= 1}
                                            aria-label="Decrease quantity"
                                        >
                                            <Minus className="h-4 w-4" />
                                        </button>
                                        <span className={`px-3 font-semibold ${THEME.TEXT} text-md select-none`}>{item.quantity}</span>
                                        <button
                                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                            className={`p-1.5 text-gray-600 hover:bg-orange-50 rounded-full transition-colors`}
                                            aria-label="Increase quantity"
                                        >
                                            <Plus className="h-4 w-4" />
                                        </button>
                                    </div>
                                </div>

                               
                                <div className="text-right flex flex-col items-end justify-between">
                                    <p className={`font-extrabold text-xl ${THEME.PRIMARY_TEXT}`}>LKR {(item.price * item.quantity).toFixed(2)}</p>
                                    <button
                                        onClick={() => removeFromCart(item.id)}
                                        className="text-red-500 hover:bg-red-500/10 p-2 rounded-full transition-colors"
                                        title="Remove item"
                                        aria-label="Remove item from cart"
                                    >
                                        <Trash2 className="h-5 w-5" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    
                    <div className="lg:col-span-1">
                        <div className={`${THEME.BG_CONTAINER} border border-gray-200 rounded-xl p-6 shadow-xl sticky top-20`}>
                            <h2 className={`text-2xl font-bold ${THEME.TEXT} mb-5`}>Order Summary</h2>

                            <div className="space-y-3 mb-6 pb-6 border-b border-gray-200">
                                <div className="flex justify-between text-gray-600">
                                    <span>Subtotal ({items.length} items)</span>
                                    <span className={`font-medium ${THEME.TEXT}`}>LKR {total.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-gray-600">
                                    <span>Delivery Fee</span>
                                    <span className={`font-medium ${THEME.TEXT}`}>LKR {deliveryFee.toFixed(2)}</span>
                                </div>
                
                            </div>

                            <div className={`flex justify-between font-extrabold text-2xl mb-6 ${THEME.TEXT}`}>
                                <span>Total</span>
                                <span className={THEME.TEXT}>LKR {finalTotal.toFixed(2)}</span>
                            </div>

                            
                            <a href="/checkout" className="block"> 
                                <Button 
                                    className={`w-full mb-3 py-3 text-lg font-semibold ${THEME.PRIMARY} ${THEME.PRIMARY_HOVER} transition-colors`} 
                                    disabled={total <= 0}
                                >
                                    Checkout
                                </Button>
                            </a>
                            
                            <Button 
                                variant="outline" 
                                className="w-full mb-4" 
                                onClick={() => clearCart()}
                            >
                                Clear Cart
                            </Button>
                            
                            <a href="/menu" className="block mt-4"> 
                                <Button variant="ghost" className={`w-full ${THEME.PRIMARY_TEXT} hover:bg-orange-50/50`}>
                                     Continue Shopping
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

         
        </div>
    )
}

