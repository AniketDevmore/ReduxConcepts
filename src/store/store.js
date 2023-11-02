import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../slices/counterSlice";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";
import cartReducer from "../slices/cartReducer";

const peristConfig = {
  key: "root",
  storage,
  version: 1,
};

const reducer = combineReducers({
  // counterSlice: counterSlice,
  persistedStore: counterSlice,
  notPersistedStore: cartReducer,
});

const persistedReducer = persistReducer(peristConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
