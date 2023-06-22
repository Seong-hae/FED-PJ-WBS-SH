
import { useLocation } from "react-router-dom";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
/* 제이쿼리넣기 */
import $ from "jquery";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";


import "./SwiperNews.css";

// import required modules
import { Navigation } from "swiper";
// 데이터 가져오기
import news_data from "../data/news";
import { Link } from "react-router-dom";

export default function SwiperNews(props) {
    // 데이터 셋팅
    const ndt = news_data;
    console.log(ndt);

    // 라우터 전달값을 받기위한 useLocation 생성하기!
    const loc = useLocation();
    // 3. 캐릭터명세
    let newname = loc.state.newname;
    newname = newname.split("^");



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
                        slidesPerView: 1,
                    },
                    700: {
                        slidesPerView: 2,
                    },
                    1000: {
                        slidesPerView: 3,
                    },
                    1200: {
                        slidesPerView: 4,
                    },
                }}
                className="mySwiper">
                {ndt.map((v, i) => (
                    <SwiperSlide key={i}>
                        <Link to="/" state={{
                            newname:v.newname,
                            newdate:v.newdate,
                            newdesc:v.newdesc,
                            }}>
                            <section className="swinbx">
                                {/* 뉴스 이미지영역 */}
                                <div className="newsimg">
                                    <img src={v.newsrc} alt={v.newname} />
                                </div>
                                {/* 뉴스 텍스트영역 */}
                                {
                                    
                                        <div className="newstxt">
                                            <h3>
                                                <span>{v.newname.split('^')[0]}</span>
                                                {v.newname.split('^')[1]}
                                            </h3>
                                        </div>
                                    
                                }
                            </section>
                        </Link>
                        
                    </SwiperSlide>
                ))}
                <SwiperSlide>
                    고고고
                </SwiperSlide>
            </Swiper>
        </>
    );
}