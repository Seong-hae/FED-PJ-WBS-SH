import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
/* 제이쿼리넣기 */
import $ from "jquery";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";


import "./swiperNews.css";

// import required modules
import { Navigation } from "swiper";
// 데이터 가져오기
import news_data from "../data/news";
import { Link } from "react-router-dom";

export default function SwiperNews(props) {
    // 데이터 셋팅
    const ndt = news_data;
    console.log(ndt);

    return (
        <>
            <Swiper
                // slidesPerView={2}
                spaceBetween={20}
                navigation={true}
                modules={[Navigation]}
                // 스와이퍼 사이즈별 슬라이드수 변경!
                breakpoints={{
                    200: {
                        slidesPerView: 2,
                    },
                    700: {
                        slidesPerView: 3,
                    },
                    1000: {
                        slidesPerView: 5,
                    },
                    1200: {
                        slidesPerView: 7,
                    },
                }}
                className="mySwiper">
                {ndt.map((v, i) => (
                    <SwiperSlide key={i}>
                        <Link to="/det" state={{
                            newname:v.newname,
                            newdate:v.newdate,
                            newdesc:v.newdesc,
                            }}>
                            <section className="swinbx">
                                {/* 캐릭터 이미지영역 */}
                                <div className="catimg">
                                    <img src={v.newsrc} alt={v.newname} />

                                </div>
                                {/* 동영상타이틀영역 */}
                                <div className="cattit">
                                    <h3>{v.newname}</h3>
                                </div>
                            </section>
                        </Link>
                        
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}