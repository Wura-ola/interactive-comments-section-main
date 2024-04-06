import React from "react";
import ramsesmiron from "../../assets/avatars/image-ramsesmiron.png";
import Textarea from "./Textarea";
import { section1Array } from "../../utilis";
import Button from "../button/Button";
function Input() {
  return (
    <div className=" hidden md:bg-white md:flex md:justify-between md:min-h-150px md:rounded md:shadow-sm md:shadow-gray-500 md:mt-3 md:py-2 md:px-7">
      <img
        src={ramsesmiron}
        alt="User Avatar"
        className=" md:visible md:w-11 md:rounded-full md:mr-4 md:self-start"
      />
      <Textarea />
      {/* <textarea
        type="text"
        placeholder="Add a comment..."
        className="border-2 border-lightGray w-[30rem] h-24 "
      ></textarea> */}
      {/* </div> */}
      <Button className="ml-4 px-3 py-1 self-start bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue">
        SEND
      </Button>
    </div>
  );
}

export default Input;
