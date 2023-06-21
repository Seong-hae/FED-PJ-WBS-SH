// 로고 컴포넌트
import React from "react";

const Logo = (props) => {
    // props.gb : 상단,하단구분코드

    //객체형 스타일적용: 속성명이 틀리면 아예 출력되지 않는다!
    const mystyle = {
        top: {
            width: "170px"
        },
        bottom: {
            width: "170px"
        },
    };

    let istyle = {
        width: "100%",
        objectFit: "cover"
    };


    // 자식컴포넌트 처리용함수
    const nayana = (x) => {
        // 속성전달을 통한 부모함수 호출 및 값 전달!!
        props.tt(x);
    }; ////////////// nayana ///////////////

    return (
        <h1 style={mystyle[props.gb]} onClick={()=>nayana('나야나!')} className="logo">
            {/* <img src={"./images/svg/logo.svg"} style={{ width: istyle[props.gb] }} /> */}
            <img src={props.gb == "bottom" ? "./images/svg/logo-white.svg" : "./images/svg/logo.svg"} style={{ width: istyle[props.gb] }} />
        </h1>
    );
}; //////////// Logo ////////////////

export default Logo;