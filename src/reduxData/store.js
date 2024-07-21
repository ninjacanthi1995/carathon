import { configureStore } from "@reduxjs/toolkit";
import pickupCitySlice from "./slices/pickupCitySlice";
import returnCitySlice from "./slices/returnCitySlice";
import pickupDateSlice from "./slices/pickupDateSlice";
import returnDateSlice from "./slices/returnDateSlice";
import carTypeSlice from "./slices/carTypeSlice";
import nameSlice from "./slices/nameSlice";
import phoneSlice from "./slices/phoneSlice";
import emailSlice from "./slices/emailSlice";

export default configureStore({
  reducer: {
    pickupDate: pickupDateSlice,
    returnDate: returnDateSlice,
    pickupCity: pickupCitySlice,
    returnCity: returnCitySlice,
    carType: carTypeSlice,
    name: nameSlice,
    phone: phoneSlice,
    email: emailSlice,
  },
});
