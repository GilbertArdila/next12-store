import { createContext,useState,useEffect } from "react";

export const cartContext = createContext();

export const CartProvider = ({children}) => {
    //products cart counter
    const [count, setCount] = useState(0);
    //cart state
    const [cart, setCart] = useState([]);

    return (
        <cartContext.Provider value={
            {
                count,
                setCount,
                cart,
                setCart
            }
        }>
            {children}
        </cartContext.Provider>
    )
}
