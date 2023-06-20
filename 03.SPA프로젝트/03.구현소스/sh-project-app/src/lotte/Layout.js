// 메인 레이아웃 컴포넌트
import Logo from "./Logo";
import "./css/layout.css";
import { Link, Outlet } from "react-router-dom";

/**************************************************************
    [ 리액트 라우터와 연결하여 사용되는 라우터 컴포넌트 ]
    <Link to ="/경로명"></Link>
    -> to속성의 경로는 <Route path="/경로명"> 과 일치함!

    2. <Outlet />
    -> 라우터 연결 컴포넌트 출력자리 컴포넌
    
**************************************************************/
// svg 아이콘들 저작권자
{/* <a href="https://www.flaticon.com/kr/free-icons/" title="붙다 아이콘">붙다 아이콘  제작자: Freepik - Flaticon</a>
<a href="https://www.flaticon.com/kr/free-icons/" title="사용자 아이콘">사용자 아이콘  제작자: Freepik - Flaticon</a> */}




const Layout = () => {
    return(
        <>
            {/* 1. 상단영역 */}
            <header className="top">

                <Link to="/main">
                    <Logo gb="top" tt={callMe} />
                </Link>

                {/* 네비게이션 파트 */}
                <nav className="gnb">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/ct">CHARACTERS</Link>
                        </li>
                        <li>
                            <Link to="/co">COMICS</Link>
                        </li>
                        <li>
                            <Link to="/mv">MOVIES & TV</Link>
                        </li>
                        <li>
                            <Link to="/gm">GAMES</Link>
                        </li>
                        <li>
                            <Link to="/nw">NEWS</Link>
                        </li>
                        <li>
                            <Link to="/vd">VIDEO</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            {/* 2. 메인영역 */}
            <main className="cont">
                {/* 출력파트 : 각 페이지의 컴포넌트가 출력됨 */}
                <Outlet />
            </main>
            {/* 3.하단영역 */}
            <footer className="info">
              <h1><img src="./images/svg/logo.svg" alt="logo" /></h1>

              <ul className="foot_up">
                <li>자주하는질문</li>
                <li>온라인상담실</li>
                <li>상담실안내</li>
                <li>분실물안내</li>
                <li>가상계좌</li>
                <li>공지사항</li>
              </ul>

              <ul className="foot_down">
                <li>자주하는질문</li>
                <li>온라인상담실</li>
                <li>상담실안내</li>
                <li>분실물안내</li>
                <li>가상계좌</li>
                <li>공지사항</li>
              </ul>
            </footer>
        </>
    );
}; ///////////////////// Layout 컴포넌트 //////////////

// 내보내기 
export default Layout;