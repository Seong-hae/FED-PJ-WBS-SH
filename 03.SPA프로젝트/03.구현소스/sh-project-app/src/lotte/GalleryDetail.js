// 쇼핑뉴스 상세페이지 컴포넌트 - NewsDetail.js

import { useLocation } from "react-router-dom";
import "./css/gallerydetail.css";
// 데이터 가져오기
import gallery_data from "./data/gallery";
import { Link } from "react-router-dom";

// 라우터 파라미터값 받아서 데이터 처리!

function GalleryDetail(props) {

    // 라우터 전달값을 받기위한 useLocation 생성하기!
    const loc = useLocation();
    // 보내 속성명을 변수에 할당하기
    // state.속성명 : 내가 라우터를 통해 보낸 속성값 받기


    // 1. 갤러리 전시 사진
    const galsrc = loc.state.galsrc;
    // 2. 갤러리 전시 제목
    const galname = loc.state.galname;
    // 3. 갤러리 전시 기간
    const galperiod = loc.state.galperiod;
    // 4. 갤러리 전시 시간
    const galdate = loc.state.galdate;
    // 5. 갤러리 전시 행사장
    const galstore = loc.state.galstore;
    // 6. 갤러리 전시 작가
    const galauthor = loc.state.galauthor;

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
                            {galname}
                        </h3>
                        <div className="store">{galstore}</div>
                        <div className="date">{galdate}</div>
                    </div>
                </div>
            </div>
        </>
    );
} //////////// GalleryDetail ////////////////

export default GalleryDetail;