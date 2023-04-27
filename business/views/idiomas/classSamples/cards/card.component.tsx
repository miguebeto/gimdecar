import styles from "./card.module.css";

export default function CardComponent(props: any) {
  // console.log("props => ",props.image)

  return (
    <>
      <div className={styles.general}>
        <div className={styles.grid}>
          <div className={styles.grid_container_img}>
            <div
              className={styles.video}
              style={{
                backgroundImage:
                  `url('${props.image}')`,
              }}
            ></div>
          </div>
          <div className={styles.texts}>
            <h3>
              {props.title1} <br />
              <span>{props.title2}</span> <br />
              {props.title3}
            </h3>
            <div className={styles.description}>
              <p>{props.description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
