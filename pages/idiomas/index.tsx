import type { NextPage } from "next";
import Layout from "../../business/general/layout/layout.component";
import BannerComponent from "../../business/views/idiomas/principalBanner/banner.component";

const Home: NextPage = () => {
    return (
        <>
            <Layout>
                <BannerComponent/>
            </Layout>
        </>
    );
};

export default Home;
