import styles from "./activities.module.css"
import Image from "next/image";

export default function ActivitiesComponent(){

    return(
        <>
            <div className={styles.container}>
                <div className={styles.grid}>
                    <div className={styles.title}>
                        <div>
                            <div>
                                <h2>
                                    Actividades<br/>
                                    <span>English Class</span>
                                </h2>
                            </div>
                            <div className={styles.description}>
                                <p>
                                    Lorem ipsum dolor sit amet
                                    consectetuer adipiscing elit
                                </p>
                            </div>
                            <div className={styles.button}>
                                <button>Leer Más</button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.imageLanguage}>
                        <Image
                            width={450}
                            height={450}
                            src="/images/idiomas/activities/language.png" alt="Lenguaje" title="Lenguaje"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
