import styles from "@/app/styles/components/SkeletonReader.module.scss";

export default function SkeletonReader() {
  return (
    <div className="container">
      <div className={styles.skeleton__container}>
        <section className={styles.indexSection}>
          <div className={styles.skeleton__indexTitle}>
            <h1 className={styles.skeleton}></h1>
          </div>
          <div className={styles.skeleton__indexContent}>
            <p className={`${styles.skeleton} ${styles.skeleton__lg}`}></p>
            <p className={styles.skeleton}></p>
            <p className={`${styles.skeleton} ${styles.skeleton__md}`}></p>
            <p className={styles.skeleton}></p>
            <p className={`${styles.skeleton} ${styles.skeleton__sm}`}></p>
            <p className={styles.skeleton}></p>
            <p className={`${styles.skeleton} ${styles.skeleton__md}`}></p>
            <p className={styles.skeleton}></p>
          </div>
        </section>
        <section className={styles.cardSection}>
          <div className={`${styles.skeleton} ${styles.skeleton__card}`}></div>
          <div className={styles.skeleton__navBtns}>
            <button className={styles.skeleton__nav__previous}>
              <div className={styles.skeleton} />
            </button>
            <button className={styles.skeleton__nav__next}>
              <div className={styles.skeleton} />
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
