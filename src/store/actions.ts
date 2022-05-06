import { IProductCard, ICartItem } from "../types";
import { CART_ADD_ITEM, CART_CHANGE_COUNT, CART_REMOVE_ITEM } from "./storeTypes";

export const addCartItem = (product: IProductCard, count: number) => {
    return {
        type: CART_ADD_ITEM,
        payload: {product, count}
    }
}

export const removeCartItem = (productID: string) => {
    return {
        type: CART_REMOVE_ITEM,
        payload: productID
    }
}

export const changeCountInCart = (type: 'plus' | 'minus', product: ICartItem) => {
    return {
        type: CART_CHANGE_COUNT,
        payload: product
    }
}