import type { NextPage } from "next";
import styles from "./index.module.css";
import Layout from "../../business/general/layout/layout.component";
import BannerComponent from "../../business/views/idiomas/principalBanner/banner.component";
import ActivitiesComponent from "../../business/views/idiomas/activities/activities.component";
import ClassComponent from "../../business/views/idiomas/classSamples/class.component";
import SliderComments from "../../business/views/home/slider/slider.component";
import StarsRatings from "../../business/content/ratings/ratinsStars.component";
import ReadyLearnComponenet from "../../business/content/readyLearn/readyLearn.component";
import HelpComponent from "../../business/content/help/help.component";
import useTranslation from "next-translate/useTranslation";
import Head from "next/head";

const Home: NextPage = () => {
  const { t, lang } = useTranslation("languages");
  const items_slider = t<any>("section3", {}, { returnObjects: true }); 

  return (
    <>
      <Layout>
        <Head>
          <title>{t("general.title")} | Gimnasio Moderno De Cartagena</title>
        </Head>
        <BannerComponent translate={t}/>
        <ActivitiesComponent translate={t}/>
        <ClassComponent translate={t} items_slider={items_slider}/>
        <div
          style={{
            backgroundColor: "#f1ebe0",
            paddingBottom: "50px",
            width: "100%",
          }}
        >
          <SliderComments
            span={t("section4.title")}
            title={t("section4.title2")}
            id={"idiomas"}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            backgroundColor: "#f1ebe0",
            paddingBottom: "50px",
            width: "100%",
          }}
        >
          <StarsRatings/>
        </div>
        <HelpComponent/>
        <div className={styles.learn}>
          <div className={styles.top}>
            <ReadyLearnComponenet url="/images/ludo.png" title="section5.title" description="section5.description" section="languages"/>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Home;
