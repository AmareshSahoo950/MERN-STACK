import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: []
}


const appSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {

    addToCart: (state, action) => {
      const item = action.payload;
      const found = state.cartItems.find((cartItem) =>
        cartItem.id === item.id);

      if (found) {
        state.cartItems = state.cartItems.map(cartItem =>
          cartItem.id === found.id ?
            {
              ...cartItem, quantity: (cartItem.quantity || 1) + 1
            } : cartItem
        );
      } else {
        state.cartItems.push({ ...item, quantity: 1 });
      }

    },

    removeFromCart: (state, action) => {
      const item = action.payload

      state.cartItems = state.cartItems.
        map(cartItem => {
          if (cartItem.id === item.id && cartItem.quantity > 0) {
            return { ...cartItem, quantity: cartItem.quantity - 1 };
          }
          return cartItem;
        })
        .filter(cartItem => cartItem.quantity > 0)
    }

  }
})


export const { addToCart, removeFromCart } = appSlice.actions
export default appSlice.reducer
