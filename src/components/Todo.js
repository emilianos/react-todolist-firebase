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
    <div className={todo.completed ? "todo completed" : "todo"} onClick={(e) => (e.target === e.currentTarget) && checkTodo(todo)}>
      <span className="todo-label">
        <span className="checkbox">{todo.completed ? "☑︎" : "☐"}</span>
        <span className="text">{todo.text}</span>
      </span>
      <span className="todo-delete" onClick={() => deleteTodo(todo.id)}>
        ×
      </span>
      <span className="todo-delete" onClick={() => handleEdit(todo)} hidden={todo.completed}>
        ✎
      </span>
    </div>
  );
};

export default Todo;
