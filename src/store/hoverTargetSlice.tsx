import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type RefType = {
  target: number;
};

const initialState = {
  target: -1,
};

const hoverSlice = createSlice({
  name: "refSlice",
  initialState,
  reducers: {
    setTarget: (state, action: PayloadAction<number>) => {
      state.target = action.payload;
    },
    clearTarget: (state) => {
      state.target = -1;
    },
  },
});

export const { setTarget, clearTarget } = hoverSlice.actions;
export default hoverSlice.reducer;
