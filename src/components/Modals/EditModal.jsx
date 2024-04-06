import React from "react";
import { Modal } from "../../utilis";
import Button from "../button/Button";
import { section1Array } from "../../utilis";
// import { useState } from "react";

// import Modal2 from "./Modal2.jsx";

// const carArray = [
//   { name: "Ferarri", price: "5 Million" },
//   { name: "Bugatti", price: "3 Million" },
//   { name: "Honda", price: "5 Thousand" },
// ];

// console.log(carArray?.map((item) => item.price));

function EditModal(props) {
  const { showModal, id, close } = props;
  const item = section1Array[id];
  // const [showModal, setShowModal] = useState(false);
  //  const [id, setId] = useState(0);
  //  const handleShowModal = () => {
  //    setShowModal(true);
  //  };

  // const handleModalClose = () => {
  //   console.log("close close");
  //   setShowModal(false);
  // };

  return (
    <>
      {showModal === true ? (
        <div className="fixed overflow-hidden inset-0 bg-black bg-opacity-30 backdrop-blur-sm max-w-96 flex flex-col justify-center items-center">
          <section className="rounded-lg flex flex-col justify-center  bg-white w-96 p-5 ">
            <h3 className="cursor-pointer">{item?.head}</h3>
            <p className="text-grayishBlue  text-start mt-3">{item?.body}</p>
            <div className="flex   ml-0 mt-3 gap-10 mb-3">
              <Button
                className="bg-red-500 px-3 py-1  text-sm text-white rounded"
                text="YES, EDIT"
              />
              <Button
                className="bg-gray-500 px-2 py-1 text-sm text-white rounded"
                text="NO, CANCELS"
                onClick={close}
              />
            </div>
          </section>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default EditModal;
