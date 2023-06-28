///  MagazineSwipe 모듈 - MagazineSwipe.js
import $ from "jquery";
import "../css/cultureswipe.css";
import SwiperCulture from "../plugin/SwiperCulture";

// 제이쿼리 로드구역 함수 /////////
function jqFn() {
    $(() => {}); //////// jQB ///////////
} ////////////// jQFn ///////////

function CultureSwipe(props) {
    // props.pg - 페이지별 데이터구분
    // propt.tit - 모듈타이틀
    return (
        <>

            {/* 1. 스와이퍼 컴포넌트 */}
            <SwiperCulture />
            

            {/* 빈루트를 만들고 JS로드함수포함 */}
            {jqFn()}
        </>
    );
}

export default CultureSwipe;