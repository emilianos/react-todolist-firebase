import React, { useContext } from "react";
import { TodoContext } from "../context/TodoState";
import Todo from "./Todo";

const Todos = () => {
  const { todos } = useContext(TodoContext);

  return (
    <div>
      {todos.map((todo, index) => (
        <Todo key={todo.id} todo={todo} index={index} />
      ))}
    </div>
  );
};

export default Todos;
