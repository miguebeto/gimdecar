import useTranslation from "next-translate/useTranslation";
import styles from "./title.module.css";
import Link from "next/link";

export default function TitleTalent(props:any){
    // console.log("talent translate => ", t('section1'));

    return(
        <>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.title}>
                        <h1>
                            {props.translate('section1.title')}<br/>
                        </h1>

                        <Link href="/#form-seccion"><button>{props.translate('section1.button')}</button></Link>
                    </div>
                </div>
            </div>
        </>
    );
}