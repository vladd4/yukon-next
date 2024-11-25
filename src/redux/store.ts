import { configureStore } from "@reduxjs/toolkit";
import alertSlice from "./slices/alertSlice";
import burgerSlice from "./slices/burgerSlice";
import searchSlice from "./slices/searchSlice";

const store = configureStore({
  reducer: {
    alert: alertSlice,
    burger: burgerSlice,
    search: searchSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
