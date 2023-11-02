import { createSlice } from "@reduxjs/toolkit";

export const cartReducer = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {},
});

export const {} = cartReducer.actions;

export default cartReducer.reducer;
