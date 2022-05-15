import { FC, MouseEvent } from "react";
import cn from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { RootStateType } from "../../store/rootReducer";
import { ICartItem } from "../../types";

import removeIcon from "../../assets/img/remove.svg";
import { changeCartTotalCount, removeCartItem } from "../../store/actions";
import { CalcTotalSum } from "../../store/utils/utils";

import s from "./Cart.module.css";

//Компонента Корзины - содержимое корзины
const Cart: FC<{ showCart: boolean; setShowCart: Function }> = ({
  showCart,
  setShowCart,
}) => {
  const { items, totalCount } = useSelector(
    (state: RootStateType) => state.cart
  );

  const totalSum = Number(CalcTotalSum(items).toFixed(2));

  const dispatch = useDispatch();

  const removeItem = (item: ICartItem) => {
    dispatch(removeCartItem(item.id));
    dispatch(changeCartTotalCount(Number(totalCount) - item.count));
  };

  const onMouseLeave = () => {
    setShowCart(false);
  };

  const onMouseOver = (e: MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget.className === `${s.cart}`) {
      e.currentTarget.style.zIndex = "500";
      setShowCart(true);
    }
  };

  return (
    <div
      className={cn(`${s.cart}`, {
        hidden: !showCart,
      })}
      style={{ top: "calc(60px + 1.5rem" }}
      onMouseLeave={onMouseLeave}
      onMouseOver={(e) => onMouseOver(e)}
    >
      {items.length === 0 && <div>Корзина пуста</div>}
      {(items as ICartItem[]).map((item) => (
        <div key={item.id} className={s.cart__item}>
          <img src={item.image} alt={item.title} width={55} height={55} />

          <div>{item.title}</div>

          <div>
            {item.count} x {item.price} RUB
          </div>
          <div
            className={s.cart__item__removebtn}
            onClick={() => removeItem(item)}
          >
            <img src={removeIcon} alt="remove" />
            Удалить
          </div>
        </div>
      ))}

      {items.length !== 0 && (
        <div className={s.cart__bottom}>
          Итого: <b>{totalSum} 💲</b>
        </div>
      )}
    </div>
  );
};

export default Cart;
