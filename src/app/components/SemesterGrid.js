import React from "react";
import styles from "../styles/components/SemesterGrid.module.scss";

export function SemesterGrid() {
  const semesterInRoman = ["I", "II", "III", "IV", "V", "VI"];

  return (
    <section className={styles.semester}>
      <h2 className={styles.semesterTitle}>
        Browse by <span>Semester</span>
      </h2>
      <div className={styles.semesterGrid}>
        {semesterInRoman.map((semNum, i) => (
          <a href="#" className={styles.gridItem} key={i}>
            Semester {semNum}
          </a>
        ))}
      </div>
    </section>
  );
}
