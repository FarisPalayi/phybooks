import Link from "next/link";
import styles from "../../styles/components/Sidebar.module.scss";

export default function Sidebar({ isSidebarOpen }) {
  const navItems = [
    ["Home", "/"],
    // ["Reference Books", "/reference-books"],
    // ["Favorites", "/favorites"],
    // { Settings: ["Theme", "Mode"] },
    [
      "Design Files",
      "https://www.figma.com/file/xmcgV2La7Y4FOmmROXjNka/Bsc-physics?type=design&node-id=0%3A1&mode=design&t=aIAHqQmsHp7nal0A-1",
    ],
    ["Source Code", "https://github.com/farispalayi/phybooks"],
    ["About", "/about"],
    ["Contact", "/contact"],
  ];

  const renderNavItems = (navItems) => {
    return navItems.map((item, index) => {
      if (typeof item[0] === "string") {
        return (
          <li key={index} className={styles.nav__item}>
            <Link
              href={item[1]}
              target={item[1].startsWith("http") ? "_blank" : "_self"}
            >
              {item[0]}
            </Link>
          </li>
        );
      }

      // if (typeof item === "object") {
      //   if (Object.keys(item).length > 1)
      //     throw new Error("Sidebar: Object must have only one key");

      //   const navItem = Object.keys(item)[0];
      //   const navItemList = item[navItem];

      //   return (
      //     <li key={index} className={styles.nav__item}>
      //       <button className={styles.nav__btn}>{navItem}</button>
      //       <ul className={styles.nav__sublist}>
      //         {navItemList.map((subItem, subIndex) => (
      //           <li key={subIndex} className={styles.nav__subitem}>
      //             <Link href="#">{subItem}</Link>
      //           </li>
      //         ))}
      //       </ul>
      //     </li>
      //   );
      // }
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
