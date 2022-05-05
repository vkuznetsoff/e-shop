import { ICard } from "../types"

const cards: ICard[] = [
    {
        id: '1qq',
        imagePath: 'https://items.s1.citilink.ru/1420753_v01_b.jpg',
        name: 'Квадрокоптер DJI Mini 2',
        price: 127990
    },

    {
        id: '2qq',
        imagePath: 'https://items.s1.citilink.ru/1650268_v01_b.jpg',
        name: 'Смарт-часы Xiaomi Haylou LS05',
        price: 3290
    },

    {
        id: '3qq',
        imagePath: 'https://items.s1.citilink.ru/1658803_v02_b.jpg',
        name: 'Очки виртуальной реальности HTC Vive Flow',
        price: 66390
    }

]
const Cards = () => {
    return (
        <div className='flex'>
            {cards.map(c => (
                <div key={c.id} className='flex-wrap m-5 p-2 justify-center items-center border-2'>

                    <img src={c.imagePath} alt={c.name}
                        width={55} height={55} className='mr-3' />

                    <div className=''>{c.name}</div>

                    <div>{c.price} RUB</div>

                </div>
            ))
            }
        </div>
    )
}

export default Cards