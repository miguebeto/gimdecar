import Image from "next/image";
import styles from "./ready.module.css"
import useTranslation from "next-translate/useTranslation";
 
export default function ReadyLearnComponenet() {
    const { t, lang } = useTranslation("home");

    return (
        <>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.text}>
                        <div>
                            <div>
                                <h4>{t("section5.title")}</h4>
                            </div>
                            <div>
                                <p>{t("section5.description")}</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.beats}>
                        <img
                            src="/images/beats.png"
                            width={500}
                            height={520}
                            alt="Diademas"
                            title="Diademas"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}