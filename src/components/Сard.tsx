import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { addCartItem } from "../store/actions";
import { IProduct, IProductCard } from "../types";
import Quantity from "./Quantity";

const Card: FC<IProduct> = ({ product }) => {
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);

  const addHandler = (product: IProductCard, count: number) => {
      dispatch(addCartItem(product, count))
  };

  return (
    <div
      className="flex flex-col items-center  shadow-lg rounded-md p-5 m-5 "
      style={{ width: "250px", height: "300px" }}
    >
      <img
        src={product.imagePath}
        alt={product.name}
        className="mr-3"
        width="65px"
      />

      <div className="text-lg font-bold">{product.name}</div>

      <div>{product.price} RUB</div>
      <button
        onClick={() => addHandler(product, 1)}
        className="bg-emerald-200 px-3 py-1 hover:contrast-150"
      >
        В корзину
      </button>
      {/* <Quantity count={count} setCount={setCount} /> */}
    </div>
  );
};

export default Card;
