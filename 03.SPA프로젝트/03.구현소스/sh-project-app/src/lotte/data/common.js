// 공통 데이터 - 상단,하단영역 : common.js

/* GNB메뉴 데이터구성하기 */
const gnb_data = [
    //    {
    //        txt:"Home",
    //        link:"/",
    //     },
    {
        txt: "쇼핑정보",
        link: "/news",
    },
    {
        txt: "갤러리",
        link: "/gallery",
    },
    {
        txt: "문화센터",
        link: "/culture",
    },
    {
        txt: "매거진",
        link: "/magazine",
    },
    // {
    //     txt: "고객서비스",
    //     link: "/service",
    // },
];


// 하단링크 데이터 셋업!
const foot_up = [
    {
        txt: "회사소개",
        link: "https://www.lotteshopping.com/pr/main",
    },
    {
        txt: "이용약관",
        link: "https://www.lotteshopping.com/etc/terms",
    },
    {
        txt: "인재채용",
        link: "https://job.lotteshopping.com/?_gl=1*qmhexn*_ga*NzU4MzcyMTU4LjE2ODczMjU5MTU.*_ga_G6CR7PPN8P*MTY4NzMzMTUwNC4yLjEuMTY4NzMzMzMwNC42MC4wLjA.",
    },
    {
        txt: "사이트맵",
        link: "https://www.lotteshopping.com/etc/sitemap",
    },
    {
        txt: "영상정보처리기기 운영 / 관리방침",
        link: "https://www.lotteshopping.com/etc/operate",
    },
    {
        txt: "개인정보처리방침",
        link: "https://www.lotteshopping.com/etc/personalinfo",
    },
    {
        txt: "윤리 핫라인",
        link: "https://ethics.lotteshopping.com/?_gl=1*1sdvojb*_ga*NzU4MzcyMTU4LjE2ODczMjU5MTU.*_ga_G6CR7PPN8P*MTY4NzMzMTUwNC4yLjEuMTY4NzMzMzM3NS42MC4wLjA.",
    },
];


// 하단링크 데이터 셋업!
const foot_down = [
    {
        txt: "인스타",
        link: "https://www.instagram.com/lotteshopping/",
        src: "./images/svg/instagram-20x20-white.svg",
    },
    {
        txt: "유튜브",
        link: "https://www.youtube.com/@lotteshopping",
        src: "./images/svg/youtube-20x20-white.svg",
    },
    {
        txt: "페이스북",
        link: "https://www.facebook.com/LOTTEshopping",
        src: "./images/svg/facebook-20x20-white.svg",
    },
    {
        txt: "블로그",
        link: "https://blog.naver.com/the_shoppers",
        src: "./images/svg/blog-20x20-white.svg",
    },
];





export { gnb_data, foot_up, foot_down };