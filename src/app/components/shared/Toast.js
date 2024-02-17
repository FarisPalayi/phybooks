"use client";
import { useState } from "react";
import styles from "../../styles/components/Toast.module.scss";

export default function Toast({ state = "Warning", info }) {
  if (state !== "Success" && state !== "Warning" && state !== "Error")
    state = "Warning";

  info = info || "Some error has occurred!"; //!
  const [close, setClose] = useState(false);
  const closeToast = () => setClose(true);

  return (
    <article className={styles.toastWrapper} hidden={close}>
      <div className={`${styles.toast} ${styles[`toast${state}`]}`}>
        <span className={styles.toast__icon}>
          <div>icon</div>
        </span>
        <span className={styles.toast__text}>
          <p>{info}</p>
        </span>
        <button onClick={closeToast}>close</button>
      </div>
    </article>
  );
}
