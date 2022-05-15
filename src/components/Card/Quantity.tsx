import { FC } from "react";
import { TypeSetState } from "../../types";
import s from "./Card.module.css";

interface IQuantity {
  count: number;
  setCount: TypeSetState<number>;
}

const Quantity: FC<IQuantity> = ({ count, setCount }) => {
  return (
    <div className={s.card__quantity}>
      <div
        className={s.quantity__button}
        onClick={() => count > 0 && setCount(count - 1)}
      >
        -
      </div>
      <div className={s.quantity}>{count} </div>
      <div className={s.quantity__button} onClick={() => setCount(count + 1)}>
        +
      </div>
    </div>
  );
};

export default Quantity;
