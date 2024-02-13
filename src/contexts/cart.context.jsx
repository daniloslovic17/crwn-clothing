import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);
    if(existingCartItem){
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id ? 
            {...cartItem, quantity: cartItem.quantity + 1}
            : cartItem
        )
    }
    return [...cartItems, { ...productToAdd, quantity: 1 }]
}

const removeCartItem = (cartItems, productToRemove) => {
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToRemove.id);
    if(existingCartItem.quantity === 1){
        return cartItems.filter(cartItem => cartItem.id !== productToRemove.id);
    }
    return cartItems.map((cartItem) => cartItem.id === productToRemove.id ? 
            {...cartItem, quantity: cartItem.quantity - 1}
            : cartItem
        )
}

const clearCartItem = (cartItems, itemToClear) => {
    return cartItems.filter(cartItem => cartItem.id !== itemToClear.id);
}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    cartCount: 0,
    removeItemFromCart: () => {},
    clearItemFromCart: () => {}
})

export const CartProvider = ({children}) => {
    const[isCartOpen, setIsCartOpen] = useState(false);
    const[cartItems, setCartItems] = useState([]);
    const[cartCount, setCartCount] = useState(0);

    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
        setCartCount(newCartCount);
    }, [cartItems])

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    }

    const removeItemFromCart = (productToRemove) => {
        setCartItems(removeCartItem(cartItems, productToRemove));
    }

    const clearItemFromCart = (itemToClear) => {
        setCartItems(clearCartItem(cartItems, itemToClear));
    }

    const value = {isCartOpen, setIsCartOpen, addItemToCart, cartItems, cartCount, removeItemFromCart, clearItemFromCart};
    return(
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    );
}