import type { NextPage } from "next";
import Layout from "../../business/general/layout/layout.component";
import TitleTalent from "../../business/views/talento/titleTalent/title.component";
import GradesComponent from "../../business/views/talento/knowTalents/section1/grades.component";
import useTranslation from "next-translate/useTranslation";

const Home: NextPage = () => {
    const {t, lang} = useTranslation('talent');
    return (
      <>
        <Layout>
            <TitleTalent translate={t}/>
            <GradesComponent translate={t}/>
        </Layout>
      </>
    );
  };
  
  export default Home;
  