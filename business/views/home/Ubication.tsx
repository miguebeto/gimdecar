import Link from "next/link";
import styles from "./styles.module.css";
import Image from "next/image";

const Ubication = () => {
  return (
    <div className={styles.main_title_ubication}>
      <div className={styles.main_title_container}>
        <h1 className={styles.title_ubication}>Nuestra Ubicación</h1>
        <Image
          className={styles.home_tasks}
          src="/images/tasks.png"
          alt="Planet"
          width={500}
          height={560}
        />
      </div>
      <div className={styles.main_description_container}>
        <div className={styles.main_description_text}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis, quis fugit. Optio eos dolore ullam blanditiis
          </p>
          <div className={styles.buttom_menu_ubication}>
            <Link href="/">Leer más</Link>
          </div>
        </div>
        <Image
          className={styles.home_planet}
          src="/images/planet.png"
          alt="Planet"
          width={400}
          height={400}
        />
      </div>
    </div>
  );
};

export default Ubication;
