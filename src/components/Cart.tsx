import { FC, MouseEvent} from "react";
import cn from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { RootStateType } from "../store/rootReducer";
import { ICartItem } from "../types";

import removeIcon from '../assets/img/remove.svg'
import { changeCartTotalCount, removeCartItem } from "../store/actions";
import { CalcTotalSum } from "../store/utils/utils";
import "./Cart.css"


//Компонента Корзины - содержимое корзины
const Cart: FC<{ showCart: boolean, setShowCart: Function }> = ({ showCart, setShowCart }) => {

  const {items, totalCount} = useSelector( (state: RootStateType) => state.cart);
   
  const totalSum = CalcTotalSum(items)
  
  const dispatch = useDispatch()
  
  const removeItem = (item: ICartItem) => {
    dispatch(removeCartItem(item.id))
    dispatch(changeCartTotalCount(Number(totalCount)-item.count))   
  };

  const onMouseLeave = () => {
    setShowCart(false)
  }

  const onMouseOver = (e: MouseEvent<HTMLDivElement>) => {
    
    if (e.currentTarget.className == "cart") {
      e.currentTarget.style.zIndex = "500"
      setShowCart(true)
  } 
}

  return (
    <div
      className={cn("cart", {
        hidden: !showCart
      })}
      style={{ top: "calc(60px + 1.5rem" }} 
      onMouseLeave={onMouseLeave}
      onMouseOver={(e) => onMouseOver(e)}
      
    >
      {(items.length === 0) && <div>Корзина пуста</div> }
      {(items as ICartItem[]).map((item) => (
        <div key={item.id} className="cart__item">
          <img
            src={item.image}
            alt={item.title}
            width={55}
            height={55}
          />

          <div>{item.title}</div>

          <div>
            {item.count} x {item.price} RUB
          </div>
          <div
            className="cart__item__remove-btn"
            onClick={() => removeItem(item)}
          >
            <img src={removeIcon} alt="remove" />
            Удалить
          </div>

          
        </div>
      ))}

      {items.length !== 0 && <div className="cart__bottom">
             Итого: <b>{totalSum} RUB</b>
          </div>
      }
      
    </div>
  );
};

export default Cart;
