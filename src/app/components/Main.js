import styles from "../styles/components/Main.module.scss";
import Button from "./Button";

export default function Main() {
  return (
    <main className={styles.main}>
      <section className={styles.intro}>
        <h1 className={styles.intro__title}>
          <span className={styles.intro__titlePart1}>Explore.</span>
          <span className={styles.intro__titlePart2}>Read.</span>
          <span className={styles.intro__titlePart3}>Learn.</span>
        </h1>
        <p className={styles.intro__description}>
          PhyBooks gives access to a selection of core B.Sc Physics textbooks,
          all tailored to support your academic success at Calcut University.
        </p>
        <div className={styles.intro__btnGroup}>
          <Button />
          <Button />
        </div>
      </section>
    </main>
  );
}
