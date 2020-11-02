import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

const Form = () => {
  const {
    inputRef,
    inputValue,
    setInputValue,
    isEditing,
    setIsEditing,
    addTodo,
    editTodo,
    currentTodo
  } = useContext(TodoContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue === "") return;

    const newTodo = {
      text: inputValue,
      completed: false
    };

    addTodo(newTodo);
    setInputValue("");
    inputRef.current.focus();
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    if (inputValue === currentTodo) return;
    
    const updatedTodo = {
      id: currentTodo.id,
      text: inputValue,
      completed: currentTodo.completed
    };
    
    editTodo(updatedTodo)
    
    inputRef.current.focus();
    setIsEditing(false);
    setInputValue("");
  }

  const handleCancel = () => {
    setIsEditing(false);
    setInputValue("");
  }

  return (
    <form
      className="form"
      onSubmit={isEditing ? handleUpdate : handleSubmit}
    >
      <div className="input-container">
        <input
          className="input"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder={"Type here..."}
          ref={inputRef}
        />
        <button
          className="cancel"
          type="button"
          onClick={handleCancel}
          hidden={!isEditing}
        >
          ×
        </button>
      </div>
      <button
        className="submit"
        type="submit"
      >
        {isEditing ? "Update" : "Submit"}
      </button>
    </form>
  );
};

export default Form;
