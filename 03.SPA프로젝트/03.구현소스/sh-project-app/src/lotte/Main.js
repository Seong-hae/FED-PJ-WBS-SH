// 롯데 메인 페이지 컴포넌트
import NewsSwipe from "./modules/NewsSwipe";
import Gallery from "./modules/Parallax";
import CultureList from "./modules/CultureList";
import { ParallaxProvider } from 'react-scroll-parallax';
import "./css/main.css";
import { Link } from "react-router-dom";

const Main = () => {
    return (
        <>
            {/* 1. 메인 인트로 슬라이드 */}
            <section className="main_intro">
                <ul className="slidebox">
                    <li className="slidelist">
                        <img src="./images/main_slide1.jpg" alt="mainimg" className="sl_bottom" />
                        <img src="./images/main_slide1_top.jpg" alt="mainimg" className="sl_top"/>
                        <h2 className="main_tit">Dear, my planet</h2>
                    </li>
                    <li className="slidelist">
                        <img src="./images/main_slide2.jpg" alt="mainimg"className="sl_bottom"/>
                        <img src="./images/main_slide2_top.jpg" alt="mainimg" className="sl_top"/>
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



        </>
    );
}; /////////// Main //////////////

export default Main;