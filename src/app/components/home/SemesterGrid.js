import styles from "../../styles/components/SemesterGrid.module.scss";
import LinkCell from "../shared/LinkCell";

export default function SemesterGrid() {
  const semesters = [1, 2, 3, 4, 5, 6];

  return (
    <section className={styles.semester} id="semester">
      <h2 className={styles.semester__title}>
        Browse by <span>Semester</span>
      </h2>
      <div className={styles.semester__grid}>
        {semesters.map((semNum, i) => (
          <LinkCell
            link={`/semester/${semNum}`}
            key={i}
            text={`Semester ${semNum}`}
            variant="Primary"
          />
        ))}
      </div>
    </section>
  );
}
