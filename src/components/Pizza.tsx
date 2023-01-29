import React from "react";

// types
import { IPizza } from "../types";

import { AddToCartProps, withAddToCart } from "./AddToCart";

// styles
import styles from "./Pizza.module.css";

interface IProps extends AddToCartProps {
  pizza: IPizza;
}

const PizzaItem: React.FC<IProps> = ({ pizza, addToCart }) => {
  const handleAddToCartClick = () => {
    addToCart({
      id: pizza.id,
      name: pizza.name,
      price: pizza.price,
    });
  };

  return (
    <li className={styles.container}>
      <h2>{pizza.name}</h2>
      <p>{pizza.description}</p>
      <p>{pizza.price}</p>
      <button type="button" onClick={handleAddToCartClick}>
        Добавить пиццу
      </button>
    </li>
  );
};

export default withAddToCart(PizzaItem);
