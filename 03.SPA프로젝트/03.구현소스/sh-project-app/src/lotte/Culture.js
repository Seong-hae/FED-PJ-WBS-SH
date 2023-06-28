// 롯데백화점 문화센터 페이지 컴포넌트
import React from "react";
import "./css/culture.css";
import CultureList from "./modules/CultureList";
import CultureSwipe from "./modules/CultureSwipe";
import NewsSwipe from "./modules/NewsSwipe";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { culture_product_data } from "./data/culture";
/* 제이쿼리넣기 */
import $ from "jquery";

// 제이쿼리 로드구역 함수 /////////
function jqFn() {


    /******************* 배경화면 색깔 변경함수 *******************/
    $(window).on("scroll",function(){
        console.log("라랄")

        // console.log('있니?',$('.culbox').is('.culturebox'))
        let windowH = $(window).scrollTop();
        let cultxt = $(".cul_txtbx");
        if(!document.querySelector(".cul_recom")){ 
            $("body").css({backgroundColor:"transparent"});
            return;
        }
        let culbox = $(".cul_recom").offset().top
        let culboxH = $(".cul_recom").innerHeight()/3
        let culPlus = culbox + culboxH

        if( windowH >= culPlus ){
            console.log("여기니?")
            $("body").css({
                backgroundColor : "#000",
                transition: ".5s"
            })

            cultxt.css({
                color : "#fff"
            })
        }
        else{
            console.log("여기니?")
            $("body").css({
                backgroundColor : "#fff",
                transition: ".3s"
            })

            cultxt.css({
                color : "#000"
            })
        }
        
        console.log(windowH,culPlus,"라랄")
    }) ///////////////////// scroll /////////////////


}



const Culture = () => {

    useEffect(jqFn,[]);


    return(
        <>
            <section className="subpage culture_sec">

                {/* 1. 문화센터 메인 이미지 */}
                <section className="cul_main">
                    <div className="imgbx">
                        <img src="./images/culture/culture_main.jpg" alt="cultureimage"></img>
                    </div>

                    <div className="txtbx">
                        <h2>
                            Premium<br />
                            Lifestyle Curator
                        </h2>
                    </div>
                </section>

                {/* 2. 문화센터 추천강좌 페이지 */}
                <section className="cul_recom">

                    <h2>#Culture Now
                        <span>엄선된 강좌를 소개합니다</span>
                    </h2>

                    <div className="culbox_bottom">
                        <CultureList/>
                    </div>
                </section>

                {/* 3. 문화센터 신규강좌 페이지 */}
                <section className="cul_new">

                    <h2># 신규강좌
                        <span>새롭게 개설된 강좌를 지금 확인해보세요</span>
                    </h2>

                    <CultureSwipe />

                </section>



            </section>
        </>
    );

}; /////////////////// Culture /////////////////

export default Culture;