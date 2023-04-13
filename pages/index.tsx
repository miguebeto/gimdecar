import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import HomePage from "../business/views/home/home";
import Layout from "../business/general/layout/layout.component";

const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <HomePage />
      </Layout>
    </>
  );
};

export default Home;
