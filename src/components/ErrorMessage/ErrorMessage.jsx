import React from "react";
import styles from "./ErrorMessage.module.css";

export const ErrorMessage = ({ message }) => {
  return (
    <div className={styles.errorPage}>
      <div className={styles.errorMessage}>
        <h2>Error</h2>
        <p>Something went wrong. Please try again later.</p>
        <p>{message}</p>
        <button onClick={() => (window.location.href = "index.html")}>
          Go back
        </button>
      </div>
    </div>
  );
};
