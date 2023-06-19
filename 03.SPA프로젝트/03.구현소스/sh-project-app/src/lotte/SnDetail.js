// 쇼핑뉴스 상세페이지 컴포넌트 - SnDetail.js

import { useLocation } from "react-router-dom";

// 라우터 파라미터값 받아서 데이터 처리!

function SnDetail(props){
    const loc = useLocation();
    // 1. 쇼핑뉴스이름
    const newname = loc.state.newname;
    // 2. 캐릭터설명 - "^"문자로 잘라 배열 데이터로 변경!
    let newdesc = loc.state.cdesc;
    cdesc = cdesc.split('^');
    // 3. 캐릭터명세
    const facts = loc.state.facts;

    return(
        <>
            <h2>{newname}</h2>
            <div className="cdesc">
                {
                    cdesc.map(v=><p>{v}</p>)
                }
            </div>
            <div className="facts">
                <h3>CHARACTER FACTS</h3>
                {facts}
            </div>
        </>
    )
}; /////////////// SnDetail ///////////////

export default SnDetail; 