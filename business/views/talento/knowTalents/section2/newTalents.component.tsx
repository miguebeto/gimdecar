import TabComponent from "../../tabNavigarion/tab.component";
import styles from "./newTalents.module.css";
import Image from "next/image";
import SliderTalent from "./slider/sliderTalent.component";

export default function NewTalentsComponent(props: any) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <div>
            <SliderTalent translate={props.translate} />
          </div>
        </div>
      </div>
    </>
  );
}
