import React, { useContext } from "react";
import { TitleContext } from "../context/TitleContext";
import { TodoContext } from "../context/TodoContext";

const Title = () => {
  const { listName } = useContext(TitleContext);
  const { todos } = useContext(TodoContext);
  const completed = todos.filter(t => t.completed === false).length

  return (
    <div>
      <h1 className="title">{listName}'s Todolist: {completed > 0 ? completed : "🥳"}</h1>
    </div>
  );
};

export default Title;
