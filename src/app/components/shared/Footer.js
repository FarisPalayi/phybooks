import styles from "../../styles/components/Footer.module.scss";
import Link from "next/link";
import LogoIcon from "../icons/LogoIcon";

export default function Footer() {
  const navItems = ["Privacy Policy", "Terms & Conditions", "About Us"];

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footer__content}>
          <Link href="/" className={styles.footer__logo}>
            <LogoIcon height={25} />
          </Link>
          <ul className={styles.footer__list}>
            {navItems.map((item, index) => (
              <li className={styles.footer__item} key={index}>
                <Link href={`/${item}`} className={styles.footer__link}>
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.footer__copy}>
          © Copyright 2023 - Muhammed Faris P
        </div>
      </div>
    </footer>
  );
}
