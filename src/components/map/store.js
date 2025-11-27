import { configureStore } from "@reduxjs/toolkit";

const initialState = {
  map: {}
};

const dummyReducer = (state = initialState, action) => {
  return state;
};

const store = configureStore({
  reducer: dummyReducer,
});

export default store;
