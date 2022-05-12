import { FC, useEffect, useState } from "react"
import { productsAPI } from "../api/api"
import { ISingleProduct } from "../types"
import Card from "./Сard"
import "./Card.css"

// const cards: IProductCard[] = [
//     {
//         id: '1qq',
//         imagePath: 'https://items.s1.citilink.ru/1420753_v01_b.jpg',
//         name: 'Квадрокоптер DJI Mini 2',
//         price: 10
//     },

//     {
//         id: '2qq',
//         imagePath: 'https://items.s1.citilink.ru/1650268_v01_b.jpg',
//         name: 'Смарт-часы Xiaomi Haylou LS05',
//         price: 20
//     },

//     {
//         id: '3qq',
//         imagePath: 'https://items.s1.citilink.ru/1658803_v02_b.jpg',
//         name: 'Очки виртуальной реальности HTC Vive Flow',
//         price: 30
//     }

// ]



const Cards: FC = () => {
    const [cards, setCards] = useState([])

    useEffect(() => {
        productsAPI.getProducts().then((result: any) => setCards(result))

    }, [cards])

    // const cards = productsAPI.getProducts()
    // console.log('cards: ',cards)
    // console.log(cards)

    return (
        <div className="cards_container">
            {(cards as ISingleProduct[]).map(c => (
                    <Card key={c.id} product={c} />
                ))
                }
        </div>

        // <div className="catalog__row">
        //     <div className="catalog__col">

                
         
//         </div>
// </div >
        

        
    )
}

export default Cards