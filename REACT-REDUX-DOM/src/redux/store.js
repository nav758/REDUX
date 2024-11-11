// import { createStore,applyMiddleware } from "redux";
// import {composeWithDevTools} from "redux-devtools-extension"
// import rootReducer from "./rootReducer";
// import {thunk} from "redux-thunk"


// const store = createStore(rootReducer,composeWithDevTools(applyMiddleware( thunk)));

// export default store



import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../redux-Toolkit/counterSlice/counterSlice'; // Path to your counterSlice

const store = configureStore({
  reducer: {
    counter: counterReducer, // Register the counter reducer
  },
});

export default store;
