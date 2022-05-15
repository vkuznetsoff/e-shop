import { Dispatch, SetStateAction } from "react"

export interface ICartItem extends ISingleProduct {
    count: number
}

export interface ICart {
    items: ICartItem[]
    totalSum?: number | undefined
    totalCount?: number | undefined
}

export interface ISingleProduct   {
    id: string,
    title: string,
    price: string,
    category: string,
    description: string,
    image: string
}

export interface ISingleCard {
    product: ISingleProduct
}

export type TypeSetState<T> = Dispatch<SetStateAction<T>>