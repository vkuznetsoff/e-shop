import { FC, useEffect, useState } from "react";
import { productsAPI } from "../api/api";
import { ISingleProduct } from "../types";
import Card from "./Сard";
import "./Card.css";

const Cards: FC = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    productsAPI.getProducts().then((result: any) => setCards(result));
  }, [cards]);

  return (
    <div className="container">
      <div className="cards_container">
        {(cards as ISingleProduct[]).map((c) => (
          <Card key={c.id} product={c} />
        ))}
      </div>
    </div>
  );
};

export default Cards;
