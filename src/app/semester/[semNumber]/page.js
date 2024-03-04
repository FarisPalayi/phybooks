import Breadcrumb from "../../components/shared/Breadcrumb";
import BookCard from "../../components/books/BookCard";
import styles from "../../styles/components/Books.module.scss";
import DarkCard from "../../components/books/DarkCard";
import { textbooks } from "@/app/lib/data";

export default function Page({ params }) {
  const semesterNumber = params.semNumber;
  const semesterName = `Semester ${semesterNumber}`;

  return (
    <main className={`main ${styles.books}`}>
      <h1 className={styles.books__header}>
        {semesterName} <span>Textbooks</span>
      </h1>
      <Breadcrumb variant="Secondary" pathnames={[semesterName]} />
      <section className={styles.books__grid}>
        {textbooks.map((book) => (
          <DarkCard key={book.id} book={book} />
        ))}
      </section>
    </main>
  );
}
