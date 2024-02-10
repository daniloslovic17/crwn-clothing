import { createContext, useState } from "react";

export const CartContext = createContext({
    display: "none",
    setDisplay: () => "none"
})

export const CartProvider = ({children}) => {
    const[display, setDisplay] = useState("none");
    const value = {display, setDisplay};
    return(
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    );
}