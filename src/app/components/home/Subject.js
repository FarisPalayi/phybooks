import styles from "../../styles/components/Subject.module.scss";
import LinkCell from "../shared/LinkCell";
import { getBookTitles, getBooksBySubject } from "@/app/lib/utils";
import { textbooks } from "@/app/lib/data";

export default function Subject() {
  const bookTitles = getBookTitles(textbooks.sortBooksByTitle());

  return (
    <section className={styles.subject} id="subject">
      <h2 className={styles.subject__title}>
        Browse by <span>Subject</span>
      </h2>
      <div className={styles.subject__grid}>
        {bookTitles.map((title, i) => (
          <LinkCell
            link={`/subject/${title}`}
            key={i}
            text={title.title()}
            variant="Secondary"
          />
        ))}
      </div>
      {/* <button className={styles.showMore}>show more</button> */}
    </section>
  );
}
