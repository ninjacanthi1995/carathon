import { createSlice } from "@reduxjs/toolkit";

export const carTypeSlice = createSlice({
  name: "carType",
  initialState: {
    value: undefined,
  },
  reducers: {
    setCarType: (state, action) => {
      console.log("action", action);
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCarType } = carTypeSlice.actions;

export default carTypeSlice.reducer;
