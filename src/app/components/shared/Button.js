import styles from "../../styles/components/Button.module.scss";

export default function Button({ btnText, btnType, btnLink, glow = false }) {
  !["primary", "secondary"].includes(btnType) && (btnType = "secondary");
  const glowClass = glow ? styles.glow : "";

  return (
    <a
      href={btnLink}
      className={`${styles.btn} ${styles[btnType]} ${glowClass}`}
    >
      {glow && (
        <>
          <span className={`${styles.gradShadow} ${styles.grad1}`}></span>
          <span className={`${styles.gradShadow} ${styles.grad2}`}></span>
          <span className={`${styles.gradShadow} ${styles.grad3}`}></span>
        </>
      )}
      <span className={styles.content}>{btnText}</span>
    </a>
  );
}
