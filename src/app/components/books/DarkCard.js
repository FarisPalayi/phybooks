"use client";
import styles from "../../styles/components/DarkCard.module.scss";
import Image from "next/image";
import ActionButton from "../shared/ActionButton";
import { setCharLimit } from "@/app/lib/utils";
import Toast from "../shared/Toast";
import { useState } from "react";

export default function DarkCard({ book }) {
  const { title, author, image, published, chapters, id, filepath } = book;
  const shortTitle = setCharLimit(title, 40);

  const [showToast, setShowToast] = useState(true);
  const closeToast = () => setShowToast(false);
  return (
    <article className={styles.darkCard}>
      <h3 className={styles.darkCard__title}>{shortTitle}</h3>
      <div className={styles.darkCard__image}>
        <Image
          src={image.url}
          alt={title}
          width={image.width}
          height={image.height}
          priority
        />
      </div>
      <div className={styles.darkCard__info}>
        <ul>
          <li className={styles.darkCard__author}>Author: {author}</li>
          <li className={styles.darkCard__date}>{published}</li>
        </ul>
      </div>
      <div className={styles.darkCard__btnGroup}>
        <ActionButton
          text="Download"
          variant="download"
          link={filepath}
          name={title}
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
