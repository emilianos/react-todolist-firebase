import React, { useContext } from "react";
import { TodoContext } from "../context/TodoState";
import { v4 as uuidv4 } from "uuid";

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
    // db.collection("todos").add({ text: inputValue });
    const newTodo = {
      id: uuidv4(),
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
    // db.collection("todos").add({ text: inputValue });
    
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
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="input"
          placeholder={"Type here..."}
          ref={inputRef}
        />
        <button
          type="button"
          onClick={handleCancel}
          className="cancel"
          hidden={!isEditing}
        >
          ×
        </button>
      </div>
      <button
        type="submit"
        className="submit"
      >
        {isEditing ? "Update" : "Submit"}
      </button>
    </form>
  );
};

export default Form;
