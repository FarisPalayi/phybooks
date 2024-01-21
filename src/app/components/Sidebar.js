"use client";
import Link from "next/link";
import styles from "../styles/components/Header.module.scss";

export default function Sidebar({ isSidebarOpen }) {
  const navItems = [
    "Favorites",
    { Settings: ["Theme", "UI"] },
    "Contact Us",
    "Source Code",
    "About",
  ];

  const renderNavItems = (navItems) => {
    return navItems.map((item, index) => {
      if (typeof item === "string") {
        return (
          <li key={index} className="sidebar__nav-item">
            <Link href="#">{item}</Link>
          </li>
        );
      }

      if (typeof item === "object") {
        if (Object.keys(item).length > 1)
          throw new Error("Sidebar: Object must have only one key");
        
        const navItem = Object.keys(item)[0];
        const navItemList = item[navItem];

        return (
          <li key={index} className="nav-item">
            <button className="nav__toggle-btn">{navItem}</button>
            <ul className="nav__sublist hide">
              {navItemList.map((subItem, subIndex) => (
                <li key={subIndex} className="nav__subitem">
                  <Link href="#" className="nav__link">{subItem}</Link>
                </li>
              ))}
            </ul>
          </li>
        );
      }
    });
  };

  return (
    <div
      className={`${styles.sidebar} ${!isSidebarOpen && styles.sidebarHidden}`}
    >
      <nav className="sidebar__nav">
        <ul className="sidebar__nav-list">{renderNavItems(navItems)}</ul>
      </nav>
    </div>
  );
}
