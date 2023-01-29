import React from "react";

// project imports
import { useStateDispatch } from "../components/AppState";

// styles
import styles from "./Pizza.module.css";

interface IPizza {
  id: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
}

interface IProps {
  pizza: IPizza;
}

const Pizza: React.FC<IProps> = ({ pizza }) => {
  const dispatch = useStateDispatch();

  const handleAddToCardClick = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        item: { id: pizza.id, name: pizza.name, price: pizza.price },
      },
    });
  };

  return (
    <li className={styles.container}>
      <h2>{pizza.name}</h2>
      <p>{pizza.description}</p>
      <p>{pizza.price}</p>
      <button type="button" onClick={handleAddToCardClick}>
        Добавить пиццу
      </button>
    </li>
  );
};

export default Pizza;
