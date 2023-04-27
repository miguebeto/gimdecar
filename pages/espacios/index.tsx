import { NextPage } from "next";
import Layout from "../../business/general/layout/layout.component";
import styles from "./index.module.css";
import ReadyLearnComponenet from "../../business/content/readyLearn/readyLearn.component";
import StarsRatings from "../../business/content/ratings/ratinsStars.component";
import SliderComments from "../../business/views/home/slider/slider.component";
import Learn from "../../business/views/espacios/learn/learn.component";
import Image from "next/image";
import HelpComponent from "../../business/content/help/help.component";
import Slider2Comments from "../../business/views/home/slider/slider2.component";
import useTranslation from "next-translate/useTranslation";

const Home: NextPage = () => {
  const { t, lang } = useTranslation("idiomas");
  return (
    <>
      <Layout>
        <div className={styles.title}>
          <h1>
            Hora de <span>aprender</span>
          </h1>
        </div>
        <div className={styles.slider_languaje}>
          <Slider2Comments />
        </div>
        <Learn />
        <div className={styles.learn_title}>
          <h2>Qué quieres que tu hijo aprenda?</h2>
        </div>
        <SliderComments id="espacios" />
        <div className={styles.background4}>
          <div className={styles.learn_subtitle}>
            <h2>El mejor ambiente para aprendizaje</h2>
            <div className={styles.learn_subtitle_img}>
              <img
                src="/images/children.png"
                alt="children"
                title="children"
                width={600}
                height={250}
              />
            </div>
          </div>
        </div>
        <div className={styles.upfooter}>
          <StarsRatings/>
          <HelpComponent/>
          <ReadyLearnComponenet/>
        </div>
      </Layout>
    </>
  );
};

export default Home;
