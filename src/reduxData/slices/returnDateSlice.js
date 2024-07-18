import { createSlice } from "@reduxjs/toolkit";

export const returnDateSlice = createSlice({
  name: "returnDate",
  initialState: {
    value: undefined,
  },
  reducers: {
    setReturnDate: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setReturnDate } = returnDateSlice.actions;

export default returnDateSlice.reducer;
