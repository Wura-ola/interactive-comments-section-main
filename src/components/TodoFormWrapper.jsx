import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { Todo } from "./Todo";
// import {v4 as uuidv4} from uuid;
// uuidv4()
// import uuid from "uuid";
const TodoFormWrapper = () => {
  const [todos, setTodos] = useState({});

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuid(), task: todo, completed: false, isEditing: false },
    ]);
    console.log(todos);
  };
  return (
    <div className=" bg-violet-900 p-8 ">
      <TodoForm addTodo={addTodo} />
      {todos.map((todo, index) => (
        <Todo task={todo} key={index} />
      ))}
    </div>
  );
};

export default TodoFormWrapper;
