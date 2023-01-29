import React from "react";

import { AppStateContext } from "../components/AppState";

// assets
import { FiShoppingCart } from "react-icons/fi";

// styles
import styles from "./Cart.module.css";

interface IProps {}

interface IState {
  isOpen: boolean;
}

class Cart extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
  };

  render() {
    return (
      <AppStateContext.Consumer>
        {(state) => {
          const itemsCount = state.cart.items.reduce(
            (sum, item) => sum + item.quantity,
            0
          );

          return (
            <div className={styles.cartContainer}>
              <button
                className={styles.button}
                type="button"
                onClick={this.handleClick}
              >
                <FiShoppingCart />
                <span>{itemsCount} pizza(s)</span>
              </button>

              <div>
                <ul
                  className={styles.cartDropDown}
                  style={{
                    display: this.state.isOpen ? "block" : "none",
                  }}
                >
                  {state.cart.items.map((item) => (
                    <li key={item.id}>
                      {item.name} &times; {item.quantity}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        }}
      </AppStateContext.Consumer>
    );
  }
}

export default Cart;
