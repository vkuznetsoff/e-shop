import { ICartItem } from "../../types"

export const CalcTotalSum = (arr: ICartItem[]) => {
    return arr.reduce((acc, item) => acc + item.count*(Number(item.price)), 0)
  }

  export const CalcTotalCount = (arr: ICartItem[]) => {
    return arr.reduce((acc, item) => acc + item.count, 0)
  }