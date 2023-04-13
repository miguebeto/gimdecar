import Ubication from "./Ubication";
import MainTitle from "./MainTitle";
import styles from "./styles.module.css";
import Benefits from "./Benefits";
import SliderComments from "./slider/slider.component";
import Image from "next/image";
import Form from "./form/form";
import Ratings from "./ratings/ratings";



const HomePage = () => {
  return (
    <>
      <MainTitle />
      <Ubication />
      <Benefits />
      <SliderComments />
      <h1>Hola mundo</h1>
      <Ratings />
      <Form />
      <div className={styles.background_content2}>
        <Image
          style={{ objectFit: "fill" }}
          src={"/images/resource2_1.png"}
          alt={"logo Gimdecar"}
          width={1135}
          height={500}
        />
      </div>
    </>
  );
};

export default HomePage;
