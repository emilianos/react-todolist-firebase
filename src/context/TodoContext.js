import React, {
  createContext,
  useReducer,
  useState,
  useEffect,
  useRef
} from "react";
import firebase from "../firebase";
import TodoReducer from "./TodoReducer";

const initialState = {
  todos: []
};

export const TodoContext = createContext(initialState);

export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(TodoReducer, initialState);

  const inputRef = useRef(null);
  
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const [currentTodo, setCurrentTodo] = useState(null);

  const db = firebase.firestore();

  useEffect(() => {
    const unsubscribe = db.collection("todos").orderBy("createdAt").onSnapshot((snapshot) => {
      const todosData = [...state.todos];
      snapshot.forEach((doc) => todosData.push({ ...doc.data(), id: doc.id }));

      inputRef.current.focus();

      dispatch({
        type: "UPDATE_TODOS",
        payload: todosData
      });
    });

    return unsubscribe;
  }, [db]);


  const addTodo = (todo) => {
    const newTodo = db.collection("todos").add(todo);

    dispatch({
      type: "ADD_TODO",
      payload: newTodo
    });
  };

  const editTodo = (updatedTodo) => {
    const updTodo = db.collection("todos").doc(updatedTodo.id).set(updatedTodo);

    dispatch({
      type: "EDIT_TODO",
      payload: updTodo
    });
  };
  
  const checkTodo = (todo) => {
    const chkTodo = db.collection("todos").doc(todo.id).set({
      text: todo.text,
      completed: !todo.completed
    });

    dispatch({
      type: "CHECK_TODO",
      payload: chkTodo
    });

    inputRef.current.focus();
  };

  const deleteTodo = (id) => {
    const delTodo = db.collection("todos").doc(id).delete();

    dispatch({
      type: "DELETE_TODO",
      payload: delTodo
    });

    inputRef.current.focus();
  };

  return (
    <div>
      <TodoContext.Provider
        value={{
          todos: state.todos,
          inputRef,
          inputValue,
          setInputValue,
          isEditing,
          setIsEditing,
          addTodo,
          editTodo,
          checkTodo,
          deleteTodo,
          currentTodo,
          setCurrentTodo
        }}
      >
        {children}
      </TodoContext.Provider>
    </div>
  );
};
