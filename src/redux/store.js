import { configureStore } from '@reduxjs/toolkit';

const initialState = {
  filter: null,
};

const myReducer = (state = initialState, action) => {
  // Логіка обробки дій тут
  return state;
};

const store = configureStore({
  reducer: {
    myValue: myReducer,
  },
});

export default store;
