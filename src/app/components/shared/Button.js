import styles from "../../styles/components/Button.module.scss";
import Link from "next/link";
import TriangleIcon from "../icons/TriangleIcon";

export default function Button({
  btnText,
  btnType,
  btnLink,
  glow = false,
  isNav = false,
}) {
  // Ensure btnType is either "primary" or "secondary"
  btnType = ["primary", "secondary"].includes(btnType) ? btnType : "secondary";
  const shadowClass = glow ? styles.shadow : styles.notShadow;
  const contentJSX = (
    <>
      {btnType === "primary" && <TriangleIcon className={styles.triangleIcon} />}
      {glow && (
        <>
          <span className={`${styles.gradShadow} ${styles.grad1}`}></span>
          <span className={`${styles.gradShadow} ${styles.grad2}`}></span>
          <span className={`${styles.gradShadow} ${styles.grad3}`}></span>
        </>
      )}
      <span className={styles.content}>{btnText}</span>
    </>
  );

  const ButtonElement = isNav ? (
    <Link
      href={btnLink}
      className={`${styles.btn} ${styles[btnType]} ${shadowClass}`}
    >
      {contentJSX}
    </Link>
  ) : (
    <a
      href={btnLink}
      className={`${styles.btn} ${styles[btnType]} ${shadowClass}`}
    >
      {contentJSX}
    </a>
  );

  return ButtonElement;
}
