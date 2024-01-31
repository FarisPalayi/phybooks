import React from "react";
import Button from "../shared/Button";
import styles from "../../styles/components/Intro.module.scss";

export default function Intro() {
  return (
    <section className={styles.intro}>
      <h1 className={styles.intro__title}>
        <span className={styles.intro__titlePart1}>Explore.</span>
        <span className={styles.intro__titlePart2}>Read.</span>
        <span className={styles.intro__titlePart3}>Learn.</span>
      </h1>
      <p className={styles.intro__description}>
        PhyBooks gives access to a selection of core B.Sc Physics textbooks, all
        tailored to support your academic success at Calicut University.
      </p>
      <div className={styles.intro__btnGroup}>
        <Button
          btnText="Browse by subject"
          btnType="primary"
          btnLink="#subject"
        />
        <Button
          btnText="Browse by semester"
          btnType="secondary"
          btnLink="#semester"
        />
      </div>
    </section>
  );
}
