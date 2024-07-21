import { createSlice } from "@reduxjs/toolkit";

export const pickupCitySlice = createSlice({
  name: "pickupCity",
  initialState: {
    value: undefined,
  },
  reducers: {
    setPickupCity: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setPickupCity } = pickupCitySlice.actions;

export default pickupCitySlice.reducer;
