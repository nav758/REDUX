import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk to simulate fetching data
export const fetchData = createAsyncThunk('counter/fetchData', async () => {
  // Simulate an API call
  const response = await new Promise((resolve) =>
    setTimeout(() => resolve({ data: 10 }), 1000)
  );
  return response.data; // Return the data to be used in the reducer
});

// Async thunk to fetch users
export const fetchUsers = createAsyncThunk('counter/fetchUsers', async () => {
  const response = await axios.get("https://jsonplaceholder.typicode.com/users");
  return response.data; // Return the users data to be used in the reducer
});

const initialState = {
  value: 0,
  status: 'idle', // Can be 'idle', 'loading', 'succeeded', 'failed'
  users: [],
  usersStatus: 'idle', // Status for fetching users
  error: null, // To hold any error message
};

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
    add_5: (state) => {
      state.value += 5;
    },
    multiply_5: (state) => {
      state.value *= 5;
    },
    sub_5: (state) => {
      state.value -= 5;
    },
    divide_5: (state) => {
      state.value /= 5;
    },
  },
  extraReducers: (builder) => {
    // Handling fetchData (async thunk)
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = 'loading'; // When the async action is in progress
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = 'succeeded'; // When the async action succeeds
        state.value = action.payload; // Set the value to the fetched data
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = 'failed'; // When the async action fails
        state.error = action.error.message; // Store error message
      });

    // Handling fetchUsers (async thunk)
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.usersStatus = 'loading'; // When the async action is in progress
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.usersStatus = 'succeeded'; // When the async action succeeds
        state.users = action.payload; // Store the fetched users
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.usersStatus = 'failed'; // When the async action fails
        state.error = action.error.message; // Store error message
      });
  },
});

export const { increment, decrement, add_5, multiply_5, sub_5, divide_5 } = counterSlice.actions;

export default counterSlice.reducer;
