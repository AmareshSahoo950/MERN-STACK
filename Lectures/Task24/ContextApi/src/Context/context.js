import React, { useContext } from "react";

const CartContext = React.createContext();

const CartProvider = CartContext.Provider;

function useCart() {
  return useContext(CartContext);
}

export { CartContext, CartProvider, useCart };