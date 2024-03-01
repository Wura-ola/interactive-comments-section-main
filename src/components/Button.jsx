import React from "react";

function Button(props) {
  return (
    <button
      className={`ml-6 mr-6 ${props.className}`}
      onClick={props.handleButton}
      disabled={props.disabled}
    >
      {props.text}
    </button>
  );
}

export default Button;
