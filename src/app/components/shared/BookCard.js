import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/components/BookCard.module.scss";

export default function BookCard() {
  const fallbackBook = {
    id: 1,
    title: "Electronics",
    author: "Prof. Inasu CA",
    published: "August 29, 2021",
    image: {
      url: "/images/book-cover.png",
      width: 126,
      height: 165,
    },
    chapters: [
      {
        title: "Transistors and Diodes",
        pdf: "/chapters/chapter-1.pdf",
      },
      {
        title: "Semiconductors",
        pdf: "/chapters/chapter-2.pdf",
      },
      {
        title: "Integrated Circuits",
        pdf: "/chapters/chapter-3.pdf",
      },
    ],
  };

  const { title, author, image, published, chapters, id } = fallbackBook;

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
        <p className={styles.book__date}>{published}</p>
      </div>
      <div className={styles.btnGroup}>
        <Link href="#" className={styles.btn}>
          Read Online
        </Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <Link href="#" className={styles.book__link}>
          Download
        </Link>
      </div>
      <div>
        <p>See full chapters</p>
      </div>
    </article>
  );
}
