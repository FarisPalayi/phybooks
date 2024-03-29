"use client";

import styles from "../../styles/components/SemesterGrid.module.scss";
import LinkCell from "../shared/LinkCell";
import { motion } from "framer-motion";

export default function SemesterGrid() {
  const semesters = [1, 2, 3, 4, 5, 6];

  return (
    <section className={styles.semester} id="semester">
      <h2 className={styles.semester__title}>
        Browse by <span>Semester</span>
      </h2>
      <div className={styles.semester__grid}>
        {semesters.map((semNum, i) => (
          <motion.div
            whileHover={{ y: -5 }}
            style={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
            key={i}
          >
            <LinkCell
              link={`/semester/${semNum}`}
              text={`Semester ${semNum}`}
              variant="Primary"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
