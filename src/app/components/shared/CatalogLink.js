import styles from "../../styles/components/CatalogLink.module.scss";
import Link from "next/link";
import ChevronRightIcon from "../icons/ChevronRightIcon";
import BookIcon from "../icons/BookIcon";

export default function CatalogLink() {
  return (
    <div className={styles.catalog}>
      <Link href="/catalog" className={styles.catalog__link}>
        <span className={styles.bookIcon}>
          <BookIcon />
        </span>
        View book catalog
        <span className={styles.nextIcon}>
          <ChevronRightIcon />
        </span>
      </Link>
    </div>
  );
}
