import useTranslation from "next-translate/useTranslation";
import styles from "./title.module.css";

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

                        <button>{props.translate('general.button')}</button>
                    </div>
                </div>
            </div>
        </>
    );
}