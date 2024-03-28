import Breadcrumb from "../../components/shared/Breadcrumb";
import styles from "../../styles/components/Books.module.scss";
import DarkCard from "../../components/books/DarkCard";
import { textbooks } from "@/app/lib/data";
import { getBooksBySubject } from "@/app/lib/utils";

export async function generateMetadata({ params }) {
  const title = decodeURIComponent(params.subName).title();
  return { title };
}

export default function Page({ params }) {
  const subject = decodeURIComponent(params.subName);
  const booksBySubject = getBooksBySubject(textbooks, subject);

  return (
    <main className="container">
      <div className={`main ${styles.books}`}>
        <h1 className={styles.books__header}>
          {subject} <span>Textbooks</span>
        </h1>
        <Breadcrumb variant="Secondary" pathnames={[{name: subject, path: subject}]} />
        <section className={styles.books__grid}>
          {booksBySubject.map((book) => (
            <DarkCard key={book.id} book={book} />
          ))}
        </section>
      </div>
    </main>
  );
}
