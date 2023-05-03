import Slider2Comments from "../../home/slider/slider2.component";
import styles from "./pedagogy.module.css";

const Pedagogy = ({translate}:any) => {
  return (
    <div className={styles.slider_languaje}>
      <div className={styles.background4}>
        <div className={styles.learn_subtitle}>
          <h2>{translate("section2.title")}</h2>
          <p>
            {translate("section2.description")}
          </p>
          <div className={styles.learn_subtitle_img}>
            <Slider2Comments />
            <div className={styles.container_text}>
              <div className={styles.container_mision}>
                <h2>{translate("section4.title")}</h2>
                <p>
                {translate("section4.description")}
                </p>
              </div>
              <div className={styles.container_vision}>
                <h2>{translate("section4.title2")}</h2>
                <p>
                {translate("section4.description2")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pedagogy;
