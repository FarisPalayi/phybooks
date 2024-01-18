import Image from "next/image";
import styles from "../styles/components/Header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <a href="#" className="logo">
        <Image src="/images/logo.svg" alt="" width={130} height={25} priority />
      </a>

      <button className="search">
        <Image src="/images/search.svg" alt="" width={24} height={24} />
      </button>

      <button className="menu">
        <Image src="/images/menu.svg" alt="" width={30} height={30} />
      </button>

      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">Favorites</li>
          <li className="nav__item">
            <button
              className="nav__toggle-btn"
              data-nav-toggle
              data-arrow="down"
            >
              Settings
            </button>
            <ul className="nav__sublist hide">
              <li className="nav__subitem">
                <a href="#" className="nav__link">
                  Theme
                </a>
              </li>
              <li className="nav__subitem">
                <a href="#" className="nav__link">
                  UI
                </a>
              </li>
            </ul>
          </li>

          <li className="nav__item">
            <a href="#">Contact Us</a>
          </li>
          <li className="nav__item">
            <a href="#">Source Code</a>
          </li>
          <li className="nav__item">
            <a href="#">About</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
