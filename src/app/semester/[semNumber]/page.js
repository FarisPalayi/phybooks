import Breadcrumb from "../../components/shared/Breadcrumb";
import BookCard from "../../components/books/BookCard";
import styles from "../../styles/components/Books.module.scss";
import DarkCard from "../../components/books/DarkCard";
import { textbooks } from "@/app/lib/data";
import { getBooksBySemester } from "@/app/lib/utils";
import Button from "@/app/components/shared/Button";

export default function Page({ params }) {
  const semesterNumber = params.semNumber;
  const semesterName = `Semester ${semesterNumber}`;
  const booksFilteredBySemester = getBooksBySemester(
    textbooks,
    Number(semesterNumber)
  ).sortBooksByTitle();

  return (
    <main className="container">
      <div className={`main ${styles.books}`}>
        <h1 className={styles.books__header}>
          {semesterName} <span>Textbooks</span>
        </h1>
        <Breadcrumb variant="Secondary" pathnames={[semesterName]} />
        <section className={styles.books__grid}>
          {booksFilteredBySemester.length > 0 ? (
            booksFilteredBySemester.map((book) => (
              <DarkCard key={book.id} book={book} />
            ))
          ) : (
            <>
              <h1>Sorry, No data is found</h1>
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
                    glow={true}
                  />
                </div>
              </div>
            </>
          )}
        </section>
      </div>
    </main>
  );
}
