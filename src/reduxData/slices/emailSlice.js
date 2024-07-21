import { createSlice } from "@reduxjs/toolkit";

export const emailSlice = createSlice({
  name: "email",
  initialState: {
    value: undefined,
  },
  reducers: {
    setEmail: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setEmail } = emailSlice.actions;

export default emailSlice.reducer;
