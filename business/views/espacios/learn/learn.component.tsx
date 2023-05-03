import Image from "next/image";
import styles from "./learn.module.css";
import useTranslation from "next-translate/useTranslation";

const Learn = ({translate}:any) => {
  return (
    <div className={styles.learn_img}>
      <div className={styles.container_img}>
        <img src="/images/idiomas/images/logo_banner.png" alt="logo_gimdecar" title="logo_banner" />
      </div>
      <div className={styles.container_description}>
        <p>
         {translate("general.description")}
        </p>
      </div>
    </div>
  );
};

export default Learn;
