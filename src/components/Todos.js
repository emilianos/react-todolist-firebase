import React, { useContext } from "react";
import Todo from "./Todo";
import { TodoContext } from "../context/TodoContext";

const Todos = () => {
  const { todos } = useContext(TodoContext);
  
  return (
    <div>
      {todos.map((todo, index) => (
        <Todo key={todo.id} index={index} todo={todo} />
      ))}
    </div>
  );
};

export default Todos;
