import React from "react";
import Modal2 from "./Modal2.jsx";

function DeleteModal(props) {
  console.log(props);
  return (
    <div>
      {props.showModal === true ? (
        <Modal2>this is a delete Modal</Modal2>
      ) : (
        <></>
      )}
    </div>
  );
}

export default DeleteModal;
