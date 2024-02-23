import styles from "../../styles/components/ActionButton.module.scss";
import Image from "next/image";

export default function ActionButton({ variant, text, link, name, onClick }) {
  const iconPath =
    variant === "read" ? "/images/book-open.svg" : "/images/download.svg";

  return (
    <a
      href={link}
      className={`${styles.btn} ${styles[variant]}`}
      download={name}
      onClick={onClick}
    >
      <Image src={iconPath} alt="" width={12} height={12} />
      <span>{text}</span>
    </a>
  );
}
