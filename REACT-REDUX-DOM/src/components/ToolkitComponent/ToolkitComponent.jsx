import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
} from "../../redux-Toolkit/createSlice/createSlice";

function ToolkitComponent() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.value);

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}

export default ToolkitComponent;

// useSelector: This hook lets you access the Redux store’s state.
//  It’s equivalent to mapStateToProps in React-Redux.

// useDispatch: This hook gives you access to the dispatch function,
//  which you use to dispatch actions like increment() or decrement().
