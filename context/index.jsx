import { createContext,useState,useEffect } from "react";

export const cartContext = createContext();

export const CartProvider = ({children}) => {
    //products cart counter
    const [count, setCount] = useState(0);
    //cart state
    const [cart, setCart] = useState([]);
    // open-close checkout
    const [openCheckout, setOpenCheckout] = useState(false);

    return (
        <cartContext.Provider value={
            {
                count,
                setCount,
                cart,
                setCart,
                openCheckout,
                setOpenCheckout
            }
        }>
            {children}
        </cartContext.Provider>
    )
}
