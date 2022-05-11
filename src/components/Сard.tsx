import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { addCartItem } from "../store/actions";
import { ISingleCard, ISingleProduct } from "../types";
import Quantity from "./Quantity";
import "./Card.css"

const Card: FC<ISingleCard> = ({ product }) => {
  const dispatch = useDispatch();

  const [count, setCount] = useState(0);

  const addHandler = (product: ISingleProduct, count: number) => {
    dispatch(addCartItem(product, count))

  };

  return (
    <div>
      <div className='card'>
        <div className="card__image"><img src={product.image} alt={product.title} /></div>

        <div className="card__body">
          <div className="card__title">{product.title}</div>
          <div className="card__text">{'More>>'}</div>
        </div>

        <div className="card__bottom">
          <div className="card__cost">{product.price}</div>
          <div className="card__button button" onClick={() => addHandler(product, count)}>В корзину</div>
        </div>

      </div>
    </div>

    // <div className="flex flex-col items-center  shadow-lg rounded-md p-5 m-5 bg-yellow-50"
    //   style={{ width: "250px", height: "300px" }}
    // >
    //   <img
    //     src={product.image}
    //     alt={product.title}
    //     className="mr-3 h-15"
    //     width="65px"
    //   />

    //   <div className="text-lg font-bold flex-grow-1">{product.title}</div>

    //   <div>{product.price} RUB</div>
    //   <button
    //     onClick={() => addHandler(product, count)}
    //     className="bg-emerald-200 px-3 py-1 hover:contrast-150"
    //   >
    //     В корзину
    //   </button>
    //   <Quantity count={count} setCount={setCount} />
    // </div>
  )

};

export default Card;
