import React, { useContext } from "react";

// project import
import { AppSetStateContext } from "../components/AppState";

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
  const setState = useContext(AppSetStateContext);

  const handleAddToCardClick = () => {
    setState?.((state) => {
      const itemExists = state.cart.items.find((item) => item.id === pizza.id);

      return {
        ...state,
        cart: {
          ...state.cart,
          items: itemExists
            ? state.cart.items.map((item) => {
                if (item.id === pizza.id) {
                  return { ...item, quantity: item.quantity + 1 };
                }
                return item;
              })
            : [
                ...state.cart.items,
                {
                  id: pizza.id,
                  name: pizza.name,
                  price: pizza.price,
                  quantity: pizza.quantity,
                },
              ],
        },
      };
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
