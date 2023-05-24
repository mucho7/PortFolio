import { configureStore } from "@reduxjs/toolkit";

import refSlice from "./containerRefSlice";

export const store = configureStore({
  reducer: {
    refSlice: refSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
