// 매거진 아트영역 상세페이지 컴포넌트 - MagazineArtDetail.js

import { useLocation } from "react-router-dom";
import "./css/magazinedetail.css";
// 데이터 가져오기
import { magazine_art_data } from "./data/magazine";
import { Link } from "react-router-dom";

// 라우터 파라미터값 받아서 데이터 처리!

function MagazineArtDetail(props) {

    // 라우터 전달값을 받기위한 useLocation 생성하기!
    const loc = useLocation();
    // 보내 속성명을 변수에 할당하기
    // state.속성명 : 내가 라우터를 통해 보낸 속성값 받기

    // 1. 매거진 제목
    let magname = loc.state.magname
    magname = magname.split("^");
    // 2. 매거진 사진
    const magsrc = loc.state.magsrc
    // 3. 매거진 상세사진
    const magsrc2 = loc.state.magsrc2
    // 4. 매거진 부제목
    const magpro = loc.state.magpro
    // 4. 매거진 에디터
    const mageditor = loc.state.mageditor
    // 4. 매거진 내용
    const magcont = loc.state.magcont

    return (
        <>
            {/* 상세정보 박스 */}
            <div className="mag_detail subpage">

                <h2 className="magtit">
                    #Magazine Now
                    <span>지금 새로운 소식이 궁금하다면?</span>
                </h2>

                <div className="descbx">
                    <div className="desc_txt">
                        <h3>
                            <span>{magname[0]}</span>
                            {magname[1]}
                        </h3>
                        <div className="mag_subtit">{magpro}</div>
                        <div className="mag_editor"><span>Editor</span> {mageditor}</div>
                    </div>
                    <div className="desc_img">
                        <img src={magsrc2} alt={magname[1]}/>
                    </div>
                    <p>{magcont}</p>
                </div>

                <Link to="/magazine" >
                    <button className="before">All CONTENTS</button>
                </Link>
            </div>
        </>
    );
} //////////// MagazineArtDetail ////////////////

export default MagazineArtDetail;