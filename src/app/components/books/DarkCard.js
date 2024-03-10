"use client";
import styles from "../../styles/components/DarkCard.module.scss";
import Image from "next/image";
import ActionButton from "../shared/ActionButton";
import { setCharLimit } from "@/app/lib/utils";
import Toast from "../shared/Toast";
import { useEffect, useState } from "react";

export default function DarkCard({ book }) {
  const { title, author, image, publishedDate, chapters, id, filepath } = book;
  const charLimit = 40;
  const shortTitle = setCharLimit(title, charLimit);

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
        title={shortTitle.length > charLimit ? title : null}
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
          <li className={styles.darkCard__author}>Author: {author.title()}</li>
          <li className={styles.darkCard__date}>{publishedDate}</li>
        </ul>
      </div>
      <div className={styles.darkCard__btnGroup}>
        <ActionButton
          text="Download"
          variant="download"
          link={filepath}
          name={title}
          onClick={() => setShowToast(true)}
        />
        <ActionButton
          text="Read Online"
          variant="read"
          link={filepath}
          name={title}
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
