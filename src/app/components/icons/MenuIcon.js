import styles from "../../styles/components/Header.module.scss";

const MenuIcon = () => (
  <svg
    width={30}
    height={30}
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      className={styles.menuTopLine}
      d="M4 9H26"
      stroke="#C5C5C5"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      className={styles.menuBottomLine}
      d="M4 21H26"
      stroke="#C5C5C5"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default MenuIcon;
