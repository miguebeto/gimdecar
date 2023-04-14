import Image from "next/image";
import styles from "./ready.module.css"

export default function ReadyLearnComponenet() {

    return (
        <>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.text}>
                        <div>
                            <div>
                                <h4>¿Listo para aprender?</h4>
                            </div>
                            <div>
                                <p>Lorem ipsum dolor sit amet</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.beats}>
                        <Image
                            src="/images/beats.png"
                            width={500}
                            height={520}
                            alt="Diademas"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}