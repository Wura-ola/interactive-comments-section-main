import React, { useState } from "react";
import Button from "./Button";

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
      <h1 className=" mb-3 flex justify-center items-center">
        Count value is : {count}
      </h1>

      <Button
        className="bg-red-500 p-2 rounded-md font-poppins"
        text="Increment"
        handleButton={() => increment(4)}
      />

      <Button
        className="bg-blue-500 p-2 rounded-md"
        text="Reset"
        handleButton={reset}
      />
      <Button
        className="p-2 rounded-md bg-green-500 disabled:cursor-not-allowed"
        text="Decrement"
        handleButton={() => decrement(3)}
        disabled={count <= 0}
      />
    </div>
  );
};

export default couter;
