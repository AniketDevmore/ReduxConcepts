import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
    name: "john",
    input: 0,
    data: [],
    cart: [],
  },
  reducers: {
    changeInput: (state, action) => {
      state.input = action.payload;
    },
    IncrementMe: (state) => {
      state.value = state.value + 1;
    },
    DecrementMe: (state) => {
      state.value = state.value - 1;
    },
    IncrementMeBy10: (state) => {
      state.value = state.value + 10;
    },
    IncrementMeByNum: (state, action) => {
      state.value = state.value + action.payload;
    },

    IncrementMeByNum1: (state, action) => {
      state.value = state.value + action.payload;
    },
  },
});

export const {
  IncrementMe,
  DecrementMe,
  IncrementMeBy10,
  IncrementMeByNum,
  changeInput,
  IncrementMeByNum1,
} = counterSlice.actions;

export default counterSlice.reducer;
