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
          <a href="#" className={styles.gridItem} key={i}>
            Semester {semNum}
          </a>
        ))}
      </div>
    </section>
  );
}
