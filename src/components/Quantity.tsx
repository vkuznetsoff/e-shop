import { FC } from "react"
import { TypeSetState } from "../types"
import "./Card.css"

interface IQuantity {
    count: number
    setCount: TypeSetState<number>
}

const Quantity: FC<IQuantity> = ({count, setCount}) => {
    
    return (
        <div className="card__quantity">
            <div className="quantity__button" onClick={() => count > 0 && setCount(count - 1)} >-</div>
            <div className="quantity">{count} </ div>
            <div className="quantity__button" onClick={() => setCount(count + 1)}>+</div>


        </div>
    )
}

export default Quantity