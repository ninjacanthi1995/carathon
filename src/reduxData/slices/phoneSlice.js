import { createSlice } from "@reduxjs/toolkit";

export const phoneSlice = createSlice({
  name: "phone",
  initialState: {
    value: undefined,
  },
  reducers: {
    setPhone: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setPhone } = phoneSlice.actions;

export default phoneSlice.reducer;
