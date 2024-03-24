import ReadOnline from "@/app/components/shared/ReadOnline";
import styles from "@/app/styles/components/Books.module.scss";
import { textbooks } from "@/app/lib/data";
import { getBookByTitle } from "@/app/lib/utils";

export default function Page({ params }) {
  const bookName = decodeURIComponent(params.book);
  const bookByTitle = getBookByTitle(textbooks, bookName);

  return (
    <main className="container">
      <div className={`main ${styles.books}`}>
        <h1 className={styles.books__header}>
          <span>{bookName}</span>
        </h1>
        {/* assuming books have unique titles */}
        <ReadOnline file={bookByTitle[0].filepath} /> 
      </div>
    </main>
  );
}
