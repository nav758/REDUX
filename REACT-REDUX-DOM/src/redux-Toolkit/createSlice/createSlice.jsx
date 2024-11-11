import { createSlice } from '@reduxjs/toolkit';

// Initial state
const initialState = {
  value: 0,
};

// Create a slice of the Redux store
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    // You can add more actions here if needed
  },
});

// Export the action creators
export const { increment, decrement } = counterSlice.actions;

// Export the reducer to be used in the store
export default counterSlice.reducer;




// createSlice creates the action creators (increment, decrement) and the reducer function in one go.

// The state is updated directly, thanks to Immer (Redux Toolkit uses Immer internally).


