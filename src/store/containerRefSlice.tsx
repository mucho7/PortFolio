import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";

type RefType = {
  target: "infoRef" | "skillRef" | "archiveRef" | "projectRef";
  value: number;
};

const initialState = {
  infoRef: 0,
  skillRef: 0,
  archiveRef: 0,
  projectRef: 0,
};

const refSlice = createSlice({
  name: "refSlice",
  initialState,
  reducers: {
    changeRef: (state, action: PayloadAction<RefType>) => {
      state[action.payload.target] = action.payload.value - 64;
    },
    toTargetRef: (
      state,
      action: PayloadAction<
        "infoRef" | "skillRef" | "archiveRef" | "projectRef"
      >
    ) => {
      console.log(current(state));
      window.scrollTo({ top: state[action.payload], behavior: "smooth" });
    },
  },
});

export const { changeRef, toTargetRef } = refSlice.actions;
export default refSlice.reducer;
