import Image from "next/image";
import styles from "./page.module.css";
import sass from "./styles/index.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>PhyBooks</h1>
      <p>dev</p>
    </main>
  );
}
