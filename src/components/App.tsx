import React from "react";
import pizzas from "../data/pizzas.json";

import PizzaSVG from "../svg/pizza.svg";

import AppStateProvider from "./AppState";
import Pizza from "./Pizza";
import Cart from "./Cart";

import styles from "./App.module.css";

const App = () => {
  return (
    <AppStateProvider>
      <div className={styles.container}>
        <div className={styles.header}>
          <PizzaSVG width={120} height={120} />
          <div className={styles.siteTitle}>Delicios Pizza</div>
          <Cart />
        </div>

        <ul>
          {pizzas.map((pizza) => (
            <Pizza key={pizza.id} pizza={pizza} />
          ))}
        </ul>
      </div>
    </AppStateProvider>
  );
};

export default App;
