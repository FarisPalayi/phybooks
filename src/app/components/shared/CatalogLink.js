"use client";

import styles from "../../styles/components/CatalogLink.module.scss";
import Link from "next/link";
import ChevronRightIcon from "../icons/ChevronRightIcon";
import BookIcon from "../icons/BookIcon";
import Toast from "./Toast";
import { useEffect, useState } from "react";

export default function CatalogLink() {
  const [showToast, setShowToast] = useState(false);
  const closeDelay = 3000;

  useEffect(() => {
    if (!showToast) return;
    const timer = setTimeout(() => setShowToast(false), closeDelay);
    return () => clearTimeout(timer);
  }, [showToast]);

  return (
    <div className={styles.catalog}>
      <button
        className={styles.catalog__link}
        onClick={() => setShowToast(true)}
      >
        <span className={styles.bookIcon}>
          <BookIcon />
        </span>
        View book catalog
        <span className={styles.nextIcon}>
          <ChevronRightIcon />
        </span>
      </button>
      {showToast && (
        <Toast
          info="Page is under construction!"
          state="Warning"
          show={showToast}
          onClose={() => setShowToast(false)}
        />
      )}
    </div>
  );
}
