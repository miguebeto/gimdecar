import Link from "next/link";
import styles from "./styles.module.css";
import Image from "next/image";

const Ubication = ({ translate }: any) => {
  return (
    <div className={styles.main_title_ubication}>
      <div className={styles.main_title_container}>
        <h2 className={styles.title_ubication}>
          {translate("section2.title")}
        </h2>
      </div>
      <div className={styles.main_description_container}>
        <div className={styles.main_description_text}>
          <p>{translate("section2.description")}</p>
          <Link
            href="https://maps.app.goo.gl/VU1sjzzFQfcENueA7?g_st=ic"
            title="Ubication"
          >
            <a target="_blank">
              <div className={styles.button_menu_ubication}>
                <i className="bx bx-map"></i>&nbsp;
                {translate("section2.button")}
              </div>
            </a>
          </Link>
        </div>
        <div className={styles.container_img}>
          <img
            className={styles.home_planet}
            src="/images/planet.png"
            alt="Planet"
            width={400}
            height={400}
            title="Planet"
          />
        </div>
      </div>
    </div>
  );
};

export default Ubication;
