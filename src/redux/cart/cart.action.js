import { cartType } from "./cart.types";

export const toggleCart = () =>({
    type: cartType.TOGGLE_CART_HIDDEN  
})

export const addItem = item =>({
    type: cartType.ADD_ITEM,
    payload: item
})