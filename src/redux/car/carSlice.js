import { createSlice } from '@reduxjs/toolkit';

const carsInitialState = {
    cars: [],
    allCars: [],
    carsBrands: [],
    isLoading: false,
    error: null,
};

export const carSlice = createSlice({
    name: 'cars',
    initialState: carsInitialState,
    reducers: {
     
    }
});


export const carsReducer = carSlice.reducer;