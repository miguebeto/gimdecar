import Link from "next/link";
import styles from "./activities.module.css";
import Image from "next/image";

export default function ActivitiesComponent({ translate }: any) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.title}>
            <div>
              <div>
                <h2>{translate("section2.title")}</h2>
              </div>
              <div className={styles.description}>
                <p>{translate("section2.description")}</p>
              </div>
              <Link href="/#form-seccion">
                <div className={styles.button}>
                  <button>{translate("section2.button")}</button>
                </div>
              </Link>
            </div>
          </div>
          <div className={styles.imageLanguage}>
            <img
              width={450}
              height={450}
              src="/images/idiomas/activities/language.png"
              alt="Lenguaje"
              title="Lenguaje"
            />
          </div>
        </div>
      </div>
    </>
  );
}
