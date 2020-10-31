import React, {
  createContext,
  useReducer,
  useState,
  useEffect,
  useRef
} from "react";
// import firebase from "../firebase";
import AppReducer from "./AppReducer";

const initialState = {
  todos: [
    { id: 0, text: "number 1", completed: false },
    { id: 1, text: "number 2", completed: true },
    { id: 2, text: "number 3", completed: true },
    { id: 3, text: "number 4", completed: false },
    { id: 4, text: "number 5", completed: false },
    { id: 5, text: "number 6", completed: false }
  ]
};

export const TodoContext = createContext(initialState);

export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  const inputRef = useRef(null);
  
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const [currentTodo, setCurrentTodo] = useState();

  // const db = firebase.firestore();

  // useEffect(() => {
  //   const unsubscribe = db.collection("todos").onSnapshot((snapshot) => {
  //     const todosData = [];
  //     snapshot.forEach((doc) => todosData.push({ ...doc.data(), id: doc.id }));
  //     setTodos(todosData);
  //     inputRef.current.focus();
  //   });

  //   return unsubscribe;
  // }, []);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  // Actions
  const addTodo = (todo) => {
    dispatch({
      type: "ADD_TODO",
      payload: todo
    });
  };

  const editTodo = (updatedTodo) => {
    const getPosition = state.todos.findIndex(el => el.id === updatedTodo.id)
    const newArray = state.todos.splice(getPosition,1,{id: updatedTodo.id, text: updatedTodo.text, completed: updatedTodo.completed})
    dispatch({
      type: "EDIT_TODO",
      payload: newArray
    });
  };
  
  const checkTodo = (checkedTodo) => {
    const getPosition = state.todos.findIndex(el => el.id === checkedTodo.id)
    const newArray = state.todos.splice(getPosition,1,{id: checkedTodo.id, text: checkedTodo.text, completed: !checkedTodo.completed})

    dispatch({
      type: "CHECK_TODO",
      payload: newArray
    });

    inputRef.current.focus();
  };

  const deleteTodo = (id) => {
    dispatch({
      type: "DELETE_TODO",
      payload: id
    });

    inputRef.current.focus();
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (inputValue === "") return;
  //   db.collection("todos").add({ text: inputValue });
  //   setInputValue("");
  //   inputRef.current.focus();
  // };

  // const handleCancel = () => {
  //   setIsEditing(false);
  //   setInputValue("");
  // };

  // const handleDeleteTodo = (id) => {
  //   db.collection("todos").doc(id).delete();
  // };

  // const updateSetInputValue = (text) => {
  //   setInputValue(text);
  // };

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
