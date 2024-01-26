import styles from "../styles/components/Footer.module.scss";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__content}>
        <Link href="#" className={styles.footer__logo}>
          <Image
            src="/images/logo.svg"
            alt="PhyBooks"
            width={130}
            height={25}
            priority
          />
        </Link>
        <ul className={styles.footer__list}>
          <li className={styles.footer__item}>
            <a className={styles.footer__link} href="#">
              Privacy Policy
            </a>
          </li>
          <li className={styles.footer__item}>
            <a className={styles.footer__link} href="#">
              Terms & Conditions
            </a>
          </li>
          <li className={styles.footer__item}>
            <a className={styles.footer__link} href="#">
              About Us
            </a>
          </li>
        </ul>
      </div>

      <div className={styles.footer__copy}>
        © Copyright 2023 - Muhammed Faris P
      </div>
    </footer>
  );
}
