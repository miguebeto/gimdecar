import Image from "next/image";
import styles from "./help.module.css"


export default function HelpComponent(){

    return(
        <>
            <div className={styles.container}>
                <div className={styles.grid}>
                    <div className={styles.miniTag}>
                        <div className={styles.text}>
                            <p>¿Cómo podemos ayudarte?</p>
                        </div>
                    </div>
                    <div className={styles.whatsapp}>
                            <Image
                                src="/images/whatsapp.png"
                                width={100}
                                height={100}
                                alt="logo whatsapp"
                            />
                        </div>
                </div>
            </div>
        </>
    );
}