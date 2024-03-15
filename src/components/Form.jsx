import React from "react";

function Form({ inputValue, setInputValue }) {
  return (
    <input
      placeholder="Enter a number"
      type="number"
      value={inputValue}
    ></input>
  );
}

export default Form;
