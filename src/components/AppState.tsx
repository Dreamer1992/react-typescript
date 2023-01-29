import React, { createContext, useContext, useReducer } from "react";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface IAppStateValue {
  cart: {
    items: CartItem[];
  };
}

const initialAppState: IAppStateValue = {
  cart: {
    items: [],
  },
};

export const AppStateContext = createContext(initialAppState);

export const AppDispatchContext = createContext<
  React.Dispatch<AddToCartAction> | undefined
>(undefined);

export const useStateDispatch = () => {
  const dispatch = useContext(AppDispatchContext);

  if (!dispatch) {
    throw new Error(
      "useStateDispatch was called outside of the AppDispatchContext provider"
    );
  }

  return dispatch;
};

interface Action<T> {
  type: T;
}

interface AddToCartAction extends Action<"ADD_TO_CART"> {
  payload: {
    item: Omit<CartItem, "quantity">;
  };
}

const reducer = (state: IAppStateValue, action: AddToCartAction) => {
  if (action.type === "ADD_TO_CART") {
    const itemToAdd = action.payload.item;
    const itemExists = state.cart.items.find(
      (item) => item.id === itemToAdd.id
    );

    return {
      ...state,
      cart: {
        ...state.cart,
        items: itemExists
          ? state.cart.items.map((item) => {
              if (item.id === itemToAdd.id) {
                return { ...item, quantity: item.quantity + 1 };
              }
              return item;
            })
          : [...state.cart.items, { ...itemToAdd, quantity: 1 }],
      },
    };
  }

  return state;
};

interface IAppStateProvider {
  children?: React.ReactNode;
}

const AppStateProvider: React.FC<IAppStateProvider> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialAppState);

  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
};

export default AppStateProvider;
