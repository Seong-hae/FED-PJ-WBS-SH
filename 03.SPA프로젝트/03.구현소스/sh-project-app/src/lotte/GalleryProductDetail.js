// 쇼핑뉴스 상세페이지 컴포넌트 - NewsDetail.js

import { useLocation } from "react-router-dom";
import "./css/gallerydetail.css";
// 데이터 가져오기
import { gallery_product_data } from "./data/gallery";
import { Link } from "react-router-dom";

// 라우터 파라미터값 받아서 데이터 처리!

function GalleryProductDetail(props) {

    // 라우터 전달값을 받기위한 useLocation 생성하기!
    const loc = useLocation();
    // 보내 속성명을 변수에 할당하기
    // state.속성명 : 내가 라우터를 통해 보낸 속성값 받기


    // 1. 갤러리 상품 사진
    const gprosrc = loc.state.gprosrc;
    // 2. 갤러리 상품 제목
    const gproname = loc.state.gproname;
    // 3. 갤러리 상품 가격
    const gproprice = loc.state.gproprice;
    // 4. 갤러리 상품 작가
    const gproauthor = loc.state.gproauthor;
    // 5. 갤러리 상품 설명
    const gproexplanation = loc.state.gproexplanation;

    return (
        <>
            {/* 상세정보 박스 */}
            <div className="gal_detail subpage">

                <h2 className="galtit">
                    #Gallery Now
                    <span>지금 새로운 소식이 궁금하다면?</span>
                </h2>

                <div className="descbx">
                    <div className="desc_txt">
                        <h3 className="desc_tit">
                            {gproname}
                        </h3>
                        <div className="desc_cont">
                            <span>작가 </span>
                            {gproauthor}</div>
                        <div className="desc_cont">
                            <span>가격 </span>
                            {gproprice}
                            </div>
                        <div className="desc_cont">
                            {gproexplanation}
                            </div>
                    </div>
                    <div className="desc_img">
                        <img src={gprosrc} alt={gproname} />
                    </div>
                </div>

                <Link to="/gallery" >
                    <button className="before">All CONTENTS</button>
                </Link>
            </div>
        </>
    );
} //////////// GalleryProductDetail ////////////////

export default GalleryProductDetail;