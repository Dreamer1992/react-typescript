import React from "react";

// types
import { IPizza } from "../types";

// style
import styles from "./SpecialOffer.module.css";
import { WithAddToCartProps } from "./AddToCart";

interface IProps {
  pizza: IPizza;
}

const SpecialOffer: React.FC<IProps> = ({ pizza }) => {
  return (
    <div className={styles.container}>
      <h2>{pizza.name}</h2>
      <p>{pizza.description}</p>
      <p>{pizza.price}</p>

      <WithAddToCartProps>
        {({ addToCart }) => (
          <button
            type="button"
            onClick={() =>
              addToCart({ id: pizza.id, name: pizza.name, price: pizza.price })
            }
          >
            Добавить пиццу
          </button>
        )}
      </WithAddToCartProps>
    </div>
  );
};

export default SpecialOffer;
