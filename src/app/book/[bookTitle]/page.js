import Breadcrumb from "../../components/shared/Breadcrumb";
import styles from "../../styles/components/Books.module.scss";
import DarkCard from "../../components/books/DarkCard";
import { textbooks } from "@/app/lib/data";
import { getBookByTitle } from "@/app/lib/utils";

export async function generateMetadata({ params }) {
  const title = decodeURIComponent(params.bookTitle).title();
  return { title };
}

export default function Page({ params }) {
  const bookTitle = decodeURIComponent(params.bookTitle);
  const bookByTitle = getBookByTitle(textbooks, bookTitle);

  return (
    <main className="container">
      <div className={`main ${styles.books}`}>
        <h1 className={styles.books__header}>
          {bookTitle} <span>Textbooks</span>
        </h1>
        <Breadcrumb
          variant="Secondary"
          pathnames={[{ name: bookTitle, path: bookTitle }]}
        />
        <section className={styles.books__grid}>
          <DarkCard book={bookByTitle[0]} />
        </section>
      </div>
    </main>
  );
}
