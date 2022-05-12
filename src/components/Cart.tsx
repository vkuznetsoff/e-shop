import { FC, MouseEvent, SyntheticEvent } from "react";
import cn from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { RootStateType } from "../store/rootReducer";
import { ICart, ICartItem } from "../types";

import removeIcon from '../assets/img/remove.svg'
import { changeCartTotalCount, removeCartItem } from "../store/actions";
import { CalcTotalSum } from "../store/utils/utils";
import "./Header.css"


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
        <div key={`card item ${item.title} `} className='flex-col items-center mb-5 border-b-2'>
          <img
            src={item.image}
            alt={item.title}
            width={55}
            height={55}
            className="mr-3"
          />

          <div className="">{item.title}</div>

          <div>
            {item.count} x {item.price} RUB
          </div>
          <div
            className="text-red-600 cursor-pointer flex"
            onClick={() => removeItem(item)}
          >
            <img src={removeIcon} alt="remove" />
            Удалить
          </div>

          
        </div>
      ))}

      {(items as ICartItem[]).length !== 0 && <div className="text-lg mt-5 mb-2  pt-2">
             Total: <b>{totalSum} RUB</b>
          </div>
      }
      
    </div>
  );
};

export default Cart;
