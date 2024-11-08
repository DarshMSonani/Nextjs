import { ADD_TO_CART, REMOVE_TO_CART } from "../constant"


export function addToCart(data) {
    // console.log('data :>> ', data);
    return {
        type: ADD_TO_CART,
        data: data,
    }
}


export function removeToCart() {
    return {
        type: REMOVE_TO_CART,
    }
}