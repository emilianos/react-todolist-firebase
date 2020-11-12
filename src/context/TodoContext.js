import React, {
  createContext,
  useReducer,
  useState,
  useEffect,
  useContext,
  useRef
} from "react";
import firebase from "../firebase";
import TodoReducer from "./TodoReducer";
import { AuthContext } from "../Auth";

const initialState = {
  todos: []
};

export const TodoContext = createContext(initialState);

export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(TodoReducer, initialState);

  const { currentUser } = useContext(AuthContext)
  
  const inputRef = useRef(null);

  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [currentTodo, setCurrentTodo] = useState(null);

  const db = firebase.firestore();
  const todosRef = db.collection('todos');

  useEffect(() => {
    if(currentUser === null) return

    const doc = todosRef.where("userUID", "==", currentUser.uid).orderBy("createdAt");
    const unsubscribe = doc.onSnapshot(snapshot => {
      const todosData = [...state.todos];
      
      snapshot.forEach(doc => {
        todosData.push({ ...doc.data(), id: doc.id })
      });

      dispatch({
        type: "UPDATE_TODOS",
        payload: todosData
      });
    }, err => {
      console.error(`Encountered error: ${err}`);
    });

    return unsubscribe;
  }, [currentUser, db]);

  const addTodo = (todo) => {
    const newTodo = todosRef.add(todo);

    dispatch({
      type: "ADD_TODO",
      payload: newTodo
    });
  };

  const editTodo = (id, updatedTodo) => {
    const updTodo = todosRef.doc(id).set(updatedTodo);

    dispatch({
      type: "EDIT_TODO",
      payload: updTodo
    });
  };
  
  const checkTodo = (todo) => {
    const chkTodo = todosRef.doc(todo.id).set({
      text: todo.text,
      completed: !todo.completed,
      createdAt: todo.createdAt,
      userUID: todo.userUID
    });

    dispatch({
      type: "CHECK_TODO",
      payload: chkTodo
    });

    inputRef.current.focus();
  };

  const deleteTodo = (id) => {
    const delTodo = todosRef.doc(id).delete();

    dispatch({
      type: "DELETE_TODO",
      payload: delTodo
    });

    inputRef.current.focus();
  };

  const resetTodo = () => {
    dispatch({
      type: 'RESET_TODO'
    })
  }

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
          setCurrentTodo,
          resetTodo
        }}
      >
        {children}
      </TodoContext.Provider>
    </div>
  );
};
