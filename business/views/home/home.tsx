import Ubication from "./Ubication";
import MainTitle from "./MainTitle";
import styles from "./styles.module.css";
import Benefits from "./Benefits";
import SliderComments from "./slider/slider.component";
import Image from "next/image";

const HomePage = () => {
  return (
    <>
      <MainTitle />
      <Ubication />
      <Benefits />
      <SliderComments />
      <h1>Hola mundo</h1>
      <h1>Hola mundo</h1>
      <div className={styles.background_content}>
        <h1>Hola mundo</h1>
        {/* <Image src="/images/banner.png" alt="banner" width={600} height={200} /> */}
      </div>
      <div className={styles.banner}>
        <Image className={styles.banner_img} src="/images/banner.png" alt="banner" title="banner" width={700} height={250} />
        <Image src="/images/beats.png" alt="betas" title="beats" width={300} height={400} />
      </div>
      <h1>Hola mundo</h1>
    </>
  );
};

export default HomePage;
