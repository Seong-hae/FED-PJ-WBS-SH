// 메인 레이아웃 컴포넌트
import Logo from "./Logo";
import "./css/layout.css";
import { Link, Outlet } from "react-router-dom";
import { gnb_data, foot_up, foot_down } from "./data/common";
import $ from "jquery";

import { useState } from "react";
import ScrollTop from "./common/ScrollTop";
/**************************************************************
    [ 리액트 라우터와 연결하여 사용되는 라우터 컴포넌트 ]
    <Link to ="/경로명"></Link>
    -> to속성의 경로는 <Route path="/경로명"> 과 일치함!

    2. <Outlet />
    -> 라우터 연결 컴포넌트 출력자리 컴포넌트
**************************************************************/




const Layout = () => {

    // 자식컴포넌트 값 전달 테스트 함수
    const callMe = (x) => {
        console.log("누구?",x);
    }; ////////// callMe /////////////

    // 로그인 상태  Hook변수 : 로컬쓰 "minfo" 초기할당!
    const [logSts,setLogSts] = useState(localStorage.getItem("minfo"));
    // 로그인 환영메시지 Hook변수
    const [logMsg,setLogMsg] = useState("");
    // 로그인 환영메시지 스타일
    const logstyle = {
        // position:"absolute",
        // left:"50%",
        // transform:"translateX(-50%)"
        width:"100%",
        textAlign: "center",
        height: "20px",
        paddingBottom:  "10px",
        fontSize: "12px",
        fontWeight: "800",
        color: "#009bfa"


    }; //////// logstyle ///////////

    // 로그인 셋팅 함수 //////////
    // -> ScrollTop.js 의 useEffect 함수구역에서 호출!
    const setLogin = () => {
        // 1. 로그인 Hook변수 업데이트하기
        setLogSts(localStorage.getItem("minfo"));

        // 2. 로컬쓰값이 null이 아니면 메시지 뿌리기
        if(localStorage.getItem("minfo")){
            // 메시지 셋팅하기 : 객체안의 "unm"속성이 사용자이름!
            setLogMsg(
            JSON.parse(localStorage.getItem("minfo"))["unm"] + "님, 롯데에 오신 것을 환영합니다!");
        } ////////////// if ///////////////


    }; ///////// setLogin ////////////

    // 로그아웃 함수 ////////////////////////
    // -> LOGOUT 버튼에서 호출함!
    const logout = () => {

        // 1. 로컬쓰 "minfo" 삭제하기
        localStorage.removeItem("minfo");

        // 2. 로그인상태 Hook 변수 업데이트하기
        setLogSts(null);
        console.log("로그아웃됨!",logSts);

    }; ////////////////////// logout ///////////////


    // 헤더영역 햄버거 버튼 _______________________________________________
    function loadFn() {
        $(()=>{
    
            /***************************************************
                    HEADER 영역 - 메뉴 보이기/숨기기
                ***************************************************/
                // 햄버거버튼요소
                const viewBtn = document.querySelector(".ham");
                const closeBtn = document.querySelector(".close");
                // console.log("버튼있니?",viewBtn);
    
                // 이벤트 설정하기 //////
                viewBtn.onclick = menuView;
                function menuView(){
                    // 1. 호출확인
                    console.log("나야나!");
                    
                    // 2. 대상선정 : .momenu
                    const menuBox = document.querySelector(".momenu");
                    
                    // 3. 변경내용 : 화면에 보이기
                    menuBox.style.top = "75px";
                    
                    
                } /////////////////// menuView 함수 ///////////////
    
                // 이벤트 설정하기 //////
                closeBtn.onclick = menuClose;
                function menuClose(){
                    // 1. 호출확인
                    console.log("나야나!");
                    
                    // 2. 대상선정 : .momenu
                    const menuBox = document.querySelector(".momenu");
                    
                    // 3. 변경내용 : 화면에 보이기
                    menuBox.style.top = "-500px";
                    
                } /////////////////// menuView 함수 ///////////////
    
    
    
        });
    
    
    } ////////////////loadFn ///////////////////////////////////

    return(
        <>
            {/* 라우터 갱신될때 스크롤 상단이동 모듈작동함!
            + 로그인셋팅함수 호출전달하기! 자식에게 setLogin함수전달 */}
            <ScrollTop sfn={setLogin} />

            {/* 1. 상단영역 */}
            <header className="top">

                {/* 로그인 환영메시지 : 조건-logSts값이 null이 아니면 */}
                {
                    logSts !== null &&
                    <div className="logmsg" style={logstyle}>
                        {logMsg}
                    </div>
                }

                {/* PC버전 - 네비게이션 파트 */}
                <nav className="pcmenu">

                    <Link to="/">
                        <Logo gb="top" tt={callMe} />
                    </Link>

                    <ul className="menu_list">

                        {gnb_data.map((v, i) => (
                            <li key={i}>
                                <Link to={v.link}>{v.txt}</Link>
                            </li>
                        ))}
                    </ul>

                    <ul className="menu_login">
                        {
                            /* 회원가입, 로그인은 로그인아닌 상태일때만 */
                            logSts === null &&
                            <>
                                <li>
                                    <Link to="/mem">Join Us</Link>
                                </li>
                                <li>
                                    <Link to="/login">LOGIN</Link>
                                </li>
                            </>
                        }

                        {
                            /* 로그아웃버튼은 로그인상태 일때만 */
                            logSts !== null &&
                            <li>
                                <a href="#" onClick={logout}>
                                    LOGOUT
                                </a>
                            </li>
                        }
                    </ul>
                    {/* <!-- 모바일 햄버거버튼 --> */}
                    <div className="ham">
                        <div className="ham_top"></div>
                        <div className="ham_bottom"></div>
                    </div>
                </nav>

                {/* 모바일버전 - 네비게이션 파트 */}
                <nav className="momenu">
        
                    <button className="close">
                        <div className="close_top"></div>
                        <div className="close_bottom"></div>
                    </button>
                    <div className="momenubox">
                        <ul className="momenu_list">
                            {gnb_data.map((v, i) => (
                                <li key={i}>
                                    <Link to={v.link}>{v.txt}</Link>
                                </li>
                            ))}
                        </ul>
                        <ul className="momenu_login">
                            {
                                /* 회원가입, 로그인은 로그인아닌 상태일때만 */
                                logSts === null &&
                                <>
                                    <li>
                                        <Link to="/mem">Join Us</Link>
                                    </li>
                                    <li>
                                        <Link to="/login">LOGIN</Link>
                                    </li>
                                </>
                            }

                            {
                                /* 로그아웃버튼은 로그인상태 일때만 */
                                logSts !== null &&
                                <li>
                                    <a href="#" onClick={logout}>
                                        LOGOUT
                                    </a>
                                </li>
                            }
                        </ul>
                    </div>
                </nav>

            </header>
            {loadFn()}


            {/* 2. 메인영역 */}
            <main className="cont">
                {/* 출력파트 : 각 페이지의 컴포넌트가 출력됨 */}
                <Outlet />
            </main>


            {/* 3.하단영역 */}
            <footer className="info">

                <Link to="/main">
                    <Logo gb="bottom" tt={callMe} />
                </Link>

              <ul className="foot_up">
                {foot_up.map((v, i) => (
                    <li key={i}>
                        <a href={v.link} target="_blank">
                            {v.txt.toUpperCase()}
                        </a>
                    </li>
                ))}
              </ul>

              <ul className="foot_down">
                {foot_down.map((v, i) => (
                    <li key={i}>
                        <a href={v.link} target="_blank">
                            <img src={v.src} alt={v.txt} />
                        </a>
                    </li>
                ))}
              </ul>

            </footer>
        </>
    );
}; ///////////////////// Layout 컴포넌트 //////////////

// 내보내기 
export default Layout;