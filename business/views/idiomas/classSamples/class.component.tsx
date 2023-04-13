import styles from "./class.module.css"
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Autoplay, A11y, Pagination, Navigation} from "swiper";
import slider from "../../../../services/sliders.json"
import CardComponent from "./cards/card.component";

export default function ClassComponent(){

    return(
        <>
            <section className={styles.section}>
                <div className={styles.general}>
                    <Swiper
                        modules={[A11y, Navigation, Pagination]}
                        autoplay={{ delay: 10000 }}
                        className={styles.swiper}
                        slidesPerView={1}
                        spaceBetween={500}
                    >
                        <div className={styles.card_general}>
                            {
                                slider.idiomas?.map((item: any, index: any) => (
                                    <SwiperSlide key={index}>
                                        <CardComponent itmes={item ? item : null}/>
                                    </SwiperSlide>
                                ))
                            }
                        </div>
                    </Swiper>
                </div>
            </section>
        </>
    )
}
