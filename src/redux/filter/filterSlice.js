import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = {
  carBrand: null,
  price: null,
  filterCars: [],
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    setCarBrandFilter: (state, action) => {
      state.carBrand = action.payload;
    },
    setPriceFilter: (state, action) => {
      state.price = action.payload;
    },
  },
});

export const { setCarBrandFilter, setPriceFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
export default filterSlice.reducer;