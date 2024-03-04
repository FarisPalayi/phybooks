import Breadcrumb from "../../components/shared/Breadcrumb";
import styles from "../../styles/components/Books.module.scss";
import DarkCard from "../../components/books/DarkCard";
import { textbooks } from "@/app/lib/data";

export default function Page({ params }) {
  const subject = params.subName;

  return (
    <main className="container">
      <div className={`main ${styles.books}`}>
        <h1 className={styles.books__header}>
          {subject} <span>Textbooks</span>
        </h1>
        <Breadcrumb variant="Secondary" pathnames={[subject]} />
        <section className={styles.books__grid}>
          {textbooks.map((book) => (
            <DarkCard key={book.id} book={book} />
          ))}
        </section>
      </div>
    </main>
  );
}
