import styles from "../../styles/components/Button.module.scss";

export default function Button({ btnText, btnType, btnLink }) {
  !["primary", "secondary"].includes(btnType) && (btnType = "secondary");

  return (
    <a href={btnLink} className={`${styles.btn} ${styles[btnType]}`}>
      {btnText}
    </a>
  );
}
