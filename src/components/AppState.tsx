import React, { createContext, useState } from "react";

interface IAppStateContext {
  cart: {
    items: { id: number; name: string; price: number; quantity: number }[];
  };
}

const initialAppState: IAppStateContext = {
  cart: {
    items: [],
  },
};

export const AppStateContext = createContext(initialAppState);

export const AppSetStateContext = createContext<
  React.Dispatch<React.SetStateAction<IAppStateContext>> | undefined
>(undefined);

interface IAppStateProvider {
  children?: React.ReactNode;
}

const AppStateProvider: React.FC<IAppStateProvider> = ({ children }) => {
  const [state, setState] = useState<IAppStateContext>(initialAppState);

  return (
    <AppStateContext.Provider value={state}>
      <AppSetStateContext.Provider value={setState}>
        {children}
      </AppSetStateContext.Provider>
    </AppStateContext.Provider>
  );
};

export default AppStateProvider;
