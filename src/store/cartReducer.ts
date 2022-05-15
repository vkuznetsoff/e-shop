
import { ICart } from "../types"
import {
  ActionCartType, CART_ADD_ITEM, CART_CHANGE_TOTAL_COUNT,
  CART_CHANGE_TOTAL_SUM, CART_REMOVE_ITEM
} from "./storeTypes"

const initialState: ICart = {
  items: [],
  totalSum: 0,
  totalCount: 0
}

export const cartReducer = (state = initialState, action: ActionCartType) => {
  switch (action.type) {

    case CART_ADD_ITEM: {
      const { product, count } = action.payload
      const { items } = state
      const foundItem = items.find(item => item.id === product.id)

      const updatedItems = items.map(item => {
        if (item.id === product.id) {
          return { ...item, count: item.count + count }
        } else return item
      })
      if (!foundItem) updatedItems.push({ ...product, count: count })
      return { ...state, items: updatedItems }
    }

    case CART_REMOVE_ITEM: {
      const updatedItems = state.items.filter(item => item.id !== action.payload)
      return { ...state, items: updatedItems }
    }

    case CART_CHANGE_TOTAL_SUM: {
      return { ...state, totalSum: action.payload }
    }

    case CART_CHANGE_TOTAL_COUNT: {
      return { ...state, totalCount: action.payload }
    }

    default:
      return state
  }
}
