import Link from "next/link";
import styles from "../styles/components/SemesterGrid.module.scss";

export default function SemesterGrid() {
  const semesterInRoman = ["I", "II", "III", "IV", "V", "VI"];

  return (
    <section className={styles.semester} id="semester">
      <h2 className={styles.semester__title}>
        Browse by <span>Semester</span>
      </h2>
      <div className={styles.semester__grid}>
        {semesterInRoman.map((semNum, i) => (
          <Link href="/books" className={styles.gridItem} key={i}>
            Semester {semNum}
          </Link>
        ))}
      </div>
    </section>
  );
}
