import { useRouter } from "next/router";
import styles from "./card.module.css";
import Link from "next/link";

export default function CardComponent(props: any) {
  // console.log("props => ",props.image)

  const route = useRouter();

  return (
    <>
      <div className={styles.general}>
        <div className={styles.grid}>
          <div className={styles.grid_container_img}>
            <div
              className={styles.video}
              style={{
                backgroundImage: `url('${props.image}')`,
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
            <div className={styles.button_slider}>
              {route.asPath === "/talento" ? (
                <Link href="/#form-seccion">
                  <button>{props.button}</button>
                </Link>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
