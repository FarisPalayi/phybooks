import Link from "next/link";
import styles from "../../styles/components/Breadcrumb.module.scss";

//* currently, links only work for the first level of the path
export default function Breadcrumb({ variant, pathnames }) {
  if (variant !== "Primary" && variant !== "Secondary") variant = "Primary";

  return (
    <nav aria-label="breadcrumb">
      <ol className={`${styles.breadcrumb} ${styles[`breadcrumb${variant}`]}`}>
        <li className={styles.breadcrumb__item}>
          <Link href="/">Home</Link>
        </li>

        {pathnames &&
          pathnames.map((item, index) => {
            const isLast = index === pathnames.length - 1;
            return (
              <li
                key={index}
                className={styles.breadcrumb__item}
                aria-current={isLast ? "page" : ""}
              >
                {isLast ? item : <Link href={`/${item}`}>{item}</Link>}
              </li>
            );
          })}
      </ol>
    </nav>
  );
}
