import { FC, useState } from "react"
import { TypeSetState } from "../types"

interface IQuantity {
    count: number
    setCount: TypeSetState<number>
}

const Quantity: FC<IQuantity> = ({count, setCount}) => {
  

    // const handleButton = () => {
    //     setCount(count => {
    //         if (count !== 0) {
    //             return count-1 }
    //             else return 0
    //         )}
    // } 

    return (
        <div className="flex items-center mt-2">
            <button onClick={() => count > 0 && setCount(count => count - 1)} >-</button>
            <input type='number' className="border-2 " value={count}
                onChange={(e) => setCount(+e.target.value)} />
            <button onClick={() => setCount(count => count + 1)}>+</button>


        </div>
    )
}

export default Quantity