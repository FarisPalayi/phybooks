import styles from "../../styles/components/Toast.module.scss";
import AlertIcon from "../icons/AlertIcon";
import CheckCircleIcon from "../icons/CheckCircleIcon";
import CheckIcon from "../icons/CheckIcon";
import CloseIcon from "../icons/CloseIcon";
import ErrorIcon from "../icons/ErrorIcon";

export default function Toast({ state, info, onClose, show = false }) {
  if (state !== "Success" && state !== "Warning" && state !== "Error")
    state = "Warning";

  info = info || "Uh oh, something has happened"; // default message

  const iconMap = {
    Success: <CheckIcon />,
    Warning: <AlertIcon />,
    Error: <ErrorIcon />,
  };

  const toastIcon = iconMap[state] || null;

  return (
    <article className={styles.toastWrapper} hidden={!show}>
      <div className={`${styles.toast} ${styles[`toast${state}`]}`}>
        <span className={styles.toast__icon}>{toastIcon && toastIcon}</span>
        <span className={styles.toast__text}>
          <p>{info}</p>
        </span>
        <button onClick={onClose} className={styles.toast__close}>
          <CloseIcon stroke={state === "Warning" ? "#0C142E" : "#fff"} />
        </button>
      </div>
    </article>
  );
}
