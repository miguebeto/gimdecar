import type { NextPage } from "next";
import Layout from "../../business/general/layout/layout.component";
import BannerComponent from "../../business/views/idiomas/principalBanner/banner.component";
import ActivitiesComponent from "../../business/views/idiomas/activities/activities.component";
import ClassComponent from "../../business/views/idiomas/classSamples/class.component";
import SliderComments from "../../business/views/home/slider/slider.component";

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
            </Layout>
        </>
    );
};

export default Home;
