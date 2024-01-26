import styles from "../styles/components/Footer.module.scss";
import Link from "next/link";
import Image from "next/image";
import waves from "../../../public/images/footer-waves.png";

export default function Footer() {
  const navItems = ["Privacy Policy", "Terms & Conditions", "About Us"];
  //! deal with the background image
  return (
    <footer className={styles.footer}>
      <Image
        alt=""
        src={waves}
        placeholder="blur"
        quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
          zIndex: -1,
        }}
      />
      <div className={styles.footer__content}>
        <Link href="/" className={styles.footer__logo}>
          <Image
            src="/images/logo.svg"
            alt="PhyBooks"
            width={130}
            height={25}
            priority
          />
        </Link>
        <ul className={styles.footer__list}>
          {navItems.map((item, index) => (
            <li className={styles.footer__item} key={index}>
              <Link href="#" className={styles.footer__link}>
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.footer__copy}>
        © Copyright 2023 - Muhammed Faris P
      </div>
    </footer>
  );
}
