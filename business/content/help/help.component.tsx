import Image from "next/image";
import styles from "./help.module.css";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";

export default function HelpComponent() {
  const { t, lang } = useTranslation("home");
  const router = useRouter();
  const wsp_esp = "https://wa.link/9mo8t3";
  const wsp_eng = "https://wa.link/x5vco8";
  return (
    <>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div
            className={
              router.asPath === "/espacios" || router.asPath === "/talento"
                ? styles.miniTag2
                : styles.miniTag
            }
          >
            <div
              className={
                router.asPath === "/espacios" || router.asPath === "/talento"
                  ? styles.text2
                  : styles.text
              }
            >
              <p>{t("section4.wsmessage")}</p>
            </div>
          </div>
          <div className={styles.whatsapp}>
          <a
                href={lang === 'en' ? wsp_eng : wsp_esp}
                target="_blank"
                rel="noreferrer"
                title="Whatsapp"
                className={styles.float}
            >
              <img
                src={"/images/whatsapp.png"}
                width={100}
                height={100}
                alt="logo whatsapp"
                title="whatsapp"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
