import { Dispatch, SetStateAction } from "react"

// export interface IProductCard {
//     id: string,
//     name: string,
//     imagePath: string,
//     price: number
// }

// export interface IProduct {
//     product: IProductCard
// }

// export interface ICartItem extends IProductCard {
//     count: number
// }

// export interface ICart {
//     items: ICartItem[]
//     totalSum?: number
//     totalCount?: number
// }


export interface ICartItem extends ISingleProduct {
    count: number
}

export interface ICart {
    items: ICartItem[]
    totalSum?: number
    totalCount?: number
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