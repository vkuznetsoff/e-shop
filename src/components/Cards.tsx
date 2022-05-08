import { FC } from "react"
import { useSelector } from "react-redux"
import { RootStateType } from "../store/rootReducer"
import {ICart, ICartItem, IProduct, IProductCard } from "../types"
import Card from "./Сard"

const cards: IProductCard[] = [
    {
        id: '1qq',
        imagePath: 'https://items.s1.citilink.ru/1420753_v01_b.jpg',
        name: 'Квадрокоптер DJI Mini 2',
        price: 10
    },

    {
        id: '2qq',
        imagePath: 'https://items.s1.citilink.ru/1650268_v01_b.jpg',
        name: 'Смарт-часы Xiaomi Haylou LS05',
        price: 20
    },

    {
        id: '3qq',
        imagePath: 'https://items.s1.citilink.ru/1658803_v02_b.jpg',
        name: 'Очки виртуальной реальности HTC Vive Flow',
        price: 30
    }

]
const Cards:FC = () => {

    return (
        <div className='flex flex-wrap items-center '>
            {cards.map(c => (
               <Card key={c.id} product={c}/>
            ))
            }
        </div>
    )
}

export default Cards