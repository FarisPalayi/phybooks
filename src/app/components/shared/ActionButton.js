import styles from "../../styles/components/ActionButton.module.scss";
import BookOpenIcon from "../icons/BookOpenIcon";
import DownloadIcon from "../icons/DownloadIcon";

export default function ActionButton({
  variant,
  text,
  link,
  downloadName,
  onClick,
}) {
  const iconPath =
    variant === "read" ? "/images/book-open.svg" : "/images/download.svg";

  return (
    <a
      href={link}
      className={`${styles.btn} ${styles[variant]}`}
      download={downloadName}
      onClick={onClick}
    >
      {variant === "read" ? (
        <BookOpenIcon />
      ) : (
        <DownloadIcon />
      )}
      <span>{text}</span>
    </a>
  );
}
