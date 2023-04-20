import { useEffect, useState } from "react";
import { Form } from "../components/Form";
import styles from "./App.module.css";
import { TodoList } from "../components/TodoList";
import { useDispatch, useSelector } from "react-redux";
import { addNewTodo, fetchTodos } from "../store/todoSlice";
import { Spinner } from "../components/Spinner/Spinner";
import { ErrorMessage } from "../components/ErrorMessage/ErrorMessage";

export const App = () => {
  const [title, setTitle] = useState("");
  const { status, error } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const addTask = (e) => {
    e.preventDefault();
    if (title.trim().length) {
      dispatch(addNewTodo(title));
      setTitle("");
    }
  };

  return (
    <div className={styles.app}>
      <Form
        value={title}
        handleInput={setTitle}
        handleSubmit={addTask}
        children="add todo"
      />
      {status === "loading" && <Spinner />}
      {error && <ErrorMessage message={error} />}
      <TodoList />
    </div>
  );
};
