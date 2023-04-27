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
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";

SwiperCore.use([Autoplay, Navigation]);

export default function SliderComments(props: any) {
  const { t, lang } = useTranslation('comments');
  const comments = t<any>("talento", {}, { returnObjects: true })
  const router = useRouter();
  const swiperRef = React.useRef<SwiperType>();

  const content = Array.isArray(comments) ? comments.map((item: any, index: any) => (
    <SwiperSlide
      key={index}
      className={router.asPath === "/espacios" ? styles.swiper2 : styles.swiper}
      style={{ backgroundColor: `df8640`, paddingBottom: "20px" }}
    >
      <div
        className={
          router.asPath === "/espacios"
            ? "container " + styles.cardSlider2
            : "container " + styles.cardSlider
        }
        style={{ backgroundColor: "#FFFFFF" }}
      >
        <div className={styles.info}>
          <p
            className={
              router.asPath === "/espacios"
                ? styles.descriptions2
                : styles.descriptions
            } 
          >
            {item.comment}
          </p>
        </div>
      </div>
    </SwiperSlide>
  )): null;
  return (
    <div className={styles.container_slider}>
      <div
        className={
          router.asPath === "/espacios" ? styles.general2 : styles.general
        }
      >
        <div className={styles.grid}>
          {props.id === "home" ? (
            <div className={styles.title_home}>
              <h2>{props.title}</h2>
            </div>
          ) : null}
          {props.id === "idiomas" ? (
            <div className={styles.title_languages}>
              <h2>
                <span>{props.span} </span>
                {props.title}
              </h2>
            </div>
          ) : null}
          {props.id === "talento" ? (
            <div className={styles.title_home}>
              <h2>
                {props.title} <br />
                {props.titlebr}
              </h2>
            </div>
          ) : null}
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
    </div>
  );
}
