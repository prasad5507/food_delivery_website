import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreConext = createContext(null);

const StoreConextProvider = (props) => {
  const [cartItems, setCartItem] = useState({});

  const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
      setCartItem((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };

  const removeFromCart = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);
        if (itemInfo) {
          totalAmount += itemInfo.price * cartItems[item];
        }
      }
    }
    return totalAmount;
  };

  const ContextValue = {
    food_list,
    cartItems,
    setCartItem,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
  };

  return (
    <StoreConext.Provider value={ContextValue}>
      {props.children}
    </StoreConext.Provider>
  );
};

export default StoreConextProvider;
