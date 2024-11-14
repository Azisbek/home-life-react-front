import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: "",
  category: "",
  color: "",
  brand: "",
  price_min: "",
  price_max: "",
};

export const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setFilter(state, action) {
      const { key, value } = action.payload;
      state[key] = value;
    },
    resetFilters() {
      return initialState;
    },
  },
});

export const { setFilter, resetFilters } = filterSlice.actions;
