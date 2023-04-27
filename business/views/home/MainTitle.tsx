import Link from "next/link";
import styles from "./styles.module.css";
import Image from "next/image";

const MainTitle = ({ translate }: any) => {
  return (
    <div className={styles.main_title}>
      <div className={styles.main_cotainer_title}>
        <h1 className={styles.title}>{translate("section1.title")}</h1>
        <h4>{translate("section1.description")}</h4>
        <p>{translate("section1.description2")}</p>
        <Link href="#form-seccion">
          <div className={styles.button_menu}>
          <i className='bx bxs-contact'></i>&nbsp;
            {translate("section1.button")}
          </div>
        </Link>
      </div>
      <div className={styles.container_tasks}>
        <img
          className={styles.home_tasks}
          src="/images/tasks.png"
          alt="tasks"
          width={550}
          height={600}
          title="tasks"
        />
      </div>
    </div>
  );
};

export default MainTitle;
