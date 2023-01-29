import React from "react";

// types
import { IPizza } from "../types";

// style
import styles from "./SpecialOffer.module.css";
import { AddToCartProps, withAddToCart } from "./AddToCart";

interface IProps extends AddToCartProps {
  pizza: IPizza;
}

const SpecialOffer: React.FC<IProps> = ({ pizza, addToCart }) => {
  const handleAddToCardClick = () => {
    addToCart({
      id: pizza.id,
      name: pizza.name,
      price: pizza.price,
    });
  };

  return (
    <div className={styles.container}>
      <h2>{pizza.name}</h2>
      <p>{pizza.description}</p>
      <p>{pizza.price}</p>
      <button type="button" onClick={handleAddToCardClick}>
        Добавить пиццу
      </button>
    </div>
  );
};

export default withAddToCart(SpecialOffer);
