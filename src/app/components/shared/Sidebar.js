import Link from "next/link";
import styles from "../../styles/components/Sidebar.module.scss";

export default function Sidebar({ isSidebarOpen }) {
  const navItems = [
    "Home",
    // {
    //   Textbooks: [
    //     "Semester 1",
    //     "Semester 2",
    //     "Semester 3",
    //     "Semester 4",
    //     "Semester 5",
    //     "Semester 6",
    //   ],
    // },
    "Reference Books",
    // "Favorites",
    // { Settings: ["Theme", "Mode"] },
    "Source Code",
    "Design Files",
    "About",
    "Contact",
  ];

  const renderNavItems = (navItems) => {
    return navItems.map((item, index) => {
      if (typeof item === "string") {
        return (
          <li key={index} className={styles.nav__item}>
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
          <li key={index} className={styles.nav__item}>
            <button className={styles.nav__btn}>{navItem}</button>
            <ul className={styles.nav__sublist}>
              {navItemList.map((subItem, subIndex) => (
                <li key={subIndex} className={styles.nav__subitem}>
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
    <>
      <div
        className={`${styles.sidebar} ${
          !isSidebarOpen ? styles.sidebarHidden : ""
        }`}
      >
        <nav className={styles.nav}>
          <ul className={styles.nav__list}>{renderNavItems(navItems)}</ul>
        </nav>
      </div>
    </>
  );
}
