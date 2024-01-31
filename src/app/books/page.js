import Breadcrumb from "../components/shared/Breadcrumb";
import Lyrics from "./lyrics";
import styles from "../styles/components/Books.module.scss";

export default function Page() {
  const category = "Semester 5";

  return (
    <main className={`main ${styles.books}`}>
      <h1 className={styles.books__header}> {category} Textbooks</h1>
      <Breadcrumb />
      <Lyrics />
    </main>
  );
}
