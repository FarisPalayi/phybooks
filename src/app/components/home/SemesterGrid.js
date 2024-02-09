import styles from "../../styles/components/SemesterGrid.module.scss";
import LinkCell from "../shared/LinkCell";

export default function SemesterGrid() {
  const semesterInRoman = ["I", "II", "III", "IV", "V", "VI"];

  return (
    <section className={styles.semester} id="semester">
      <h2 className={styles.semester__title}>
        Browse by <span>Semester</span>
      </h2>
      <div className={styles.semester__grid}>
        {semesterInRoman.map((semNum, i) => (
          <LinkCell
            link="/books"
            key={i}
            text={`Semester ${semNum}`}
            variant="Primary"
          />
        ))}
      </div>
    </section>
  );
}
