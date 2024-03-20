"use client";
import styles from "../../styles/components/DarkCard.module.scss";
import Image from "next/image";
import ActionButton from "../shared/ActionButton";
import { setCharLimit } from "@/app/lib/utils";
import Toast from "../shared/Toast";
import { useEffect, useState } from "react";

export default function DarkCard({ book }) {
  const { title, author, image, publishedDate, chapters, id, filepath } = book;
  const titleCharLimit = 40;
  const authorCharLimit = 22;
  const shortTitle = setCharLimit(title, titleCharLimit);
  const shortAuthor = setCharLimit(author, authorCharLimit);

  const [showToast, setShowToast] = useState(false);
  const closeToast = () => setShowToast(false);
  const closeDelay = 3000;

  useEffect(() => {
    if (!showToast) return;
    const timer = setTimeout(() => setShowToast(false), closeDelay);
    return () => clearTimeout(timer);
  }, [showToast]);

  return (
    <article className={styles.darkCard}>
      <h3
        className={styles.darkCard__title}
        title={shortTitle.length > titleCharLimit ? title.title() : null}
      >
        {shortTitle}
      </h3>
      <div className={styles.darkCard__image}>
        <Image
          src={image.url}
          alt={`${title.title()} book cover image`}
          width={image.width}
          height={image.height}
          priority
        />
      </div>
      <div className={styles.darkCard__info}>
        <ul>
          <li
            className={styles.darkCard__author}
            title={shortAuthor.length > authorCharLimit ? author.title() : null}
          >
            Author: {shortAuthor.title()}
          </li>
          <li className={styles.darkCard__date}>{publishedDate}</li>
        </ul>
      </div>
      <div className={styles.darkCard__btnGroup}>
        <ActionButton
          text="Download"
          variant="download"
          link={filepath}
          downloadName={title}
          onClick={() => setShowToast(true)}
        />
        <ActionButton
          text="Read Online"
          variant="read"
          link={filepath}
        />
      </div>
      <Toast
        info="Download started..."
        state="Success"
        onClose={closeToast}
        show={showToast}
      />
    </article>
  );
}
