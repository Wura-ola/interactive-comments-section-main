import React, { useState } from "react";
import Button from "./Button";
// import Form from "./Form";

const couter = () => {
  // const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState(0);

  const increment = (amount) => {
    if (typeof amount !== "number") {
    } else {
      setInputValue((inputValue) => Number(inputValue) + Number(amount));
      // setInputValue(value + amount);
    }
  };
  const decrement = (amount) => {
    if (typeof amount !== "number") {
    } else {
      setInputValue((inputValue) => Number(inputValue) - Number(amount));
      // setInputValue((inputValue) => inputValue - amount);
    }
  };
  const reset = () => {
    setInputValue(0);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  console.log(inputValue);
  return (
    <div className="ml-6">
      <div className="flex flex-col">
        <label htmlFor="">Enter a number:</label>
        <input
          placeholder="Enter a number"
          type="number"
          value={inputValue}
          onChange={handleInputChange}
          className="px-4 py-1 mt-3 mb-3"
        />
      </div>

      {/* <Form value={inputValue} onChange={handleInputChange} /> */}
      <h1 className=" mb-3 flex justify-center items-center">
        Count value is : {inputValue}
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
        disabled={inputValue <= 0}
      />
    </div>
  );
};

export default couter;
