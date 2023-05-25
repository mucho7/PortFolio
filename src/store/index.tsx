import { configureStore } from "@reduxjs/toolkit";

import refSlice from "./containerRefSlice";
import hoverSlice from "./hoverTargetSlice";

export const store = configureStore({
  reducer: {
    refSlice: refSlice,
    hoverSlice: hoverSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
