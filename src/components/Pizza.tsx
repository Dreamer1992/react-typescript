import React from "react";

// types
import { IPizza } from "../types";

// hooks
import { useAddToCart } from "./AddToCart";

// styles
import styles from "./Pizza.module.css";

interface IProps {
  pizza: IPizza;
}

const PizzaItem: React.FC<IProps> = ({ pizza }) => {
  const addToCart = useAddToCart();

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

      <button
        type="button"
        onClick={() =>
          addToCart({
            id: pizza.id,
            name: pizza.name,
            price: pizza.price,
          })
        }
      >
        Добавить пиццу
      </button>
    </li>
  );
};

export default PizzaItem;
