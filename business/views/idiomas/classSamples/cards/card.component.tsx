import styles from "./card.module.css"

export default function CardComponent(props:any){
    // console.log("props => ",props.image)

    return(
        <>
            <div className={styles.general}>
                <div className={styles.grid}>
                    <div className={styles.video} style={{backgroundImage: "url('/images/idiomas/slider/class-video.png')"}}>

                    </div>
                    <div className={styles.texts}>
                        <h3>
                            {props.title1} <br/>
                            <span>{props.title2}</span> <br/>
                            {props.title3}: <span>{props.number}°</span>
                        </h3>
                        <div className={styles.description}>
                            <p>{props.description}</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    );
}
