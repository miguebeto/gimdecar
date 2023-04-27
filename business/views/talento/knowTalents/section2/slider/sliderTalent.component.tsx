import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/free-mode";
import SwiperCore, {
    Swiper as SwiperType,
    Navigation,
    Pagination,
    A11y,
    Autoplay,
} from "swiper";
import styles from './sliderTalent.module.css'

SwiperCore.use([Autoplay, Navigation]);

export default function SliderTalent(props: any) {

    const items = props.translate("talents.section1.gallery", {}, { returnObjects: true });

    const content = Array.isArray(items) ? items.map((i: any, index: number) => (
        <SwiperSlide
            key={index}
            className={styles.swiper}
        >
            <div>
                <img src={i.img} alt={i.alt} title={i.title} />
            </div>
        </SwiperSlide>

    )) : null;

    return (
        <>
            <Swiper
                modules={[Navigation, Pagination, A11y]}
                autoplay={{ delay: 5000 }}
                loop={true}
                className={styles.content_swiper}
                spaceBetween={25}
                slidesPerView={1}
            >
                {content}
            </Swiper>
        </>
    )
}