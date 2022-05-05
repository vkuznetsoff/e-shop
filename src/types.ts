export interface ICard {
    id: string,
    name: string,
    imagePath: string,
    price: number
}

export interface ICartItem extends ICard {
    count: number

}