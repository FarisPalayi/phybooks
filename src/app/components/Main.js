import SemesterGrid from "./SemesterGrid";
import styles from "../styles/components/Main.module.scss";
import Intro from "./Intro.js";
import Subject from "./Subject.js";
import CatalogLink from "./CatalogLink";

export default function Main() {
  return (
    <main className={styles.main}>
      <Intro />
      <SemesterGrid />
      <Subject />
      <CatalogLink />
    </main>
  );
}
