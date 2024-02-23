"use client";
import { useEffect, useState } from "react";
import styles from "../../styles/components/Toast.module.scss";

export default function Toast({ state, info, onClose, show }) {
  if (state !== "Success" && state !== "Warning" && state !== "Error")
    state = "Warning";

  info = info || "Uh, oh something has happened"; // default message

  //! change these emojis to icon components
  const iconMap = {
    Success: "👍",
    Warning: "⚠️",
    Error: "👎",
  };

  const toastIcon = iconMap[state] || null;

  return (
    <article className={styles.toastWrapper} hidden={!show}>
      <div className={`${styles.toast} ${styles[`toast${state}`]}`}>
        <span className={styles.toast__icon}>
          {toastIcon && <div>{toastIcon}</div>}
        </span>
        <span className={styles.toast__text}>
          <p>{info}</p>
        </span>
        <button onClick={onClose}>close</button>
      </div>
    </article>
  );
}
