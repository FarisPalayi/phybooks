import { SemesterGrid } from "./SemesterGrid";
import styles from "../styles/components/Main.module.scss";
import Intro from "./Intro.js";

export default function Main() {
  return (
    <main className={styles.main}>
      <Intro />
      <SemesterGrid />
    </main>
  );
}
