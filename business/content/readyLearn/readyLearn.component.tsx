import Image from "next/image";
import styles from "./ready.module.css"
import useTranslation from "next-translate/useTranslation";
 
export default function ReadyLearnComponenet({url, title, description, section}:any) {
    const { t, lang } = useTranslation(section);

    return (
        <>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.text}>
                        <div>
                            <div>
                                <h4>{t(title)}</h4>
                            </div>
                            <div>
                                <p>{t(description)}</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.beats}>
                        <img
                            src={url}
                            width={400}
                            height={300}
                            alt="logo_banner"
                            title="logo_banner"
                        /> 
                    </div>
                </div>
            </div>
        </>
    );
}