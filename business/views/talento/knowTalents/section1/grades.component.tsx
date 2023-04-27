import styles from "./grades.module.css";

export default function GradesComponent(props: any) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div>
            <div className={styles.title}>
              <h2>{props.translate("talents.section1.title")}</h2>
              <p>{props.translate("talents.section1.description")}</p>
            </div>
          </div>
          <div>
            <div className={styles.image}>
              <img
                src={"/images/talento/mazorca.png"}
                alt="Mazorca"
                title="Mazorca bonita"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
