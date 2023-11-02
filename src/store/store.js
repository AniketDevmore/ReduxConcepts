import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../slices/counterSlice";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";

const peristConfig = {
  key: "root",
  storage,
  version: 1,
  whitelist: ["data"],
};

const reducer = combineReducers({
  counterSlice: counterSlice,
});

const persistedReducer = persistReducer(peristConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
