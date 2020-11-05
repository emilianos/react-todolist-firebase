import React from "react";
import Form from "./Form";
import Title from "./Title";
import Todos from "./Todos";
import { TodoProvider } from "../context/TodoContext";
import { TitleProvider } from "../context/TitleContext";

const Main = () => {
  return (
    <TodoProvider>
      <div className="todolist">
        <TitleProvider>
          <Title />
        </TitleProvider>
        <Form />
        <Todos />
      </div>
    </TodoProvider>
  )
}
 
export default Main;