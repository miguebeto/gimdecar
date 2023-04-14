import type { NextPage } from "next";
import styles from "./index.module.css"
import Layout from "../../business/general/layout/layout.component";
import BannerComponent from "../../business/views/idiomas/principalBanner/banner.component";
import ActivitiesComponent from "../../business/views/idiomas/activities/activities.component";
import ClassComponent from "../../business/views/idiomas/classSamples/class.component";
import SliderComments from "../../business/views/home/slider/slider.component";
import StarsRatings from "../../business/content/ratings/ratinsStars.component";
import ReadyLearnComponenet from "../../business/content/readyLearn/readyLearn.component";
import HelpComponent from "../../business/content/help/help.component";

const Home: NextPage = () => {
    return (
        <>
            <Layout>
                <BannerComponent/>
                <ActivitiesComponent/>
                <ClassComponent/>
                <div style={{backgroundColor: '#f1ebe0', paddingBottom: '50px', width:'100%'}}>
                    <SliderComments span={'Testimonios'} title={'de padres de familia'} id={"idiomas"}/>
                </div>
                <div style={{backgroundColor: '#f1ebe0', paddingBottom: '50px', width:'100%'}}>
                    <StarsRatings />
                </div>
                <HelpComponent />
                <div className={styles.learn}>
                    <div className={styles.top}>
                        <ReadyLearnComponenet/>
                    </div>
                </div>
            </Layout>
        </>
    );
};

export default Home;
