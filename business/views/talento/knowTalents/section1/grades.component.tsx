import Image from 'next/image';
import styles from './grades.module.css';

export default function GradesComponent(props: any) {

    return (
        <>
            <div className={styles.container}>
                <div className={styles.grid}>
                    <div>
                        <div className={styles.title}>
                            <h2>{props.translate('talents.section1.title')}</h2>
                            <p>{props.translate('talents.section1.description')}</p>
                        </div>
                        <div className={styles.search_grade}>
                            <div className={styles.search_content}>
                                <input type='text' placeholder={props.translate('talents.section1.placeholder')} />
                                <button type='button'>
                                    <img
                                        src='/images/talento/arrow-right.png'
                                        alt='search' title='arrow'
                                        width={28}
                                        height={22}
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={styles.image}>
                            <img
                                src={'/images/talento/mazorca.png'}
                                alt='Mazorca'
                                title='Mazorca bonita'
                            />
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}