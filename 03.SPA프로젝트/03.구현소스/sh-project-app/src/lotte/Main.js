// 롯데 메인 페이지 컴포넌트
import NewsSwipe from "./modules/NewsSwipe";
import MagazineSwipe from "./modules/MagazineSwipe";
import Gallery from "./modules/Parallax";
import CultureList from "./modules/CultureList";
import  insta_data  from "./data/insta";
import { ParallaxProvider } from 'react-scroll-parallax';
import "./css/main.css";
import { Link } from "react-router-dom";
import $ from "jquery";
import { useEffect } from "react";




// 제이쿼리 로드구역 함수 /////////
function jqFn() {


    /******************* 배경화면 색깔 변경함수 *******************/
    $(window).on("scroll",function(){
        console.log("라랄")

        // console.log('있니?',$('.culbox').is('.culturebox'))
        let windowH = $(window).scrollTop();
        let cultxt = $(".cul_txtbx");
        if(!document.querySelector(".culbox")){ 
            $("body").css({backgroundColor:"transparent"});
            return;
        }
        let culbox = $(".culbox").offset().top
        let culboxH = $(".culbox").innerHeight()/3
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

    let stg = $(".slidelist");
    

    // const rotateSld = () => {
    //     stg.eq(sldnum).addClass("on");
    //     setTimeout(()=>{
    //         stg.eq(sldnum?0:1).addClass("on");
    //         setTimeout(()=>stg.eq(sldnum).removeClass("on")
    //         ,1000);
            
    //     },
    //     4000);

    //     setTimeout(()=>sldnum=sldnum?0:1,
    //     6000);
        


    // }; ///////// rotateSld ////////////

    // rotateSld();

    // setInterval(rotateSld,6100)
let sldnum = 1;
let znum =1
sldnum=sldnum?0:1
function t1(){
    znum++
    // setTimeout(()=>{
        stg.eq(sldnum).addClass("on")
    // },2000)

    setTimeout(() => {
        sldnum=sldnum?0:1
        stg.eq(sldnum).removeClass("on")
    },3800);

    setTimeout(()=>{
        stg.eq(sldnum).addClass("on")
    },5600);

    setTimeout(() => {
        sldnum=sldnum?0:1
        stg.eq(sldnum).removeClass("on")
    },6700);

    clearInterval(t1)
}

setInterval(t1,6700)


} ////////////// jQFn ///////////


const Main = () => {

    useEffect(jqFn,[]);

    return (
        <>
            {/* 1. 메인 인트로 슬라이드 */}
            <section className="main_intro">
                <ul className="slidebox">
                    <li className="slidelist">
                        <span className="sl_bottom"><img src="./images/main_slide1.jpg" alt="mainimg"  /></span>
                        <span className="sl_top"><img src="./images/main_slide1.jpg" alt="mainimg" /></span>
                        <h2 className="main_tit">Dear, my planet</h2>
                    </li>
                    <li className="slidelist">
                        <span className="sl_bottom"><img src="./images/main_slide2.jpg" alt="mainimg"/></span>
                        <span className="sl_top"><img src="./images/main_slide2.jpg" alt="mainimg" /></span>
                        <h2 className="main_tit">Surprice Week</h2>
                    </li>
                </ul>
            </section>

            {/* 2. 쇼핑뉴스 스와이프 모듈 */}
            <NewsSwipe 
            tit="What's On?" />

            {/* 3. 쇼핑 핫키워드 영역 */}
            <section className="hotbox">
                <div className="hot_tit">
                    <h2>&#35;Hot keyword</h2>
                    <p>지금 롯데백화점에서 가장 인기있는 키워드를 만나보세요</p>
                </div>

                <ul className="hot_cont">
                    <li>
                        청량한 여름의 시작 &nbsp;
                        <span className="iconbox">
                            <img src="./images/keyword1.png" alt="얼음" />
                            <img src="./images/keyword2.png" alt="에어컨" />
                        </span>
                        <span className="hashtag">&#35;계절가전</span>
                        <span className="hashtag">&#35;여름침구</span>
                    </li>
                    <li>
                        낭만적인 Summer Vacation &nbsp;
                            <span className="hashtag">&#35;바캉스아이템</span>
                            <span className="hashtag">&#35;휴가룩</span>
                            <span className="iconbox">
                                <img src="./images/keyword3.png" alt="파라솔" />
                                <img src="./images/keyword4.png" alt="원피스" />
                            </span>
                    </li>
                    <li>
                        햇살보다 반짝이는 Styling &nbsp;
                        <span className="iconbox">
                            <img src="./images/keyword5.png" alt="태양" />
                            <img src="./images/keyword6.png" alt="화장품" />
                        </span>
                        <span className="hashtag">&#35;서머코스메틱</span>
                        <span className="hashtag">&#35;스몰럭셔리</span>
                    </li>
                </ul>
            </section>


            {/* 4. 쇼핑 갤러리 영역 */}
            <section className="galbox">
                <h2 className="tit">Culture</h2>

                <ParallaxProvider>
                    <Gallery />
                </ParallaxProvider>
            </section>


            {/* 5. 문화센터 영역 */}
            <section className="culbox">
                <div className="culbox_top">
                    <h2 className="tit">Lifestyle LAB</h2>
                    <Link to="/culture">
                        <div className="morebtn">ALL CONTENTS</div>
                    </Link>  
                </div>

                <div className="culbox_bottom">
                    <CultureList/>
                </div>

            </section>


            {/* 6. 매거진 영역 */}
            <section className="magazinebox">
                <h2 className="tit">Magazine</h2>

                <div className="mgslide_box">
                    <MagazineSwipe />
                </div>
            </section>



            {/* 7. 롯데인스타 영역 */}
            <section className="instabox">
                <h2 className="tit">
                    <span>Follow Instagaram</span>
                    @Lotteshopping
                </h2>

                <Link to="https://www.instagram.com/lotteshopping/" className="insban">
                    <ul className="insban_top insbanbox">
                        {insta_data.map((v, i) => (
                            <li key={i}><img src={v.inssrc} alt="instaimage" /></li>
                        ))}
                        {insta_data.map((v, i) => (
                            <li key={i}><img src={v.inssrc} alt="instaimage" /></li>
                        ))}
                    </ul>
                    <ul className="insban_bottom insbanbox">
                        {insta_data.map((v, i) => (
                            <li key={i}><img src={v.inssrc} alt="instaimage" /></li>
                        ))}
                        {insta_data.map((v, i) => (
                            <li key={i}><img src={v.inssrc} alt="instaimage" /></li>
                        ))}
                    </ul>
                </Link>


            </section>


            {/* {jqFn()} */}
        </>
    );
}; /////////// Main //////////////

export default Main;