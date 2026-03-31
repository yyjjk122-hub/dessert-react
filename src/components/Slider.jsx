import React from "react";
import { sliderData } from "../data/sliderData";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const Slider = () => {
  return (
    <section id="sliderType">
      <h2 className="blind">슬라이더 유형</h2>
      <Swiper navigation={true} pagination={{ clickable: true }} modules={[Navigation]} className="dessert_hero">
        {sliderData.map((slide) => (
          <SwiperSlide>
            <div className={`slider_img ${slide.className}`}>
              <div className="desc container">
                <span>{slide.subtitle}</span>
                <h3>{slide.title}</h3>
                <p>{slide.desc}</p>
                <div className="btn">
                  <a href="#">자세히 보기</a>
                  <a href="#" className="brown">
                    사이트 보기
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Slider;
