import Link from "next/link";
import styles from "../../styles/components/ActionButton.module.scss";
import Image from "next/image";

export default function ActionButton({ variant, text }) {
  console.log(variant);
  const iconPath =
    variant === "read" ? "images/book-open.svg" : "images/download.svg";

  return (
    <Link href="#" className={styles.btn + " " + styles[variant]}>
      <Image src={iconPath} alt="" width={12} height={12} />
      <span>{text}</span>
    </Link>
  );
}
