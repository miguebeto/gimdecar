import Link from "next/link";
import styles from "./Navigation.module.css";
import Image from "next/image";
import { useState } from "react";

const menuItems = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "Home2",
    href: "/home2",
  },
  {
    text: "Home3",
    href: "/home3",
  },
  {
    text: "Home4",
    href: "/home4",
  },
  {
    text: "Home5",
    href: "/home5",
  },
];

const Navigation = () => {
  const [icon, setIcon] = useState("bx bx-menu-alt-right");
  const [menu, setMenu] = useState(styles.menu);

  const handleMenu = () => {
    if (icon === "bx bx-menu-alt-right") {
      setIcon("bx bx-menu-alt-left");
      setMenu(styles.menuActive);
    } else {
      setIcon("bx bx-menu-alt-right");
      setMenu(styles.menu);
    }
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.general}>
        <div className={styles.logo}>
          <Link href="/">
            <Image
              src={"/images/gimdecar-logo.png"}
              alt={"logo Gimdecar"}
              width={60}
              height={60}
            />
          </Link>
        </div>

        <div className={menu}>
          <ul className={styles.navigation}>
            {menuItems.map(({ text, href }) => (
              <div className={styles.buttom_menu} key={href}>
                <Link href={href}>{text}</Link>
              </div>
            ))}
          </ul>
        </div>

        <div className={styles.social_network}>
          <ul className={styles.navigation}>
            <i className="bx bxl-instagram"></i>
            <i className="bx bxl-facebook"></i>
            <i className="bx bxl-tiktok"></i>
          </ul>
          <div>
            <div onClick={handleMenu} className={styles.botonMovil}>
              <Link href="#">
                <i className={icon}></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
