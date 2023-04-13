import type { NextPage } from "next";
import Layout from "../../business/general/layout/layout.component";
import BannerComponent from "../../business/views/idiomas/principalBanner/banner.component";
import ActivitiesComponent from "../../business/views/idiomas/activities/activities.component";

const Home: NextPage = () => {
    return (
        <>
            <Layout>
                <BannerComponent/>
                <ActivitiesComponent/>
            </Layout>
        </>
    );
};

export default Home;
