import React, { useContext } from "react";
import Form from "./Form";
import Title from "./Title";
import Todos from "./Todos";
import { TodoProvider } from "../context/TodoContext";
import { TodoContext } from "../context/TodoContext";

const Main = () => {
  const { todos } = useContext(TodoContext);
  const completed = todos.filter(t => t.completed === false).length
  // console.log(completed)
  
  return (
    <TodoProvider>
      <div className="todolist">
          <Title value={completed > 0 ? ("Todolist: " + completed) : "🥳"} />
        <Form />
        <Todos />
      </div>
    </TodoProvider>
  )
}
 
export default Main;

