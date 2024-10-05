import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  width: window.innerWidth,
};

export const screenSlice = createSlice({
  name: "screen",
  initialState,
  reducers: {
    setWidth(state, action) {
      state.width = action.payload;
    },
  },
});

export const { setWidth } = screenSlice.actions;
