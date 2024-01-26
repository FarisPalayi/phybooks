import styles from "../styles/components/Subject.module.scss";

export default function Subject() {
  const subjects = [
    "Quantum Mechanics",
    "Thermodynamics",
    "Optics",
    "Electronics",
    "Nuclear Physics",
  ];

  return (
    <section className={styles.subject} id="subject">
      <h2 className={styles.subject__title}>
        Browse by <span>Subject</span>
      </h2>
      <div className={styles.subject__grid}>
        {subjects.map((sub, i) => (
          <a href="#" className={styles.gridItem} key={i}>
            {sub}
          </a>
        ))}
      </div>
      <button className={styles.showMore}>Show more</button>
    </section>
  );
}
