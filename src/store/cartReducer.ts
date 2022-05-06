import { combineReducers } from "redux"
import { ICartItem } from "../types"
import { ActionCartType, CART_ADD_ITEM, CART_CHANGE_COUNT, CART_REMOVE_ITEM } from "./storeTypes"

const initialState: ICartItem[] = [{
  id: '1qq',
  imagePath: 'https://items.s1.citilink.ru/1420753_v01_b.jpg',
  name: 'Квадрокоптер DJI Mini 2',
  count: 1,
  price: 127990
},
{
  id: '2qq',
  imagePath: 'https://items.s1.citilink.ru/1650268_v01_b.jpg',
  name: 'Смарт-часы Xiaomi Haylou LS05',
  price: 3290,
  count: 1
}
]

export const cartReducer = (state = initialState, action: ActionCartType) => {
  switch (action.type) {

    case CART_ADD_ITEM: {
      const {product, count} = action.payload

      const s = state.map(item => {
          if (item.id === product.id) {
            debugger
            return { ...item, count: item.count+count}
          }
          return item
        })
          
          debugger
      console.log(s)
      return s
    
     
      // const cart = [...state]
      // const { count, product } = action.payload

      // const foundItem = state.find(item => item.id === product.id)
      // if (foundItem) {
      //   foundItem.count = count + 1
      // } else cart.push({
      //   ...product,
      //   count
      // })
      // return cart
    }

    case CART_REMOVE_ITEM: {

      return state.filter(item => item.id !== action.payload)

    }


    default:
      return state
  }
}
