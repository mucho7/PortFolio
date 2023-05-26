import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  target: 0,
  persistTarget: false,
};

const hoverSlice = createSlice({
  name: "hoverSlice",
  initialState,
  reducers: {
    setTarget: (state, action: PayloadAction<number>) => {
      if (state.target !== action.payload) state.persistTarget = false;
      state.target = action.payload;
    },
    setPersistTarget: (state, action: PayloadAction<boolean>) => {
      state.persistTarget = action.payload;
    },
    clearTarget: (state) => {
      if (!state.persistTarget) state.target = 0;
    },
  },
});

export const { setTarget, setPersistTarget, clearTarget } = hoverSlice.actions;
export default hoverSlice.reducer;
