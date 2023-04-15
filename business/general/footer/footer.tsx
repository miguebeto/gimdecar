import Image from "next/image";
import styles from "./styles.module.css";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";

export default function Footer() {
  const { t, lang } = useTranslation("footer");
  const social_items = t<any>("social.items", {}, { returnObjects: true });
  const router = useRouter();

  const backColor = {
    backgroundColor: router.asPath === "/" ? "#f2ebe1" : "#FFFFFF"
  }
  return (
    <>
      {/* <div className={styles.banner}>
          <Image
            className={styles.banner_img}
            src="/images/banner.png"
            alt="banner"
            title="banner"
            width={800}
            height={230}
          />
          <Image
            className={styles.sounds}
            src="/images/beats.png"
            alt="betas"
            title="beats"
            width={400}
            height={400}
          />
      </div> */}
      <footer className={styles.footer} style={backColor}>
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
              GIMNASIO MODERNO DE CARTAGENA
            </h2>
            <h2>{t('about.title')}</h2>
            <p>
              {t('about.description')}
            </p>
          </div>

          <div className={styles.content_2}>
            <h2>{t("contact.title")}</h2>
            <div className={styles.infoUbi}>
              <div className={styles.itenUbi}>
                <i className="bx bx-mail-send"></i>
                <div className={styles.info}>
                  <p>
                    {t("contact.address")} <br/>
                    {t('contact.place')}
                  </p>
                </div>
              </div>

              <div className={styles.itenUbi}>
                <i className="bx bx-phone"></i>
                <div className={styles.info}>
                  <p>
                    {t("contact.phone1")}<br/>
                    {t("contact.phone2")}
                    </p>
                </div>
              </div>

              <div className={styles.itenUbi}>
                <i className="bx bx-time-five"></i>
                <div className={styles.info}>
                  <p>{t("contact.schedule.name")}</p>
                  <p>{t("contact.schedule.hours")}</p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.content_3}>
            <h2>Redes Sociales</h2>
            <div className={styles.social}>
              <ul className={styles.navigation}>
                <i className="bx bxl-instagram"></i>
                <i className="bx bxl-facebook"></i>
                <i className="bx bxl-tiktok"></i>
              </ul>
            </div>
            <h2>{t("legacy.title")}</h2>
            <p>{t('legacy.policy')}</p>
            <p>{t('legacy.nit')}</p>
          </div>
        </div>
      </footer>
    </>
  );
}
