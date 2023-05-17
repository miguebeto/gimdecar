import Link from "next/link";
import styles from "./Navigation.module.css";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";

const Navigation = () => {
  const { t, lang } = useTranslation("nav");
  const menuItems = t<any>("menuItems", {}, { returnObjects: true });
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
            <img
              width={50}
              height={50}
              src={`/images/${
                router.asPath === "/english"
                  ? "gimdecar-logo-blanco.png"
                  : "gimdecar-logo.png"
              }`}
              alt={"logo Gimdecar"}
              title="logo_gimdecar"
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

            {menuItems
              .filter((item: any) => item.active === true)
              .map((item: any, index: number) => (
                <div className={styles.listButtons} key={index}>
                  <Link href={item.href}>
                    {router.asPath === "/english" ? (
                      <div
                        className={
                          router.asPath === item.href
                            ? styles.active
                            : styles.button_menu_idiomas
                        }
                      >
                        {item.text}
                      </div>
                    ) : (
                      <div
                        className={
                          router.asPath === item.href
                            ? styles.active
                            : styles.button_menu
                        }
                      >
                        {item.text}
                      </div>
                    )}
                  </Link>
                </div>
              ))}

            <div
              className={
                router.asPath === "/english"
                  ? styles.social_network_idiomas
                  : styles.social_network
              }
            >
              <ul className={styles.icons}>
                <a
                  href="https://www.instagram.com/gimdecar/"
                  target="_blank"
                  title="Social Media"
                >
                  <img
                    src="/images/instagram.png"
                    alt="instagram"
                    title="instagram"
                  />
                </a>
                <a
                  href="https://www.facebook.com/Gimdecar"
                  target="_blank"
                  title="Social Media"
                >
                  <img
                    src="/images/facebook.png"
                    alt="facebook"
                    title="facebook"
                  />
                </a>
                <a href={"/es" + router.asPath} title="Español">
                  <img
                    src="/images/icons/spanish_icon.png"
                    alt="Español"
                    width={25}
                    height={25}
                    title="Español"
                  />
                </a>
                <a href={"/en" + router.asPath} title="English">
                  <img
                    src="/images/icons/english_icon.png"
                    alt="English"
                    width={25}
                    height={25}
                    title="English"
                  />
                </a>
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
