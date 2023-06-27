// 롯데백화점 매거진 페이지 컴포넌트
import React from "react";
import "./css/magazine.css";
import $ from "jquery";




// 제이쿼리 로드구역 함수 /////////
function jqFn() {

} ////////////// jQFn ///////////






const Magazine = () => {
    return(
        <>
            <section className="subpage magazine_sec">

                <div className="videobox">
                    <video src="./images/magazine/magazine_video.mp4" width="300" loop autoPlay muted id="mv">
                    </video>

                    <div className="vbx_text">

                        <h2>
                            <span>DEAR MY PLANET</span> 
                            지구와 나를 위한 선택
                        </h2>

                        {/* 멈춤버튼 */}
                        <button class="playbtn">
                            PAUSE
                        </button>

                        {/* 영상진행상황 */}
                        <div class="playbar">
                            <div class="Bar"></div>
                        </div>

                    </div>
                    

                    
                </div>


            </section>

        </>
    );

}; /////////////////// Magazine /////////////////

export default Magazine;