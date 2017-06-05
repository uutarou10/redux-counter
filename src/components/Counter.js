import React from 'react';

const Counter = ({value, onIncrement, onDecrement}) => {
  return (
    <div>
      <p>Counter: {value}</p>
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
    </div>
  );
}

export default Counter;

