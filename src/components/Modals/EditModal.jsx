import React from "react";
import Modal2 from "./Modal2";

function EditModal(props) {
  return (
    <div>
      {props.showModal === true ? (
        <Modal2>This is an Edit Modal</Modal2>
      ) : (
        <></>
      )}
    </div>
  );
}

export default EditModal;
