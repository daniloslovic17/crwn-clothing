import { createAction } from "../../utils/reducer/reducer.utils";

import CART_ACTION_TYPES from "./cart.types";

const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);
    if(existingCartItem){
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id ? 
            {...cartItem, quantity: cartItem.quantity + 1}
            : cartItem
        )
    }
    return [...cartItems, { ...productToAdd, quantity: 1 }]
};

const removeCartItem = (cartItems, productToRemove) => {
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToRemove.id);
    if(existingCartItem.quantity === 1){
        return cartItems.filter(cartItem => cartItem.id !== productToRemove.id);
    }
    return cartItems.map((cartItem) => cartItem.id === productToRemove.id ? 
            {...cartItem, quantity: cartItem.quantity - 1}
            : cartItem
        )
};

const clearCartItem = (cartItems, itemToClear) => {
    return cartItems.filter(cartItem => cartItem.id !== itemToClear.id);
};

export const setIsCartOpen = (boolean) => {
    return createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean);
};

const addItemToCart = (productToAdd) => {
    const newCartItems = (addCartItem(cartItems, productToAdd));
    updateCartItemsReducer(newCartItems);
}

const removeItemFromCart = (productToRemove) => {
    const newCartItems = (removeCartItem(cartItems, productToRemove));
    updateCartItemsReducer(newCartItems);
}

const clearItemFromCart = (itemToClear) => {
    const newCartItems = (clearCartItem(cartItems, itemToClear));
    updateCartItemsReducer(newCartItems);
}