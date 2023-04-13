import styles from "./banner.module.css";
import Image from "next/image";

export default function BannerComponent(){

    return(
        <>
            <div className={styles.container}>
                <div className={styles.grid}>
                    <div className={styles.titleButton}>
                        <h1>Una Escuela <br/>
                            Bilingue<br/>
                            cerca de ti
                        </h1>
                        <div className={styles.button}>
                            <button>Leer Más</button>
                        </div>

                    </div>
                    <div className={styles.world}>
                        <Image src="/images/idiomas/banner/mundo.png"
                               width={550}
                               height={550}
                               alt="Mundo" title="Mundo"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
