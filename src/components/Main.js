import React, { useContext } from "react";
import Form from "./Form";
import Title from "./Title";
import Todos from "./Todos";
import { TodoContext } from "../context/TodoContext";

const Main = () => {
  const { todos } = useContext(TodoContext);
  const completed = todos.filter(t => t.completed === false).length
  
  return (
    <>
      <div className="todolist">
          <Title value={completed > 0 ? ("Todolist: " + completed) : "🥳"} />
        <Form />
        <Todos />
      </div>
    </>
  )
}
 
export default Main;

