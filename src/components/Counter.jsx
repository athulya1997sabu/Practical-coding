import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [incrementCount, setIncrementCount] = useState(null);
  const handleIncrement = () => {
    if (incrementCount !== null && count >= incrementCount) {
      return;
    }
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };
  const handleInput = (e) => {
    setIncrementCount(parseInt(e.target.value));
  };
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>_</button>
      <br></br>
      <input onChange={handleInput} />
    </div>
  );
}
export default Counter;
