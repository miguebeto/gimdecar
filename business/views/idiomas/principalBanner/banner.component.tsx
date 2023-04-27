import Link from "next/link";
import styles from "./banner.module.css";
import Image from "next/image";

export default function BannerComponent({ translate }: any) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.titleButton}>
            <h1>{translate("section1.title")}</h1>
            <div className={styles.button}>
              <Link href="/#form-seccion">
                <button>{translate("section1.button")}</button>
              </Link>
            </div>
          </div>
          <div className={styles.world}>
            <img
              src="/images/idiomas/banner/mundo.png"
              width={550}
              height={550}
              alt="Mundo"
              title="Mundo"
            />
          </div>
        </div>
      </div>
    </>
  );
}
