import { createSlice } from "@reduxjs/toolkit";

export const returnCitySlice = createSlice({
  name: "returnCity",
  initialState: {
    value: undefined,
  },
  reducers: {
    setReturnCity: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setReturnCity } = returnCitySlice.actions;

export default returnCitySlice.reducer;
