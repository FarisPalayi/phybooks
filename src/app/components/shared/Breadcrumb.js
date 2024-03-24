import Link from "next/link";
import styles from "../../styles/components/Breadcrumb.module.scss";
import { setCharLimit } from "@/app/lib/utils";

//* currently, links only work for the first level of the path
// const pathnames = [  { name: "", path: "" }, { name: "", path: "" },];
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
            const pathnameLimitedChar = setCharLimit(pathname.name, 20);

            return (
              <li
                key={index}
                className={styles.breadcrumb__item}
                aria-current={isLast ? "page" : ""}
              >
                {isLast ? (
                  pathnameLimitedChar
                ) : (
                  <Link href={`/${pathname.path}`}>{pathnameLimitedChar}</Link>
                )}
              </li>
            );
          })}
      </ol>
    </nav>
  );
}
