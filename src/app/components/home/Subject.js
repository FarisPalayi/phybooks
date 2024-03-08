import styles from "../../styles/components/Subject.module.scss";
import LinkCell from "../shared/LinkCell";
import { getBookTitles } from "@/app/lib/utils";
import { textbooks } from "@/app/lib/data";

export default function Subject() {
  const bookTitles = getBookTitles(textbooks);

  return (
    <section className={styles.subject} id="subject">
      <h2 className={styles.subject__title}>
        Browse by <span>Subject</span>
      </h2>
      <div className={styles.subject__grid}>
        {bookTitles.map((sub, i) => (
          <LinkCell link="/books" key={i} text={sub} variant="Secondary" />
        ))}
      </div>
      <button className={styles.showMore}>show more</button>
    </section>
  );
}
