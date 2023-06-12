// 메인 레이아웃 컴포넌트
import Logo from "./Logo";
import "./css/layout.css";
import { Link, Outlet } from "react-router-dom";



const Layout = () => {
    /* GNB메뉴 데이터구성하기 */
    const gnb_data = [
        {
            txt: "쇼핑정보",
            link: "/spinfo",
        },
        {
            txt: "갤러리",
            link: "/gal",
        },
        {
            txt: "문화센터",
            link: "/cc",
        },
        {
            txt: "매거진",
            link: "/ma",
        },
        {
            txt: "고객서비스",
            link: "/cs",
        },
    ];


    // 하단링크 데이터 셋업!
    const bmenu = [
        {
            txt: "Privacy Policy",
            link: "https://www.warnermediaprivacy.com/policycenter/b2c/WM/",
        },
        {
            txt: "Terms",
            link: "https://www.dcuniverseinfinite.com/terms?_gl=1*5nxhg2*_gcl_au*MTk3OTgxNzUwMi4xNjgzMTc3NDg3",
        },
        {
            txt: "Ad Choices",
            link: "https://www.warnermediaprivacy.com/policycenter/b2c/wm/",
        },
        {
            txt: "Accessibility",
            link: "https://policies.warnerbros.com/terms/en-us/#accessibility",
        },
        {
            txt: "Cookie Settings",
            link: "https://www.dc.com/#compliance-link",
        },
    ];

    return (
        <>
            
            {/* 1. 상단영역 */}
            <header>
                    <Link to="/">
                        <Logo gb="top" />
                    </Link>

                {/* 네비게이션 파트 */}
                <nav className="gnb">
                    <ul>
                        {gnb_data.map((v, i) => (
                            <li key={i}>
                                <Link to={v.link}>{v.txt}</Link>
                            </li>
                        ))}
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
                <ul>
                    <li>
                        <Logo gb="bottom" />
                    </li>
                    <li>
                        <ol className="bmenu">
                            {bmenu.map((v, i) => (
                                <li key={i}>
                                    <a href={v.link} target="_blank">
                                        {v.txt.toUpperCase()}
                                    </a>
                                </li>
                            ))}
                        </ol>
                    </li>
                    <li>© & ™ DC. ALL RIGHTS RESERVED</li>
                </ul>
            </footer>
        </>
    );
}; ////////// Layout 컴포넌트 ///////

// 내보내기
export default Layout;