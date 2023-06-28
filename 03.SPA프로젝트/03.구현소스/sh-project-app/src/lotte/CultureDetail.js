// 쇼핑뉴스 상세페이지 컴포넌트 - NewsDetail.js

import { useLocation } from "react-router-dom";
import "./css/culturedetail.css";
// 데이터 가져오기
import culture_data from "./data/culture";
import { Link } from "react-router-dom";

// 라우터 파라미터값 받아서 데이터 처리!

function CultureDetail(props) {

    // 라우터 전달값을 받기위한 useLocation 생성하기!
    const loc = useLocation();
    // 보내 속성명을 변수에 할당하기
    // state.속성명 : 내가 라우터를 통해 보낸 속성값 받기


    // 1. 문화센터 사진
    const culsrc = loc.state.culsrc;
    // 2. 문화센터 제목
    const culname = loc.state.culname;
    // 3. 문화센터 기간
    const culperiod = loc.state.culperiod;
    // 4. 문화센터 시간
    const culdate = loc.state.culdate;
    // 5. 문화센터 행사장
    const culstore = loc.state.culstore;
    // 6. 문화센터 작가
    const culauthor = loc.state.culauthor;
    // 7. 문화센터 가격
    const culprice = loc.state.culprice;
    // 8. 문화센터 작가
    const culsrc2 = loc.state.culsrc2;
    // 9. 문화센터 설명
    const culpro = loc.state.culpro;

    return (
        <>
            {/* 상세정보 박스 */}
            <div className="cul_detail subpage">

                <h2 className="cultit">
                    #Culture Now
                    <span>지금 새로운 소식이 궁금하다면?</span>
                </h2>

                <div className="descbx">
                    <div className="desc_txt">
                        <h3 className="desc_tit">
                            {culname}
                        </h3>
                        <div className="desc_cont">
                            {culpro}</div>
                        <div className="desc_cont">
                            <span>기간 </span>
                            {culperiod}</div>
                        <div className="desc_cont">
                            <span>시간 </span>
                            {culdate}
                            </div>
                        <div className="desc_cont">
                            <span>장소 </span>
                            {culstore}
                            </div>
                        <div className="desc_cont">
                            <span>강사 </span>
                            {culauthor}
                            </div>
                        <div className="desc_cont">
                            <span>가격 </span>
                            {culprice}
                            </div>
                        
                    </div>
                    <div className="desc_img">
                        <img src={culsrc2} alt={culname} />
                    </div>
                </div>

                <Link to="/culture" >
                    <button className="before">All CONTENTS</button>
                </Link>
            </div>
        </>
    );
} //////////// CultureDetail ////////////////

export default CultureDetail;