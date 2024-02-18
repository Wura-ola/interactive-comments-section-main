import React, { useState } from "react";

const couter = () => {
  const [count, setCount] = useState(10);

  const increment = (amount) => {
    if (typeof amount !== "number") {
    } else {
      setCount((count) => count + amount);
    }
  };
  const decrement = (amount) => {
    if (typeof amount !== "number") {
    } else {
      setCount((count) => count - amount);
    }
  };
  const reset = () => {
    setCount(0);
  };
  return (
    <div className="ml-6">
      <h1>Count value is:{count}</h1>
      <button className="mr-6" onClick={() => increment(4)}>
        increment
      </button>
      <button
        className="ml-6 mr-6"
        onClick={() => decrement(3)}
        disabled={count === 0}
      >
        decrement
      </button>
      <button className="ml-6 mr-6" onClick={reset}>
        reset
      </button>
    </div>
  );
};

export default couter;
