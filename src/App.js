import React from "react";
import Form from "./components/Form";
import Title from "./components/Title";
import Todos from "./components/Todos";

import { TodoProvider } from "./context/TodoContext";
import { TitleProvider } from "./context/TitleContext";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <TodoProvider>
        <div className="todolist">
          <TitleProvider>
            <Title />
          </TitleProvider>
          <Form />
          <Todos />
        </div>
      </TodoProvider>
    </div>
  );
};

export default App;
