import { Vacancy } from "@/types/vacancy.type";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type SearchSlice = {
  filteredVacancies: Vacancy[] | null;
};

const initialState: SearchSlice = {
  filteredVacancies: null,
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setFilteredVacancies: (state, action: PayloadAction<Vacancy[] | null>) => {
      state.filteredVacancies = action.payload;
    },
  },
});

export const { setFilteredVacancies } = searchSlice.actions;
export default searchSlice.reducer;
