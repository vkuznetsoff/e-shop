import { FC, useEffect, useState } from "react";

import logoImg from "../assets/img/logo.svg";
import cartIcon from "../assets/img/cart.svg";

import Cart from "./Cart";
import "./Header.css";
import { RootStateType } from "../store/rootReducer";
import { useSelector } from "react-redux";
import { CalcTotalSum } from "../store/utils/utils";

const Header: FC = () => {
  const [showCart, setShowCart] = useState(false);
  const { items, totalCount} = useSelector(
    (state: RootStateType) => state.cart
  );
  const totalSum = CalcTotalSum(items)

  return (
    <div className="header">
      <div className="header__logo">
        <img src={logoImg} alt="logo" width={250} />
      </div>

      <div className="header__cart">
        <button
          className="header__cart__button"
          onClick={() => setShowCart(!showCart)}
        >
          <img src={cartIcon} alt="cart" />
          <div className="header__cart__quantity">{totalCount}</div>
        </button>

        {totalSum !==0 && <div className="header__cart__sum">{totalSum}$</div>}
      </div>

      <Cart showCart={showCart} setShowCart={setShowCart} />
    </div>
  );
};

export default Header;
