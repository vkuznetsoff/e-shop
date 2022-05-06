import { combineReducers } from "redux"
import { ICartItem } from "../types"
import { ActionCartType, CART_ADD_ITEM, CART_CHANGE_COUNT, CART_REMOVE_ITEM } from "./storeTypes"

const initialState: ICartItem[] = []

export const cartReducer = (state = initialState, action: ActionCartType) => {
  switch (action.type) {
    case CART_ADD_ITEM: {
      const cart = [...state]
      const { count, product } = action.payload

      const foundItem = state.find(item => item.id === product.id)
      if (foundItem) {
        foundItem.count = count + 1
      } else cart.push({
        ...product,
        count
      })
      return cart
    }

    case CART_REMOVE_ITEM: {
      const cart = [...state]

      cart.forEach((item, idx) => {
        if (item.id === action.payload) {
          cart.slice(idx, 1)
        }
      })
      return cart

    }


    default:
      return state
  }
}
