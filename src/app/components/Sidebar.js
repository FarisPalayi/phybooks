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
          <li key={index} className={styles.navItem}>
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
          <li key={index} className={styles.navItem}>
            <button className={styles.navBtn}>{navItem}</button>
            <ul className={styles.navSubList}>
              {navItemList.map((subItem, subIndex) => (
                <li key={subIndex} className={styles.navSubItem}>
                  <Link href="#">{subItem}</Link>
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
      <nav className={styles.nav}>
        <ul className={styles.navList}>{renderNavItems(navItems)}</ul>
      </nav>
    </div>
  );
}
