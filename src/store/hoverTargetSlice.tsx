import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  target: 0,
  persistTarget: 0,
};

const hoverSlice = createSlice({
  name: "hoverSlice",
  initialState,
  reducers: {
    setTarget: (state, action: PayloadAction<number>) => {
      state.target = action.payload;
    },
    setPersistTarget: (state, action: PayloadAction<number>) => {
      state.persistTarget = action.payload;
    },
    clearTarget: (state) => {
      state.target = 0;
    },
  },
});

export const { setTarget, setPersistTarget, clearTarget } = hoverSlice.actions;
export default hoverSlice.reducer;
