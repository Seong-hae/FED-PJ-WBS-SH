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

import "./SwiperGallery.css";
// import required modules
import { Autoplay, EffectFade } from "swiper";

// 데이터 가져오기
import { gallery_data } from "../data/gallery";




export default function SwiperGallery(props) {

  // 데이터 셋팅
  const galdt = gallery_data;
  console.log(galdt);


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
        {galdt.map((v, i) => (
        <SwiperSlide key={i} className="cullist cullist_left">
          <Link to="/gallerydetail" 
          state={{
              galsrc:v.galsrc,
              galname:v.galname,
              galperiod:v.galperiod,
              galdate:v.galdate,
              galstore:v.galstore,
              galauthor:v.galauthor,
              }}>
                <section className="culnewbx">
                  {/* 신규강좌설명 영역 */}
                  <div className="leftbox">
                    <h3>{v.galname}</h3>
                    <div className="pro">작가 : {v.galauthor}</div>
                    <div className="store">{v.galstore}</div>
                    <div className="period">{v.galperiod}</div>
                    <div className="date">{v.galdate}</div>
                    <button className="read">Read more</button>

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
        {galdt.map((v, i) => (
        <SwiperSlide key={i} className="cullist cullist_right">
          <Link to="/gallerydetail" 
          state={{
              galsrc:v.galsrc,
              galname:v.galname,
              galperiod:v.galperiod,
              galdate:v.galdate,
              galstore:v.galstore,
              galauthor:v.galauthor,
              }}>
                <section className="culnewbx">
                  <div className="rightbox">
                    <img src={v.galsrc} alt={v.galname} />
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