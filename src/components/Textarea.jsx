import React from "react";

function Textarea(props) {
  return (
    <div>
      <textarea className={props.children} name="" id="" cols="30" rows="10">
        {props.children}
      </textarea>
    </div>
  );
}

export default Textarea;
