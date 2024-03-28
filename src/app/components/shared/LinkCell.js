import Link from "next/link";
import styles from "../../styles/components/LinkCell.module.scss";

export default function LinkCell({ text, link = "#", variant }) {
  if (typeof text !== "string")
    throw new Error(
      'The prop "text" in the LinkCell component is not a string'
    );

  if (variant !== "Primary" && variant !== "Secondary") variant = "Primary";

  return (
    <Link
      href={link}
      className={`${styles.linkCell} ${styles[`linkCell${variant}`]}`}
    >
      {text}
    </Link>
  );
}
