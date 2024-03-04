import Image from "next/image";
import styles from "../../styles/components/BookCard.module.scss";
import ActionButton from "../shared/ActionButton";

export default function BookCard({ book }) {
  const { title, author, image, publishedDate, chapters, id } = book;

  return (
    <article className={styles.book__card}>
      <h3 className={styles.book__title}>{title}</h3>
      <div className={styles.book__image}>
        <Image
          src={image.url}
          alt=""
          width={image.width}
          height={image.height}
          priority
        />
      </div>
      <div className={styles.book__info}>
        <p className={styles.book__author}>Author: {author}</p>
        <p className={styles.book__date}>{publishedDate}</p>
      </div>
      <div className={styles.btnGroup}>
        <ActionButton text="Download" variant="download" />
        <ActionButton text="Read Online" variant="read" />
      </div>
      <div className={styles.book__openChapter}>
        <button className={styles.book__openChapter__btn}>
          <span className={styles.book__openChapter__text}>
            See full chapters
          </span>
          <span className={styles.book__openChapter__icon}>
            <Image
              src="/images/chevron-bottom-cyan-small.svg"
              alt=""
              width={8}
              height={4}
            />
          </span>
        </button>
      </div>
    </article>
  );
}
