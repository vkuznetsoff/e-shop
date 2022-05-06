import { combineReducers } from "redux"
import { cartReducer } from "./cartReducer"


export const rootReducer = combineReducers({
    cart: cartReducer
})

export type RootStateType = ReturnType<typeof rootReducer>