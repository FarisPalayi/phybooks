import Link from "next/link";
import styles from "../../styles/components/Breadcrumb.module.scss";

export default function Breadcrumb() {
  const pathnames = ["Semester VI", "Textbooks"];

  return (
    <nav aria-label="breadcrumb">
      <ol className={styles.breadcrumb}>
        <li className={styles.breadcrumb__item}>
          <Link href="/">Home</Link>
        </li>

        {pathnames.map((item, index) => {
          const isLast = index === pathnames.length - 1;
          return (
            <li
              key={index}
              className={styles.breadcrumb__item}
              aria-current={isLast ? "page" : ""}
            >
              {isLast ? item : <Link href="/">{item}</Link>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
