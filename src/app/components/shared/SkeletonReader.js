import styles from "@/app/styles/components/SkeletonReader.module.scss";
import read from "@/app/styles/components/ReadOnline.module.scss";

export default function SkeletonReader() {
  return (
    <div>
      <div
        className={styles.skeleton}
        style={{ height: `${300 * 1.41}px`, width: "100%" }}
      ></div>

      <div className={styles.skeleton__navBtns}>
        <button className={styles.skeleton__nav__previous}>
          <div className={styles.skeleton} />
        </button>
        <button className={styles.skeleton__nav__next}>
          <div className={styles.skeleton} />
        </button>
      </div>
    </div>
  );
}
