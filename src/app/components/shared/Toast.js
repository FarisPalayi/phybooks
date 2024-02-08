import styles from "../../styles/components/Toast.module.scss";

export default function Toast({ state, info }) {
  state = "Error"; //!
  if (state !== "Success" && state !== "Warning" && state !== "Error")
    state = "Warning";

  info = info || "Some error has occurred!"; //!

  return (
    <article className={styles.toastWrapper}>
      <div class={`${styles.toast} ${styles[`toast${state}`]}`}>
        <span className={styles.toast__icon}>
          <div>icon</div>
        </span>
        <span className={styles.toast__text}>
          <p>{info}</p>
        </span>
        <span className={styles.toast__close}>
          <div>close</div>
        </span>
      </div>
    </article>
  );
}
