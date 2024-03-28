import Breadcrumb from "../../components/shared/Breadcrumb";
import styles from "../../styles/components/Books.module.scss";
import DarkCard from "../../components/books/DarkCard";
import { textbooks } from "@/app/lib/data";
import { getBooksBySemester } from "@/app/lib/utils";
import Button from "@/app/components/shared/Button";

export async function generateMetadata({ params }) {
  const title = `Semester ${params.semNumber}`;
  return { title };
}

export default function Page({ params }) {
  const semesterNumber = decodeURIComponent(params.semNumber);
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
        <Breadcrumb
          variant="Secondary"
          pathnames={[{ name: semesterName, path: semesterName }]}
        />
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
                  <Button btnText="Go Back" btnLink="/" btnType="secondary" />
                </div>
              </div>
            </>
          )}
          {/* add reference books here */}
        </section>
      </div>
    </main>
  );
}
