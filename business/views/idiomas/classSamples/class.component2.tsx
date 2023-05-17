import styles from "./class.module.css";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Swiper as SwiperType,
  Navigation,
  Pagination,
  A11y,
  Autoplay,
} from "swiper";
import CardComponent from "./cards/card.component";
import { useRef } from "react";

export default function ClassComponent2(props: any) {
  const swiperRef = useRef<SwiperType>();


  return (
    <>
      <section className={styles.section}>
        <div className={styles.general}>
          <Swiper
            modules={[A11y, Navigation, Pagination]}
            autoplay={{ delay: 5000 }}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            className={styles.swiper}
            slidesPerView={1}
            spaceBetween={500}
            pagination={true}
          >
            <div className={styles.card_general}>
              {Array.isArray(props.items_slider)
                ? props.items_slider?.map((item: any, index: any) => (
                    <SwiperSlide key={index}>
                      <CardComponent
                        image={item.image}
                        title2={item.title}
                        description={item.description}
                        button={item.button}
                      />
                    </SwiperSlide>
                  ))
                : null}
            </div>
          </Swiper>
        </div>
        <div className={styles.content_control}>
          <div className={styles.controllers}>
            <a
              className={styles.prev}
              type="button"
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <i className="bx bx-chevron-left"></i>
            </a>

            <a
              className={styles.next}
              type="button"
              onClick={() => swiperRef.current?.slideNext()}
            >
              <i className="bx bx-chevron-right"></i>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
