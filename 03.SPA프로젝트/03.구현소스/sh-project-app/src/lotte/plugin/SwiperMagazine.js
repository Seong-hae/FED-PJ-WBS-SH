
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
/* 제이쿼리넣기 */
import $ from "jquery";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";


import "./SwiperMagazine.css";

// import required modules
import { Autoplay } from "swiper";
// 데이터 가져오기
import { magazine_data } from "../data/magazine";
import { Link } from "react-router-dom";



export default function SwiperNewsprops() {

    // 데이터 셋팅
    const mdt = magazine_data;
    console.log(mdt);

    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

    return (
        <>
            <Swiper
                // slidesPerView={2}
                // spaceBetween={20}
                // navigation={true}
                loop={true}
                // autoplay={{
                //     delay: 2500,
                //     disableOnInteraction: false,
                // }}
                modules={[Autoplay]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                // 스와이퍼 사이즈별 슬라이드수 변경!
                breakpoints={{
                    200: {
                        slidesPerView: 1,
                    },
                    // 700: {
                    //     slidesPerView: 2,
                    // },
                    // 1000: {
                    //     slidesPerView: 3,
                    // },
                    // 1200: {
                    //     slidesPerView: 4,
                    // },
                }}
                className="mySwiper magazine_slide">
                {mdt.map((v, i) => (
                    <SwiperSlide key={i}>
                        <Link to="/magazinedetail" 
                        state={{
                            magsrc:v.magsrc,
                            magsrc2:v.magsrc2,
                            magname:v.magname,
                            magpro:v.magpro,
                            mageditor:v.mageditor,
                            magcont:v.magcont,
                            }}>
                            <section className="magbx">
                                {/* 매거진 이미지영역 */}
                                <div className="magimg">
                                    <img src={v.magsrc} alt={v.magname.split('^')[1]}/>
                                </div>
                                {/* 매거진 텍스트영역 */}
                                <div className="magtxt">
                                    <h3>
                                        <span>{v.magname.split('^')[0]}</span>
                                        {v.magname.split('^')[1]}
                                    </h3>
                                    <button className="read">Read more</button>
                                </div>
                            </section>
                        </Link>
                        
                    </SwiperSlide>
                ))}
                <SwiperSlide>
                    <Link to="/magazine">
                        <div className="morebox">
                            랄라랄
                        </div>
                    </Link>
                </SwiperSlide>

                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>
        </>
    );
}