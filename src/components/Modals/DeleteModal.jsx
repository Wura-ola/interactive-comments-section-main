import React from "react";
import { Modal } from "../../utilis";
import Button from "../button/Button";
import { section2Arry } from "../../utilis";

// import Modal2 from "./Modal2.jsx";

function DeleteModal(props) {
  const { showModal, id, close } = props;
  const item = section2Arry[id];

  return (
    <>
      {showModal === true ? (
        <div>
          <div className="flex justify-center items-center  ">
            <div className="fixed overflow-hidden inset-0 bg-black bg-opacity-30 backdrop-blur-sm max-w-96 flex flex-col justify-center items-center">
              <section className="rounded-lg flex flex-col justify-center  bg-white w-80 p-5 ">
                <h3 className="cursor-pointer">{item.head}</h3>
                <p className="text-grayishBlue  text-start mt-3">{item.body}</p>
                <div className="flex  mt-3 gap-7 mb-3">
                  <Button
                    className="bg-red-500 px-3 py-1 text-white rounded"
                    text="Yes Delete"
                  />
                  <Button
                    className="bg-gray-500 px-6 py-1 text-white rounded"
                    text="No Cancel"
                    onClick={close}
                  />
                </div>
              </section>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default DeleteModal;
