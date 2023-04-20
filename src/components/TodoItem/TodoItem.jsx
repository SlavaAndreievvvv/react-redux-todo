import { useDispatch } from "react-redux";
import styles from "./TodoItem.module.css";
import { deleteTodo, toggleStatus } from "../../store/todoSlice";

export const TodoItem = ({ title, completed, id }) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.card}>
      <input
        onChange={() => dispatch(toggleStatus(id))}
        checked={completed}
        type="checkbox"
        className={styles.checkbox}
      />
      <p className={styles.text}>{title}</p>
      <span
        onClick={() => dispatch(deleteTodo(id))}
        className={styles.delete}
      ></span>
    </div>
  );
};
