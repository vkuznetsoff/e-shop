import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { addCartItem } from "../store/actions";
import { ISingleCard, ISingleProduct } from "../types";
import Quantity from "./Quantity";

const Card: FC<ISingleCard> = ({ product }) => {
  const dispatch = useDispatch();

  const [count, setCount] = useState(0);

  const addHandler = (product: ISingleProduct, count: number) => {    
      dispatch(addCartItem(product, count))   
      
  };

  return (
    <div
      className="flex flex-col items-center  shadow-lg rounded-md p-5 m-5 bg-yellow-50"
      style={{ width: "250px", height: "300px" }}
    >
      <img
        src={product.image}
        alt={product.title}
        className="mr-3"
        width="65px"
      />

      <div className="text-lg font-bold">{product.title}</div>

      <div>{product.price} RUB</div>
      <button
        onClick={() => addHandler(product, count)}
        className="bg-emerald-200 px-3 py-1 hover:contrast-150"
      >
        В корзину
      </button>
      <Quantity count={count} setCount={setCount} />
    </div>
  );
  
};

export default Card;
