import { useDispatch } from "react-redux";
import styles from "./TodoItem.module.css";
import { removeTodo, toggleTodoCompleted } from "../../store/todoSlice";

export const TodoItem = ({ text, completed, id }) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.card}>
      <input
        onChange={() => dispatch(toggleTodoCompleted({ id }))}
        checked={completed}
        type="checkbox"
        className={styles.checkbox}
      />
      <p className={styles.text}>{text}</p>
      <span
        onClick={() => dispatch(removeTodo({ id }))}
        className={styles.delete}
      ></span>
    </div>
  );
};
