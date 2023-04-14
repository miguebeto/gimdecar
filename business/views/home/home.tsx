import Ubication from "./Ubication";
import MainTitle from "./MainTitle";
import styles from "./styles.module.css";
import Benefits from "./Benefits";
import SliderComments from "./slider/slider.component";
import Image from "next/image";
import Form from "./form/form";
import ReadyLearnComponenet from "../../content/readyLearn/readyLearn.component";
import StarsRatings from "../../../business/content/ratings/ratinsStars.component";
import HelpComponent from "../../content/help/help.component";


const HomePage = () => {
  return (
    <>
      <MainTitle />
      <Ubication />
      <Benefits />
      <SliderComments title={'Testimonios académicos'} id="home"/><br/><br/><br/>
      <StarsRatings/>
      <HelpComponent />
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
      <ReadyLearnComponenet/>
    </>
  );
};

export default HomePage;
