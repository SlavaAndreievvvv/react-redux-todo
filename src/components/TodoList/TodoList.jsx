import styles from "./TodoList.module.css";
import { TodoItem } from "../TodoItem";
import { useSelector } from "react-redux";

export const TodoList = () => {
  const todos = useSelector((state) => state.todos.todos);

  return (
    <div className={styles.todoList}>
      {todos.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </div>
  );
};
