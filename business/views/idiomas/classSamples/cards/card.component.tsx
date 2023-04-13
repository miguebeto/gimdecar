import styles from "./card.module.css"

export default function CardComponent(props:any){

    return(
        <>
            <div className={styles.general}>
                <div className={styles.grid}>
                    <div className={styles.video}>

                    </div>
                    <div className={styles.texts}>
                        <h3>
                            {props.items?.title1} <br/>
                            <span>{props.items?.title2}</span> <br/>
                            {props.items?.title3}: <span>{props.items?.class_number}</span>
                        </h3>
                        <p>{props.items?.description}</p>
                    </div>
                </div>
            </div>
        </>
    );
}
