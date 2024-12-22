"use client";

import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./features/cartSlice"; // Example reducer

export const store = configureStore({
  reducer: {
    cart: cartSlice, // Example slice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
