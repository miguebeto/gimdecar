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
import Standard from "../../business/views/espacios/standard/standard.component";
import Pedagogy from "../../business/views/espacios/pedagogy/pedagogy.component";
import Head from "next/head";

const Home: NextPage = () => {
  const { t, lang } = useTranslation("idiomas");
  return (
    <>
      <Layout>
        <Head>
          <title>{t("general.title")}</title>
        </Head>
        <div className={styles.title}>
          <h1>
            {t("general.title2")}
          </h1>
        </div>
        <Learn translate={t}/>
        <Standard translate={t}/>
        <SliderComments id="espacios" />
        <Pedagogy translate={t}/>
        <div className={styles.upfooter}>
          <StarsRatings/>
          <HelpComponent/>
          <ReadyLearnComponenet url="/images/game.png" title="section5.title" description="section5.description" section="idiomas"/>
        </div>
      </Layout>
    </>
  );
};

export default Home;
