import Link from "next/link";
import styles from "../../styles/components/Breadcrumb.module.scss";
import { setCharLimit } from "@/app/lib/utils";

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
          pathnames.map((pathname, index) => {
            const isLast = index === pathnames.length - 1;
            pathname = setCharLimit(pathname, 20);
            return (
              <li
                key={index}
                className={styles.breadcrumb__item}
                aria-current={isLast ? "page" : ""}
              >
                {isLast ? (
                  pathname
                ) : (
                  <Link href={`/${pathname}`}>{pathname}</Link>
                )}
              </li>
            );
          })}
      </ol>
    </nav>
  );
}
