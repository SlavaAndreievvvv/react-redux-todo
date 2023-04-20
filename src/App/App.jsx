import { useState } from "react";
import { Form } from "../components/Form";
import styles from "./App.module.css";
import { TodoList } from "../components/TodoList";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/todoSlice";

export const App = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const addTask = (e) => {
    e.preventDefault();
    if (text.trim().length) {
      dispatch(addTodo({ text }));
      setText("");
    }
  };

  return (
    <div className={styles.app}>
      <Form
        value={text}
        handleInput={setText}
        handleSubmit={addTask}
        children="add todo"
      />
      <TodoList />
    </div>
  );
};
