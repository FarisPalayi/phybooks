import styles from "../../styles/components/Subject.module.scss";
import LinkCell from "../shared/LinkCell";

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
          <LinkCell link="/books" key={i} text={sub} variant="Secondary" />
        ))}
      </div>
      <button className={styles.showMore}>show more</button>
    </section>
  );
}
