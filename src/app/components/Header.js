import Image from "next/image";
import header from "../styles/components/Header.module.scss";

export default function Header() {
  return (
    <header className={header.header}>
      <a href="#" className={header.logo}>
        <Image src="/images/logo.svg" alt="" width={130} height={25} priority />
      </a>

      <div className={header.iconContainer}>
        <button className="">
          <Image src="/images/search.svg" alt="" width={24} height={24} />
        </button>
        <button className="">
          <Image src="/images/menu.svg" alt="" width={30} height={30} />
        </button>
      </div>

      <div className={header.sidebarHidden}>
        <nav className="sidebar__nav">
          <ul className="sidebar__nav-list">
            <li className="sidebar__nav-item">Favorites</li>
            <li className="sidebar__nav-item">
              <button className="sidebar__nav__toggle-btn">Settings</button>
              <ul className="sidebar__nav__sublist hide">
                <li className="sidebar__nav__subitem">
                  <a href="#" className="sidebar__nav__link">Theme</a>
                </li>
                <li className="sidebar__nav__subitem">
                  <a href="#" className="sidebar__nav__link">UI</a>
                </li>
              </ul>
            </li>
            <li className="sidebar__nav__item">
              <a href="#">Contact Us</a>
            </li>
            <li className="sidebar__nav__item">
              <a href="#">Source Code</a>
            </li>
            <li className="sidebar__nav__item">
              <a href="#">About</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
