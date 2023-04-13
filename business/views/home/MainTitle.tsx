import Link from "next/link";
import styles from "./styles.module.css";


const MainTitle = () => {
  return (
    <div className={styles.main_title}>
      <h1 className={styles.title}>Estamos <br/> más cerca</h1>
      <p>Lorem ipsun dolor</p>
      <div className={styles.buttom_menu}>
        <Link href="/">Leer más</Link>
      </div>
    </div>
  );
};

export default MainTitle;
