import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value);
    setValue("");
  };
  return (
    <form className="flex justify-between font-rubik gap-1 ">
      <input
        onSubmit={handleSubmit}
        type="text"
        className=" py-1 px-3 w-60 bg-violet-900  border-violet-500  text-white border-solid outline outline-offset-0 outline-violet-500 outline-1"
        onChange={(e) => console.log(e.target.value)}
        value={value}
        placeholder="what is the task today"
      />
      <button type="submite" className=" bg-violet-700 px-4  py-2 text-white ">
        Add task
      </button>
    </form>
  );
};

export default TodoForm;
