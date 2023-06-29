///  NewSwipe 모듈 - NewSwipe.js
import $ from "jquery";
import SwiperNews from "../plugin/SwiperNews";

// 제이쿼리 로드구역 함수 /////////
function jqFn() {
    $(() => {}); //////// jQB ///////////
} ////////////// jQFn ///////////

function NewsSwipe(props) {
    // props.pg - 페이지별 데이터구분
    // propt.tit - 모듈타이틀
    return (
        <>
            {/* 모듈코드 */}
            <section className="newswbox">
                {/* 1. 스와이퍼 컴포넌트 */}
                <SwiperNews />
                {/* . 모듈타이틀 */}
                    <h2 className="tit" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" >{props.tit}</h2>
            </section>

            {/* 빈루트를 만들고 JS로드함수포함 */}
            {jqFn()}
        </>
    );
}

export default NewsSwipe;