import Image from "next/image";
import styles from "./learn.module.css";

const Learn = () => {
  return (
    <div className={styles.container_learn}>
      <div className={styles.learn_text}>
        <div className={styles.learn_title}>
          <h2>Qué quieres que aprenda tu niño hoy?</h2>
        </div>
        <div className={styles.learn_description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </div>
        <div className={styles.learn_input}>
          <input type="text" placeholder="Buscar un espacio" />
          <button type="button">
            <img
              src="/images/talento/arrow-right.png"
              alt="search"
              title="arrow"
              width={28}
              height={22}
            />
          </button>
        </div>
      </div>
      <div className={styles.learn_img}>
        <img
          src="/images/books.png"
          alt="books"
          title="books"
          width={580}
          height={550}
        />
      </div>
    </div>
  );
};

export default Learn;
