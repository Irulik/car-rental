import { CreateSlice } from '@reduxjs/toolkit';

const carsInitialState = {
    cars: [],
    allCars: [],
    carsBrands: [],
    isLoading: false,
    error: null,
};

export const carsSlice = CreateSlice({
    name: 'cars',
    initialState: carsInitialState,
    reducers: {}
    
});
