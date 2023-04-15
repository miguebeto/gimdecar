import styles from "./slider.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useState } from "react";
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
import comments from "../../../../services/comments.json";
import Link from "next/link";

SwiperCore.use([Autoplay, Navigation]);

export default function SliderComments(props:any) {
  const swiperRef = React.useRef<SwiperType>();

  const content = comments.home.map((item: any, index: any) => (
    <SwiperSlide
      key={index}
      className={styles.swiper}
      style={{ backgroundColor: `df8640` }}
    >
      <div
        className={"container " + styles.cardSlider}
        style={{ backgroundColor: "#FFFFFF" }}
      >
        {/*<div className={styles.content}>
                <img src={item.image} alt={"Testigo"} title="comments"></img>
</div>*/}
        <div className={styles.info}>
          <p className={styles.descriptions}>
            {item.comment} 
          </p>
        </div>
      </div>
      <div className={styles.button_slider_container}>
          <Link href="/" className={styles.button_menu_slider}>
            Leer más
          </Link>
      </div>
    </SwiperSlide>
  ));
  return (
    <>
      <div className={styles.general}>
        <div className={styles.grid}>
          {props.id === "home" ? <div className={styles.title_home}><h2>{props.title}</h2></div> : null }
          {props.id === "idiomas" ? <div className={styles.title_languages}><h2><span>{props.span} </span>{props.title}</h2></div> : null}
          {props.id === "talento" ? <div className={styles.title_home}><h2>{"Talento page"}</h2></div>: null}
          <div className={styles.content_slider}>
            <div className={styles.prev_btn}>
              <a type="button" onClick={() => swiperRef.current?.slidePrev()}>
                <i className="bx bx-chevron-left"></i>
              </a>
            </div>
            <Swiper
              modules={[Navigation, Pagination, A11y]}
              autoplay={{ delay: 10000 }}
              onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
              }}
              loop={true}
              className={styles.content_swiper}
              spaceBetween={25}
              slidesPerView={1}
              breakpoints={{
                800: {
                  slidesPerView: 1,
                },

                995: {
                  slidesPerView: 2,
                },

                1024: {
                  slidesPerView: 3,
                },
              }}
            >
              {content}
            </Swiper>
            <div className={styles.next_btn}>
              <a type="button" onClick={() => swiperRef.current?.slideNext()}>
                <i className="bx bx-chevron-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
