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
import useTranslation from "next-translate/useTranslation";
import { useEffect, useState } from "react";
import axios from "axios";
import Head from "next/head";

const HomePage = () => {
  const { t, lang } = useTranslation("home");

  const colData = "https://www.datos.gov.co/resource/xdk5-pm3f.json";
  const [dataCol, setDataCol] = useState<Array<any>>([]);
  const [dpto, setDpto] = useState<Array<any>>([]);
  const city: any[] = [];
  const [selectDpto, setSelectDpto] = useState("");

  const getDataColombia = () => {
    axios
      .get(colData)
      .then(function (res: any) {
        setDataCol(res.data);
        //console.log("DATOS => ", res.data);
      })
      .catch(function (error: any) {
        console.log(error);
      });
  };

  const getDptos = async () => {
    for (let d = 0; d < dataCol.length; d++) {
      if (dpto.includes(dataCol[d]["departamento"])) {
      } else {
        dpto.push(dataCol[d]["departamento"]);
      }
    }
    const selectCity = async () => {
      for (let m = 0; m < dataCol.length; m++) {
        if (dataCol[m]["departamento"] === selectDpto) {
          //console.log("hola mundo xd")
          city.push(dataCol[m]["municipio"]);
        }
      }
    };
    selectCity();
  };
  getDptos();
  if (selectDpto === "Bolívar") {
    city.unshift("Cartagena");
  }

  useEffect(() => {
    getDataColombia();
  }, []);

  return (
    <>
      <Head>
        <title>{t("general.title")}</title>
      </Head>
      <MainTitle translate={t} />
      <Ubication translate={t} />
      <Benefits translate={t} />
      <SliderComments translate={t} title={t("section4.title")} id="home" />
      <br />
      <br />
      <br />
      <StarsRatings />
      <HelpComponent />
      <Form
        setSelectDpto={setSelectDpto}
        dpto={dpto}
        city={city}
        translate={t}
        lang={lang}
      />
      <div className={styles.background_content2}></div>
      <ReadyLearnComponenet />
    </>
  );
};

export default HomePage;
