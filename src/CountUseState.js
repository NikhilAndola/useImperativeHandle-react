import React, { useState, forwardRef, useImperativeHandle } from 'react';

export const CountUseState = forwardRef((props, ref) => {
  const [count, setCount] = useState(Number());
  const increment = () => {
    setCount(count + 1);
  };
  useImperativeHandle(ref, () => ({
    increment,
    yell: () => alert(count),
  }));
  return (
    <div>
      {/* <button onClick={() => setCount((x) => x + 1)}> */}
      <button onClick={increment}>Click to increase</button>
      <h3>Value:{count} </h3>
    </div>
  );
});
