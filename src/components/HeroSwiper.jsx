import "../styles/Hero.scss";
import "react-photo-view/dist/react-photo-view.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { useRef } from "react";
import { BsArrowRightCircle } from "react-icons/bs";
import { BsArrowLeftCircle } from "react-icons/bs";
import { SlSizeFullscreen } from "react-icons/sl";

import { IMAGE_BASE_URL, IMAGE_BASE_URL_LOW } from "../lib/contants";

const items = Array.from({ length: 10 });

function HeroSwiper() {
  const swiperRef = useRef(null);
  console.log(swiperRef.current);
  return (
    <PhotoProvider speed={() => 400}>
      <Swiper
        onSwiper={swiper => {
          swiperRef.current = swiper;
        }}
        autoplay={{ delay: 2500 }}
        className="hero__bottom"
        slidesPerView={"auto"}
        loop={true}>
        {items.map((_, index) => {
          return (
            <SwiperSlide key={index} className="hero__image">
              <PhotoView src={`${IMAGE_BASE_URL}/swiper_${index + 1}.jpg`}>
                <div className="hero__swiper-image">
                  <div className="hero__swiper-image--view">
                    <SlSizeFullscreen className="hero__swiper-image--icon" />
                  </div>
                  <img
                    className="lazy"
                    draggable={false}
                    data-src={`${IMAGE_BASE_URL}/swiper_${index + 1}.jpg`}
                    src={`${IMAGE_BASE_URL_LOW}/swiper_${index + 1}.jpg`}
                    alt="lion picture from our zoo"
                  />
                </div>
              </PhotoView>
            </SwiperSlide>
          );
        })}
        <div className="hero__swiper-buttons">
          <button onClick={() => swiperRef.current?.slidePrev()}>
            <BsArrowLeftCircle className="hero__swiper-buttons--icons" />
          </button>
          <button onClick={() => swiperRef.current?.slideNext()}>
            <BsArrowRightCircle className="hero__swiper-buttons--icons" />
          </button>
        </div>
      </Swiper>
    </PhotoProvider>
  );
}

export default HeroSwiper;

{
  /* <script src="../../script/HeroSwiper.js"></script> */
}
