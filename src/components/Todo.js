import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

const Todo = ({ todo }) => {
  const { setInputValue, setCurrentTodo, setIsEditing, inputRef, checkTodo, deleteTodo } = useContext(
    TodoContext
  );

  const handleEdit = (e, todo) => {
    e.stopPropagation()
    setIsEditing(true);
    setInputValue(todo.text);
    inputRef.current.focus();
    setCurrentTodo(todo);
  };

  const handleDelete = (e, id) => {
    e.stopPropagation()
    deleteTodo(id)
    setIsEditing(false);
    setInputValue("");
  };

  const handleCheck = (todo) => {
    setIsEditing(false);
    setInputValue("");
    checkTodo(todo);
  }

  return (
    <div key={todo.id} className={todo.completed ? "todo completed" : "todo"} onClick={() => handleCheck(todo)}>
      <span className="todo-label">
        <span className="checkbox">{todo.completed ? "☑︎" : "☐"}</span>
        <span className="text">{todo.text}</span>
      </span>
      <span className="todo-delete" onClick={(e) => handleDelete(e, todo.id)}>
        ×
      </span>
      <span className="todo-delete" onClick={(e) => handleEdit(e, todo)} hidden={todo.completed}>
        ✎
      </span>
    </div>
  );
};

export default Todo;
