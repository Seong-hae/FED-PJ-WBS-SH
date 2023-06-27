// 롯데백화점 매거진 페이지 컴포넌트
import React, { useEffect } from "react";
import "./css/magazine.css";
import $ from "jquery";

// 제이쿼리 로드구역 함수 /////////
function jqFn() {
    const mv = $("#mv");
    const tBar = $(".Bar");

    mv.on("timeupdate", () => {
        // 1. 비디오 현재시간 가져오기 : currentTime속성(비디오현재시간)
        let ctime = mv[0].currentTime;
        // console.log("현재시간:",ctime);

        // 2. 비디오 전체재생시간 : duration(전체진행시간)
        let ftime = mv[0].duration;
        // console.log("전체시간:",ftime);

        // 3. 진행바 변경하기
        // 퍼센트 진행율 : 현재시간 / 전체시간 * 100
        // 현재시간이 0일 경우 전체시간이 안나옴(if문으로 막기)
        if (ftime) {
            let percent = (ctime / ftime) * 100;
            console.log("진행율:", percent.toFixed(2));
            // 소수점변수.toFixed(자릿수) -> 특정자릿수까지만 소수점표시!

            // 4. 진행바의 width를 %값으로 변경!
            tBar.css({
                width: percent.toFixed(2) + "%",
            }); ////////////// css //////////////
        } ////////////////// if ///////////////
    });

    $(".playbtn").click(function () {
        // paused속성 : 멈춤상태면 true
        let msts = mv[0].paused;
        // 재생/멈춤기능
        msts ? mv[0].play() : mv[0].pause();
        // 버튼 글자변경
        $(this).text(msts ? "PAUSE" : "PLAY");
    });
} ////////////// jQFn ///////////

const Magazine = () => {
    // 로딩후 호출!
    useEffect(jqFn, []);

    return (
        <>
            <section className="subpage magazine_sec">
                <div className="videobox">
                    <video
                        src="./images/magazine/magazine_video.mp4"
                        width="300"
                        loop
                        autoPlay
                        muted
                        id="mv"></video>

                    <div className="vbx_text">
                        <h2>
                            <span>DEAR MY PLANET</span>
                            지구와 나를 위한 선택
                        </h2>

                        {/* 멈춤버튼 */}
                        <button className="playbtn">PAUSE</button>
                    </div>

                    {/* 영상진행상황 */}
                    <div className="playbar">
                        <div className="Bar"></div>
                    </div>
                </div>
            </section>
        </>
    );
}; /////////////////// Magazine /////////////////

export default Magazine;
