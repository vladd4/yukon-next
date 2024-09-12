import { configureStore } from "@reduxjs/toolkit";
import alertSlice from "./slices/alertSlice";
import burgerSlice from "./slices/burgerSlice";

const store = configureStore({
  reducer: {
    alert: alertSlice,
    burger: burgerSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
