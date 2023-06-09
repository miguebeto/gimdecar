import type { NextPage } from "next";
import styles from "./index.module.css";
import Layout from "../../business/general/layout/layout.component";
import TitleTalent from "../../business/views/talento/titleTalent/title.component";
import GradesComponent from "../../business/views/talento/knowTalents/section1/grades.component";
import useTranslation from "next-translate/useTranslation";
import NewTalentsComponent from "../../business/views/talento/knowTalents/section2/newTalents.component";
import SpacesComponent from "../../business/views/talento/spaces/spaces.component";
import SliderComments from "../../business/views/home/slider/slider.component";
import StarsRatings from "../../business/content/ratings/ratinsStars.component";
import HelpComponent from "../../business/content/help/help.component";
import ReadyLearnComponenet from "../../business/content/readyLearn/readyLearn.component";
import Head from "next/head";

const Home: NextPage = () => {
  const { t, lang } = useTranslation("talent");

  return (
    <>
      <Layout>
        <Head>
          <title>{t("general.title")} | Gimnasio Moderno De Cartagena</title>
        </Head>
        <TitleTalent translate={t} />
        <GradesComponent translate={t} />
        <NewTalentsComponent translate={t} />
        <SpacesComponent translate={t} />
        <SliderComments
          title={t("comments.title")}
          titlebr={t("comments.title2")}
          id={"talento"}
        />
        <div style={{ paddingTop: "10px" }}>
          <StarsRatings />
        </div>
        <HelpComponent />
        <div className={styles.learn}>
          <div className={styles.top}>
            <ReadyLearnComponenet url="/images/books.png" title="section5.title" description="section5.description"/>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Home;
