import { createAction } from "../../utils/reducer/reducer.utils";

import CART_ACTION_TYPES from "./cart.types";

export const setCartItems = (cartArray) => {
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartArray);
};


export const setCartOpen = (isCartOpen) => {
    return createAction(CART_ACTION_TYPES.SET_CART_OPEN, isCartOpen);
};