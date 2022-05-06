import { Dispatch, SetStateAction } from "react"

export interface ICard {
    id: string,
    name: string,
    imagePath: string,
    price: number
}

export interface ICardItem {
    card: ICard
}

export interface ICartItem extends ICard {
    count: number

}

export type TypeSetState<T> = Dispatch<SetStateAction<T>>