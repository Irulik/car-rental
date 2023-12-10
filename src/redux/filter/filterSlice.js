import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = {
  carBrand: null,
  filterCars: [],
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    setCarBrandFilter: (state, action) => {
      state.carBrand = action.payload;
    },
  },
});

export const { setCarBrandFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
export default filterSlice.reducer;
