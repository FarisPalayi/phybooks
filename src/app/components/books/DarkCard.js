"use client";
import styles from "../../styles/components/DarkCard.module.scss";
import Image from "next/image";
import ActionButton from "../shared/ActionButton";

export default function DarkCard({ book }) {
  const { title, author, image, published, chapters, id } = book;

  return (
    <article className={styles.darkCard}>
      <h3 className={styles.darkCard__title}>{title}</h3>
      <div className={styles.darkCard__image}>
        <Image
          src={image.url}
          alt=""
          width={image.width}
          height={image.height}
          priority
        />
      </div>
      <div className={styles.darkCard__info}>
        <ul>
          <li>Author: {author}</li>
          <li>{published}</li>
        </ul>
      </div>
      <div className={styles.darkCard__btnGroup}>
        <ActionButton text="Download" variant="download" />
        <ActionButton text="Read Online" variant="read" />
      </div>
    </article>
  );
}
