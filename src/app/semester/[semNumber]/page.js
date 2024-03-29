import Breadcrumb from "../../components/shared/Breadcrumb";
import styles from "../../styles/components/Books.module.scss";
import DarkCard from "../../components/books/DarkCard";
import { textbooks as books } from "@/app/lib/data";
import {
  getBooksBySemester,
  getReferenceBooks,
  removeReferenceBooks,
} from "@/app/lib/utils";
import Button from "@/app/components/shared/Button";

export async function generateMetadata({ params }) {
  const title = `Semester ${params.semNumber}`;
  return { title };
}

export default function Page({ params }) {
  const semesterNumber = decodeURIComponent(params.semNumber);
  const semesterName = `Semester ${semesterNumber}`;
  const booksFilteredBySemester = getBooksBySemester(
    books,
    Number(semesterNumber)
  ).sortBooksByTitle();
  const textBooks = removeReferenceBooks(booksFilteredBySemester);
  const referenceBooks = getReferenceBooks(booksFilteredBySemester);

  return (
    <main className="container">
      <div className={`main ${styles.books}`}>
        <h1 className={styles.books__header}>
          {semesterName} <span>Textbooks</span>
        </h1>
        <Breadcrumb
          variant="Secondary"
          pathnames={[{ name: semesterName, path: semesterName }]}
        />
        <section className={styles.books__grid}>
          {textBooks.length > 0 ? (
            textBooks.map((book) => <DarkCard key={book.id} book={book} />)
          ) : (
            <>
              <h2>Sorry, No data is found</h2>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div style={{ width: "fit-content" }}>
                  <Button
                    btnText="Go Back"
                    btnLink="/"
                    btnType="secondary"
                    isNav={true}
                  />
                </div>
              </div>
            </>
          )}
          {/* add reference books here */}
        </section>

        {referenceBooks.length > 0 && (
          <div className={`main ${styles.books}`}>
            <h1 className={`${styles.books__header} ${styles.secondary}`}>
              <span>reference books</span>
            </h1>
            <section className={styles.books__grid}>
              {referenceBooks.map((book) => (
                <DarkCard key={book.id} book={book} isSecondary={true} />
              ))}
            </section>
          </div>
        )}
      </div>
    </main>
  );
}
