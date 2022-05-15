import { FC, useEffect, useState } from "react";
import { productsAPI } from "../../api/api";
import { ISingleProduct } from "../../types";
import Card from "../Card/Сard";
import Preloader from "../Preloader/Preloader";
import s from "./Cards.module.css";

const Cards: FC = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    productsAPI.getProducts().then((result: any) => setCards(result));
  }, [cards]);

  return (
    <div className={s.container}>
      <div className={s.cards_container}>
       { cards.length === 0 && <Preloader /> }
        {(cards as ISingleProduct[]).map((c) => (
          <Card key={c.id} product={c} />
        ))}
      </div>
    </div>
  );
};

export default Cards;
