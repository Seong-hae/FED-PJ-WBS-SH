// 롯데백화점 매거진 페이지 컴포넌트
import React, { useEffect } from "react";
import "./css/magazine.css";
import $ from "jquery";
import { ParallaxProvider } from 'react-scroll-parallax';
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { magazine_art_data} from "./data/magazine";
import MagazineParallax from "./modules/Parallax_magazine";
import { Parallax } from 'react-scroll-parallax';


// 제이쿼리 로드구역 함수 /////////
function jqFn() {
    const mv = $(".mv");
    const tBar0 = $(".Bar0");
    const tBar1 = $(".Bar1");
    const playbtn0 = $(".playbtn");
    const playbtn1 = $(".playbtn1");

    mv.on("timeupdate", () => {
        // 1. 비디오 현재시간 가져오기 : currentTime속성(비디오현재시간)
        let ctime0 = mv[0].currentTime;
        let ctime1 = mv[1].currentTime;
        // console.log("현재시간:",ctime);

        // 2. 비디오 전체재생시간 : duration(전체진행시간)
        let ftime0 = mv[0].duration;
        let ftime1 = mv[1].duration;
        // console.log("전체시간:",ftime);

        // 3. 진행바 변경하기
        // 퍼센트 진행율 : 현재시간 / 전체시간 * 100
        // 현재시간이 0일 경우 전체시간이 안나옴(if문으로 막기)
        if (ftime0) {
            let percent = (ctime0 / ftime0) * 100;
            console.log("진행율:", percent.toFixed(2));
            // 소수점변수.toFixed(자릿수) -> 특정자릿수까지만 소수점표시!

            // 4. 진행바의 width를 %값으로 변경!
            tBar0.css({
                width: percent.toFixed(2) + "%",
            }); ////////////// css //////////////
        } ////////////////// if ///////////////
        if (ftime1) {
            let percent = (ctime1 / ftime1) * 100;
            console.log("진행율:", percent.toFixed(2));
            // 소수점변수.toFixed(자릿수) -> 특정자릿수까지만 소수점표시!

            // 4. 진행바의 width를 %값으로 변경!
            tBar1.css({
                width: percent.toFixed(2) + "%",
            }); ////////////// css //////////////
        } ////////////////// if ///////////////
    });

        playbtn0.click(function () {
        // paused속성 : 멈춤상태면 true
        let msts0 = mv[0].paused;
        // 재생/멈춤기능
        msts0 ? mv[0].play() : mv[0].pause();
        // 버튼 글자변경
        $(this).text(msts0 ? "PAUSE" : "PLAY");
        });

        playbtn1.click(function () {
        // paused속성 : 멈춤상태면 true
        let msts1 = mv[1].paused;
        // 재생/멈춤기능
        msts1 ? mv[1].play() : mv[1].pause();
        // 버튼 글자변경
        $(this).text(msts1 ? "PAUSE" : "PLAY");
        });
} ////////////// jQFn ///////////

const Magazine = () => {
    // 로딩후 호출!
    useEffect(jqFn, []);

    const martdt = magazine_art_data;

    return (
        <>
            <section className="subpage magazine_sec">

                {/* 1. 비디오박스영역 */}
                <section className="videobox">
                    <video
                        src="./images/magazine/magazine_video.mp4"
                        width="300"
                        loop
                        autoPlay
                        muted
                        className="mv">
                    </video>

                    <div className="vbx_text">
                        <h2>
                            <span>DEAR MY PLANET</span>
                            지구와 나를 위한 선택
                        </h2>
                    </div>

                    <div className="vbx_control">
                        {/* 멈춤버튼 */}
                        <button className="playbtn playbtn0">PAUSE</button>
                    
                        {/* 영상진행상황 */}
                        <div className="playbar">
                            <div className="Bar Bar0"></div>
                        </div>
                    </div>
                </section>


                {/* 2. 매거진 리스트 박스영역 */}
                <section className="mlistbox">

                    <div className="mbox_left mbx">
                        <ParallaxProvider>
                        <Parallax speed={-10}>
                        <div className="l_imgbx">
                            <img src="./images/magazine/magazine_left.jpg" alt="magazine"></img>
                        </div>

                        <div className="l_txtbx">

                            <h2>
                                <span>DEAR MY PLANET</span>
                                지구와 나를 위한 선택
                            </h2>
                        </div>
                        </Parallax>
                        </ParallaxProvider>


                    </div>

                    <div className="mbox_right mbx">
                        <ParallaxProvider>
                            <MagazineParallax />
                        </ParallaxProvider>
                    </div>


                </section>


                {/* 3. 매거진 야채영상 박스영역 */}
                <section className="videobox">
                    <video
                        src="./images/magazine/magazine_video2.mp4"
                        width="300"
                        loop
                        autoPlay
                        muted
                        className="mv">
                    </video>

                    <div className="vbx_text vtxt2">
                        <h2>
                            <span>F&B</span>
                            Veggie Lovers
                        </h2>

                        <p>채소를 사랑하는 사람들의 채식 요리</p>
                    </div>

                    <div className="vbx_control">
                        {/* 멈춤버튼 */}
                        <button className="playbtn playbtn1">PAUSE</button>
                    
                        {/* 영상진행상황 */}
                        <div className="playbar">
                            <div className="Bar Bar1"></div>
                        </div>
                    </div>
                </section>


                {/* 4. 매거진 아트 박스영역 */}
                <section className="martbox">

                {
                    martdt.map((v,i)=>
                    <Link to="/magazinedetail" key={i}
                    state={{
                            magname:v.magname,
                            magsrc:v.magsrc,
                            magsrc2:v.magsrc2,
                            magpro:v.magpro,
                            mageditor:v.mageditor,
                            magcont:v.magcont,
                        }}>
                        <div className="artbx">

                            <div className="imgbx">
                                <img src={v.magsrc} alt={v.magname} />
                            </div>

                            <div className="txtbx">

                                <h2>
                                    <span>{v.magname.split('^')[0]}</span>
                                    {v.magname.split('^')[1]}
                                </h2>

                                <p>{v.magpro}</p>
                            </div>

                        </div>
                    </Link>
                    )}


                </section>
                



            </section>
        </>
    );
}; /////////////////// Magazine /////////////////

export default Magazine;
