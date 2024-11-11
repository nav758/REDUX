import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, add_5, multiply_5, sub_5, divide_5, fetchData, fetchUsers } from '../../redux-Toolkit/counterSlice/counterSlice';

function Toolkit() {
  const dispatch = useDispatch();

  const counter = useSelector((state) => state.counter.value);
  const status = useSelector((state) => state.counter.status);
  const users = useSelector((state) => state.counter.users);
  const usersStatus = useSelector((state) => state.counter.usersStatus);
  const error = useSelector((state) => state.counter.error);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchData());  // Fetch initial data when the Toolkit is first loaded
    }
    if (usersStatus === 'idle') {
      dispatch(fetchUsers());  // Fetch users when the Toolkit is first loaded
    }
  }, [dispatch, status, usersStatus]);

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(add_5())}>Add 5</button>
      <button onClick={() => dispatch(multiply_5())}>Multiply by 5</button>
      <button onClick={() => dispatch(sub_5())}>Subtract 5</button>
      <button onClick={() => dispatch(divide_5())}>Divide by 5</button>
      
      <h2>Status: {status}</h2>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'failed' && <p>Error: {error}</p>}
      {status === 'succeeded' && <p>Data Fetched: {counter}</p>}

      <h3>Users:</h3>
      {usersStatus === 'loading' && <p>Loading users...</p>}
      {usersStatus === 'failed' && <p>Error: {error}</p>}
      {usersStatus === 'succeeded' && (
        <ul> 
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Toolkit;
