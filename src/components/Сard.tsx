import { FC, useState } from "react"
import { useDispatch } from "react-redux"
import { addCartItem } from "../store/actions"
import { ICard, ICartItem, ICardItem } from "../types"
import Quantity from "./Quantity"



const Card: FC<ICardItem> = ({card}) => {
    const dispatch = useDispatch()
    const [count, setCount] = useState(0)

    const addHandler = () => {
dispatch(addCartItem(card, count))
    }

    return (
        <div className="flex flex-col items-center  shadow-lg rounded-md p-5 m-5 " style={{width: '250px', height: '300px' }}>
            <img src={card.imagePath} alt={card.name} 
                         className='mr-3'  width='65px' />

                    <div className='text-lg font-bold'>{card.name}</div>

                    <div>{card.price} RUB</div>
                    <button onClick={addHandler} className='bg-emerald-200 px-3 py-1 hover:contrast-150'>В корзину</button>
                    <Quantity count={count} setCount={setCount}/>

        </div>
    )
}

export default Card