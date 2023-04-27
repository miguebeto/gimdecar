import Link from "next/link";
import styles from "./styles.module.css";
import Image from "next/image";

const Benefits = ({ translate }: any) => {
  return (
    <div className={styles.container_benefits}>
      <div className={styles.center_content}>
        <div className={styles.image_kid}></div>
        <div className={styles.main_title_benefits}>
          <h2 className={styles.title_benefits}>
            {translate("section3.title")}
          </h2>
          <div className={styles.description}>
            <p>{translate("section3.description")}</p>
          </div>

          <Link href="#form-seccion" className={styles.button_menu_benefits}>
            <div className={styles.button}>{translate("section3.button")}</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
