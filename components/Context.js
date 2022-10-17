import { createContext, useState } from "react";

export const defaultOrder = {
  orderId: null,
  orderDish: {},
  drinks: [],
  selectedDrinks: [],
  date: new Date(),
  people: 1,
  email: "",
  orderCompleted: false,
};

// Here at we create a context that will be used to store the basket
export const StoreContext = createContext(defaultOrder);

// Here are we are creating a custom hook that will be used to manage the state of the basket
export const StoreProvider = ({ children }) => {
  const [order, setOrder] = useState(defaultOrder);
  const value = {
    order,
    setOrder,
  };

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};
