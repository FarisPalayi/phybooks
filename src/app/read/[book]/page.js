import ReadOnline from "@/app/components/shared/ReadOnline";
import styles from "@/app/styles/components/Books.module.scss";
import { textbooks } from "@/app/lib/data";
import { getBookByTitle } from "@/app/lib/utils";
import Breadcrumb from "@/app/components/shared/Breadcrumb";

export default function Page({ params }) {
  const bookName = decodeURIComponent(params.book);
  const bookByTitle = getBookByTitle(textbooks, bookName);
  const bookSemester = `semester ${bookByTitle[0].semester}`;
  const bookSemesterPath = `semester/${bookByTitle[0].semester}`;
  const isFullView = true;

  return (
    <main className="container">
      <div
        className={`main ${styles.books} ${
          isFullView ? styles.readOnline__fullView : null
        }`}
      >
        <h1 className={styles.books__header}>
          <span>{bookName}</span>
        </h1>
        <Breadcrumb
          variant="Secondary"
          pathnames={[
            { name: bookSemester, path: bookSemesterPath },
            { name: bookName, path: bookName },
          ]}
        />
        {/* assuming books have unique titles */}
        <section className={styles.readOnline__section}>
          <ReadOnline file={bookByTitle[0].filepath} isFullView={isFullView} />
        </section>
      </div>
    </main>
  );
}
