// src/App.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from './reducers/counterSlice';

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Redux Counter App</h1>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())} className="button-spacing">Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <br/>
      <button onClick={() => dispatch(reset())} className="resetStyle">Reset</button>
    </div>
  );
}

export default App;

