// 쇼핑뉴스 상세페이지 컴포넌트 - NewsDetail.js

import { useLocation } from "react-router-dom";
import "./css/newsdetail.css";
// 데이터 가져오기
import news_data from "./data/news";
import { Link } from "react-router-dom";

// 라우터 파라미터값 받아서 데이터 처리!

function NewsDetail(props) {

    // 라우터 전달값을 받기위한 useLocation 생성하기!
    const loc = useLocation();
    // 보내 속성명을 변수에 할당하기
    // state.속성명 : 내가 라우터를 통해 보낸 속성값 받기

    // 1. 쇼핑뉴스 제목
    let newname = loc.state.newname
    newname = newname.split("^");
    // 2. 쇼핑뉴스 날짜
    const newdate = loc.state.newdate
    // 3. 쇼핑뉴스 상세사진
    const newdesc = loc.state.newdesc
    // 4. 쇼핑뉴스 행사장
    const newstore = loc.state.newstore

    return (
        <>
            {/* 상세정보 박스 */}
            <div className="news_detail subpage">

                <h2 className="shoptit">
                    #Shop Now
                    <span>지금 새로운 소식이 궁금하다면?</span>
                </h2>

                <div className="descbx">
                    <div className="desc_txt">
                        <h3>
                            <span>{newname[0]}</span>
                            {newname[1]}
                        </h3>
                        <div className="store">{newstore}</div>
                        <div className="date">{newdate}</div>
                    </div>
                    <div className="desc_img">
                        <img src={newdesc} alt={newname[1]}/>
                    </div>
                </div>
            </div>
        </>
    );
} //////////// NewsDetail ////////////////

export default NewsDetail;