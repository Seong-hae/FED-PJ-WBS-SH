// 롯데 메인 페이지 컴포넌트
import NewsSwipe from "./modules/NewsSwipe";
import "./css/main.css";

const Main = () => {
    return (
        <>
            {/* 1. 메인 인트로 슬라이드 */}
            <section className="main_intro"></section>

            {/* 2. 쇼핑뉴스 스와이프 모듈 */}
            <NewsSwipe 
            tit="What's On?" />
        </>
    );
}; /////////// Main //////////////

export default Main;