import Link from "next/link";
import styles from "./styles.module.css";
import Image from "next/image";

const Benefits = () => {
  return (
    <div className={styles.container_benefits}>
      <div className={styles.center_content}>
        <div className={styles.image_kid}></div>
        <div className={styles.main_title_benefits}>
          <h1 className={styles.title_benefits}>Nuestros Beneficios</h1>
          <div className={styles.description}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>

          <div className={styles.button}>
            <Link href="/" className={styles.button_menu_benefits}>
              Leer más
            </Link>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Benefits;
