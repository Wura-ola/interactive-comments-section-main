import React from "react";
// import Trash from "../assets/Trash.jpg";
import images from "../assets/avatars/trash.svg";
import edit from "../assets/8666681_edit_icon.svg";
const Todo = () => {
  return (
    <div className="flex gap-44 text-white rounded-lg mt-5 px-3 py-2 bg-violet-700">
      <p>Go shopping</p>
      <div className="flex items-center">
        <img className="  fill-blue-500" src={images} alt="" />
        <img className=" fill-white" src={edit} alt="" />
      </div>
    </div>
  );
};

export default Todo;
