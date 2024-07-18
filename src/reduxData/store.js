import { configureStore } from "@reduxjs/toolkit";
import pickupDateReducer from "./slices/pickupDateSlice";
import returnDateReducer from "./slices/returnDateSlice";

export default configureStore({
  reducer: {
    pickupDate: pickupDateReducer,
    returnDate: returnDateReducer,
  },
});
