import Image from "next/image";
import styles from "../../styles/components/CatalogLink.module.scss";
import Link from "next/link";

export default function CatalogLink() {
  return (
    <div className={styles.catalog}>
      <Link href="#" className={styles.catalog__link}>
        <span className={styles.bookIcon}>
          <Image src={"/images/book.svg"} width={13} height={13} alt="" />
        </span>
        View book catalog
        <span className={styles.nextIcon}>
          <Image
            src={"/images/chevron-right.svg"}
            width={18}
            height={18}
            alt=""
          />
        </span>
      </Link>
    </div>
  );
}