import Image from "next/image";
import styles from "./styles.module.css";
import useTranslation from "next-translate/useTranslation";

export default function Footer() {
  const { t, lang } = useTranslation("footer");
  const social_iten = t<any>("social.item", {}, { returnObjects: true });
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.general}>
          <div className={styles.content_1}>
            <div className={styles.logo}>
              {/* <img src="/images/planet.png" alt="Medtrip" title="Medtrip"/> */}
            </div>
            <h2>
              <Image
                src={"/images/gimdecar-logo.png"}
                alt={"logo Gimdecar"}
                width={20}
                height={20}
              />
              {t("GIMNASIO MODERNO DE CARTAGENA")}
            </h2>
            <h2>{t("Sobre nosotros")}</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore
              perspiciatis
            </p>
          </div>

          <div className={styles.content_2}>
            <h2>{t("Contacto")}</h2>
            <div className={styles.infoUbi}>
              <div className={styles.itenUbi}>
                <i className="bx bx-mail-send"></i>
                <div className={styles.info}>
                  <p>{t("contact.direction")}</p>
                </div>
              </div>

              <div className={styles.itenUbi}>
                <i className="bx bx-phone"></i>
                <div className={styles.info}>
                  <p>{t("contact.phone")}</p>
                </div>
              </div>

              <div className={styles.itenUbi}>
                <i className="bx bx-time-five"></i>
                <div className={styles.info}>
                  <p>{t("schedule.title")}</p>
                  <p>{t("schedule.content")}</p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.content_3}>
            <h2>{t("Redes Sociales")}</h2>
            <div className={styles.social}>
              <ul className={styles.navigation}>
                <i className="bx bxl-instagram"></i>
                <i className="bx bxl-facebook"></i>
                <i className="bx bxl-tiktok"></i>
              </ul>
            </div>
            <h2>{t("Legales")}</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
