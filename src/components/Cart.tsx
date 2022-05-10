import { FC } from "react";
import cn from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { RootStateType } from "../store/rootReducer";
import { ICart, ICartItem } from "../types";

import removeIcon from '../assets/img/remove.svg'
import { removeCartItem } from "../store/actions";



//Компонента Корзины - содержимое корзины
const Cart: FC<{ showCart: boolean }> = ({ showCart }) => {
  const {items} = useSelector( (state: RootStateType):ICart => state.cart);
 
  const totalSum = (items as ICartItem[]).reduce((acc, item) => acc + item.count*(Number(item.price)), 0);
  
  
  const dispatch = useDispatch()
  

  const removeItem = (id: string) => {
    dispatch(removeCartItem(id))
  };
  return (
    <div
      className={cn("absolute right-5 shadow-md p-5 bg-white", {
        hidden: !showCart
      })}
      style={{ top: "calc(60px + 1.5rem" }}
    >
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
            onClick={() => removeItem(item.id)}
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
