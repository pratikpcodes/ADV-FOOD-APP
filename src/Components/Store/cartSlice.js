import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQty: 0,
  },

  reducers: {
    addItem: (state, action) => {
      const checkIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (checkIndex >= 0) {
        state.items[checkIndex] = {
          ...state.items[checkIndex],
          quantity: state.items[checkIndex].quantity + 1,
        };

        // console.log(state.items[checkIndex].quantity + " after 1st"); **********
      } else {
        // let firstPush = { ...action.payload,qnty:1 };
        let firstPush = { ...action.payload, quantity: 1 };
        // console.log(firstPush.quantity + " before First"); *************

        state.items.push(firstPush);
      }
      state.totalQty = state.items
        .map((index) => index.quantity)
        .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
      // console.log(state.totalQty + "  :  :rtjfdijfdk ::::::::::::: total");
      // state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.map((item) => {
        if (item.id == action.payload.id) {
          const newItem = state.items.filter((index) => index.id !== item.id);
          state.items = newItem;
        }
      });
      state.items.filter((index) => index !== action.payload.id);
      // console.log(action.payload.id);
      state.totalQty = state.items
      .map((index) => index.quantity)
      .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    },
    clearCart: (state) => {
      state.items.length = 0;
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
