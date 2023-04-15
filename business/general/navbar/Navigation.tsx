import Link from "next/link";
import styles from "./Navigation.module.css";
import Image from "next/image";
import { useState } from "react";
import {useRouter} from "next/router";

const menuItems = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "Idiomas",
    href: "/idiomas",
  },
  {
    text: "Talento",
    href: "/talento",
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
  const [menu, setMenu] = useState<any>(styles.menu);
  const router = useRouter();

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
                    src={`/images/${router.asPath === '/idiomas' ? 'gimdecar-logo-blanco.png' : 'gimdecar-logo.png'}`}
                    alt={"logo Gimdecar"}
                    width={60}
                    height={60}
                />
          </Link>
        </div>

        <div className={menu}>
          <ul className={styles.navigation}>
            <div onClick={handleMenu} className={styles.botonMovil2}>
              <div>
                <Link href="#">
                  <i className={icon}></i>
                </Link>
              </div>

            </div>

              {menuItems.map(({ text, href }) => (
                  <div className={styles.listButtons} key={href}>
                  <Link href={href} >
                    {router.asPath === '/idiomas'?
                        <div className={router.asPath === href ? styles.active : styles.buttom_menu_idiomas} >
                          {text}
                        </div>
                        :
                        <div className={router.asPath === href ? styles.active : styles.buttom_menu} >
                          {text}
                        </div>
                    }
                  </Link>
                  </div>
              ))}


            <div className={router.asPath === '/idiomas' ? styles.social_network_idiomas : styles.social_network}>
              <ul>
                <i className="bx bxl-instagram"></i>
                <i className="bx bxl-facebook"></i>
                <i className="bx bxl-tiktok"></i>
              </ul>
            </div>

          </ul>

        </div>
        <div>
          <div onClick={handleMenu} className={styles.botonMovil}>
            <Link href="#">
              <i className={icon}></i>
            </Link>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navigation;
