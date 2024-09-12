import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type BurgerSlice = {
  showBurger: boolean;
};

const initialState: BurgerSlice = {
  showBurger: false,
};

export const burgerSlice = createSlice({
  name: "burger",
  initialState,
  reducers: {
    setShowBurger: (state, action: PayloadAction<boolean>) => {
      state.showBurger = action.payload;
    },
  },
});

export const { setShowBurger } = burgerSlice.actions;
export default burgerSlice.reducer;
