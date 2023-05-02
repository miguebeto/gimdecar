import styles from './header.module.css'
import Head from "next/head";
import useTranslation from "next-translate/useTranslation";

export default function HeaderComponent(){
    const {t, lang} = useTranslation('nav');
    // const wsp_esp = "https://api.whatsapp.com/send?phone=573052163794&text=Hola%20Gimdecar%20%E2%9C%A8%F0%9F%98%80%2C%20me%20gustar%C3%ADa%20conocer%20m%C3%A1s%20sobre%20su%20modelo%20de%20educaci%C3%B3n%20integral%2C%20para%20que%20mi%20hijo%2Fa%20haga%20parte%20de%20su%20instituci%C3%B3n%20y%20pueda%20educarse%20seguro%20y%20con%20amor";
    const wsp_esp = "https://wa.link/9mo8t3";
    const wsp_eng = "https://wa.link/x5vco8";

    return(
        <>
            <Head>
                <meta name="keywords" content={t('keywords')} />
                <meta name="description" content={t('description')} />
            </Head>

            <link rel="canonical" href="https://gimdecar.edu.co" />
            <a
                href="https://gimdecar.phidias.co/"
                target="_blank"
                title="Phidias"
                className={styles.float_phidias}
            >
                <img src="/images/phidias.jfif" alt="phidias" title='phidias' width={60} height={60} />
            </a>
            <a
                href="https://portalpagos.davivienda.com/#/comercio/6819/CORPORACION%20GIMDECAR"
                target="_blank"
                title="Pagar"
                className={styles.float_pay}
            >
                <i className='bx bx-dollar-circle' ></i>
            </a>
            <a
                href={lang === 'en' ? wsp_eng : wsp_esp}
                target="_blank"
                rel="noreferrer"
                title="Whatsapp"
                className={styles.float}
            >
                <i className='bx bxl-whatsapp'></i>
            </a>
        </>
    )
}
