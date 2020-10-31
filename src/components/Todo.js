import React, { useContext } from "react";
import { TodoContext } from "../context/TodoState";

const Todo = ({ todo }) => {
  const { setInputValue, setCurrentTodo, setIsEditing, inputRef, checkTodo, deleteTodo } = useContext(
    TodoContext
  );

  const handleEdit = (todo) => {
    setIsEditing(true);
    setInputValue(todo.text);
    inputRef.current.focus();
    setCurrentTodo(todo);
  };

  // const handleCheck = (todo) => {
  //   setCurrentTodo(todo);
  //   inputRef.current.focus();
  // };

  return (
    <div key={todo.id} className={todo.completed ? "todo completed" : "todo"}>
      <span onClick={() => checkTodo(todo)} className="todo-label">
        <span className="checkbox">{todo.completed ? "☑︎" : "☐"}</span>
        <span className="text">{todo.text}</span>
      </span>
      <span onClick={() => deleteTodo(todo.id)} className="todo-delete">
        ×
      </span>
      <span onClick={() => handleEdit(todo)} className="todo-delete" hidden={todo.completed}>
        ✎
      </span>
    </div>
  );
};

export default Todo;
