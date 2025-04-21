import { createContext, useContext, useState } from "react";

const cartContext = createContext();

export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);


    const addToCart = ( options, quantity, id) => {
        setCart([...cart, { options, quantity, id}])

    }

    const removeFormCart = (id) => {
        setCart(cart.filter((el) => el.id !== id));


    }

    return (
        <cartContext.Provider value={{ cart, setCart, addToCart, removeFormCart }}>
            {children}
        </cartContext.Provider>
    )
}

export function useCart() {
    return useContext(cartContext);
}