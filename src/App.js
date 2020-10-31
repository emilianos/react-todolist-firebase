import React from "react";
import Form from "./components/Form";
import Title from "./components/Title";
import Todos from "./components/Todos";
import { TodoProvider } from "./context/TodoState";
import { TitleProvider } from "./context/TitleState";
import "./App.css";

/**
 * TODO
 * 1. sort items by creation date
 * 2. fix Firebase warning
 */

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
