import styles from "./Form.module.css";

export const Form = ({ value, handleInput, handleSubmit, children }) => {
  return (
    <form className={styles.form}>
      <input
        value={value}
        onChange={(e) => handleInput(e.target.value)}
        className={styles.input}
      />
      <button onClick={handleSubmit} className={styles.button}>
        {children}
      </button>
    </form>
  );
};
