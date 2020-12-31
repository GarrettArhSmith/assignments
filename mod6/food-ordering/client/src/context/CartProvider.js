import React, { useState } from 'react'
import axios from 'axios'

export const CartContext = React.createContext()

const userAxios = axios.create()
userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
})

function CartProvider({children}) {
    const [orderItems, setOrderItems] = useState([])

    function addToCart(itemId) {
        setOrderItems(prev => [...prev, itemId])
    }

    function deleteFromCart(itemId) {
        setOrderItems(prev => prev.filter(item => item !== itemId))
    }

    return (
        <CartContext.Provider
            value={{

            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;