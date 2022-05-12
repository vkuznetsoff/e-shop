import { FC, useEffect, useState } from "react";

import logoImg from "../assets/img/logo.svg";
import cartIcon from "../assets/img/cart.svg";

import Cart from "./Cart";
import "./Header.css";
import { RootStateType } from "../store/rootReducer";
import { useSelector } from "react-redux";

const Header: FC = () => {
  const [showCart, setShowCart] = useState(false);
  const totalCountInit = useSelector(
    (state: RootStateType): number | undefined => state.cart.totalCount
  );

  return (
    <div className="header">
      <div className="header__logo">
        <img src={logoImg} alt="logo" width={250} />
      </div>
      <div className="header__cart">
        <button onClick={() => setShowCart(!showCart)}>
          <img src={cartIcon} alt="cart" />
        </button>
        <div className="header__cart__quantity">{totalCountInit}</div>
      </div>

      <Cart showCart={showCart} setShowCart={setShowCart} />
    </div>
  );
};

export default Header;
