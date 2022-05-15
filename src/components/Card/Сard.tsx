import { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCartItem, changeCartTotalCount, changeCartTotalSum } from "../../store/actions";
import { ISingleCard, ISingleProduct } from "../../types";
import Quantity from "./Quantity";
import { RootStateType } from "../../store/rootReducer";

import s from "./Card.module.css";

const Card: FC<ISingleCard> = ({ product }) => {
  const dispatch = useDispatch();
  const {totalCount} = useSelector( (state: RootStateType) => state.cart);
  const [count, setCount] = useState(0);

  const addHandler = (product: ISingleProduct, count: number) => {
    if (count !== 0) dispatch(addCartItem(product, count))
    dispatch(changeCartTotalCount(Number(totalCount)+count))
  };

  return (
    <div>
      <div className={s.card}>
        <div className={s.card__image}><img src={product.image} alt={product.title} /></div>

        <div className={s.card__body}>
          <div className={s.card__title}>{product.title}</div>
          <div className={s.card__text}>{'More>>'}</div>
        </div>

        <div className={s.card__bottom}>
          <div className={s.card__cost}>{product.price}$</div>
          <Quantity count={count} setCount={setCount} />
          <div className={s.card__button} onClick={() => addHandler(product, count)}>В корзину</div>
        </div>

      </div>
    </div>
  )

};

export default Card;
