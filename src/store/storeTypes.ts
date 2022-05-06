import { ICard, ICardItem, ICartItem } from "../types"

export const CART_ADD_ITEM = "CART_ADD_ITEM"
export const CART_REMOVE_ITEM = "CART_REMOVE_ITEM"
export const CART_CHANGE_COUNT = "CART_CHANGE_COUNT"

interface ICartChangeCountPayload {
    type: 'plus' | 'minus'
    product: ICard
}

interface ICartChangeCount {
    type: typeof CART_CHANGE_COUNT
    product: ICartChangeCountPayload
}

interface ICartAddItemPayload {
    product: ICardItem
    count: number
}

interface ICartAddItem {
   type: typeof CART_ADD_ITEM
   payload: ICartAddItemPayload
}

interface ICartRemoveItem {
    type: typeof CART_REMOVE_ITEM
    payload: string
 }

 export type ActionCartType = ICartAddItem | ICartRemoveItem | ICartChangeCount

