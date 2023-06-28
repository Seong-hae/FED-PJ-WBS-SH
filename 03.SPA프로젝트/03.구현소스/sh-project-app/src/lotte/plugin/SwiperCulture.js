// 문화센터 신규영역 스와이프 플러그인
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
/* 제이쿼리넣기 */
import $ from "jquery";
import { Link } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";

import "./SwiperCulture.css";
// import required modules
import { Autoplay, EffectFade } from "swiper";

// 데이터 가져오기
import { culture_product_data } from "../data/culture";




export default function SwiperCulture(props) {

  // 데이터 셋팅
  const cpdt = culture_product_data;
  console.log(cpdt);


  return (
    <>
    <section className="swiperwrap">
    {/* 신규강좌설명 영역 */}
      <Swiper
        slidesPerView={1}
        // spaceBetween={30}
        effect={"fade"}
        touchRatio= {0}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        // navigation={true}
        modules={[EffectFade, Autoplay]}
        className="mySwiper culture_slide cul_left_slide">
        {cpdt.map((v, i) => (
        <SwiperSlide key={i} className="cullist cullist_left">
          <Link to="/culturedetail" 
          state={{
              culsrc:v.culsrc,
              culsrc2:v.culsrc2,
              culname:v.culname,
              culpro:v.culpro,
              culperiod:v.culperiod,
              culdate:v.culdate,
              culstore:v.culstore,
              culauthor:v.culauthor,
              culprice:v.culprice,
              }}>
                <section className="culnewbx">
                  {/* 신규강좌설명 영역 */}
                  <div className="leftbox">
                    <h3>{v.culname}</h3>
                    <div className="pro">{v.culpro}</div>
                    <div className="store">{v.culstore}</div>
                    <div className="period">{v.culperiod}</div>
                    <div className="date">{v.culdate}</div>
                    <div className="read">Read more</div>

                  </div>
                </section>
          </Link>
        </SwiperSlide>
        ))}
      </Swiper>

      {/* 신규강좌사진 영역 */}
      <Swiper
        slidesPerView={1.5}
        spaceBetween={50}
        loop={true}
        touchRatio= {0}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        // navigation={true}
        modules={[Autoplay]}
        className="mySwiper culture_slide cul_right_slide">
        {cpdt.map((v, i) => (
        <SwiperSlide key={i} className="cullist cullist_right">
          <Link to="/culturedetail" 
          state={{
              culsrc:v.culsrc,
              culsrc2:v.culsrc2,
              culname:v.culname,
              culpro:v.culpro,
              culperiod:v.culperiod,
              culdate:v.culdate,
              culstore:v.culstore,
              culauthor:v.culauthor,
              culprice:v.culprice,
              }}>
                <section className="culnewbx">
                  <div className="rightbox">
                    <img src={v.culsrc} alt={v.culname} />
                  </div>
                </section>
          </Link>
        </SwiperSlide>
        ))}
      </Swiper>
      </section>
    </>
  );
}