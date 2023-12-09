import { CreateSlice } from '@reduxjs/toolkit';

const filterInitialState = {
    filter: null,
    filterCars: [],
};

export const filterSlice = CreateSlice({
    name: 'filter',
    initialState: filterInitialState,
    reducers: {}
    
});
