import React, { useContext } from "react";
import Todo from "./Todo";
import { TodoContext } from "../context/TodoContext";
import { AuthContext } from "../Auth";

const Todos = () => {
  const { todos } = useContext(TodoContext);
  const { currentUser } = useContext(AuthContext)
  
  return (
    <div>
      {todos.map((todo, index) => (
        <Todo key={todo.id} index={index} todo={todo} />
      ))}
    </div>
  );
};

export default Todos;
