import {ISingleProduct } from "../types"

export const CART_ADD_ITEM = "CART_ADD_ITEM"
export const CART_REMOVE_ITEM = "CART_REMOVE_ITEM"
export const CART_CHANGE_COUNT = "CART_CHANGE_COUNT"

export const CART_CHANGE_TOTAL_COUNT = "CART_CHANGE_TOTAL_COUNT"
export const CART_CHANGE_TOTAL_SUM = "CART_CHANGE_TOTAL_SUM"

interface ICartChangeCountPayload {
    type: 'plus' | 'minus'
    product: ISingleProduct
}

interface ICartChangeCount {
    type: typeof CART_CHANGE_COUNT
    product: ICartChangeCountPayload
}

interface ICartAddItemPayload {
    product: ISingleProduct
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

 interface ICartChangeTotalSum {
    type: typeof CART_CHANGE_TOTAL_SUM
    payload: number
 }

 interface ICartChangeTotalCount {
    type: typeof CART_CHANGE_TOTAL_COUNT
    payload: number
 }

 export type ActionCartType = ICartAddItem | ICartRemoveItem 
 | ICartChangeCount | ICartChangeTotalSum
 | ICartChangeTotalCount

