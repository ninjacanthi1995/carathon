import { createSlice } from "@reduxjs/toolkit";

export const pickupDateSlice = createSlice({
  name: "pickupDate",
  initialState: {
    value: undefined,
  },
  reducers: {
    setPickupDate: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setPickupDate } = pickupDateSlice.actions;

export default pickupDateSlice.reducer;
