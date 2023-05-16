// 뷰라우터 인스턴스 설정파일 - router.js
import imData from "./tempData/mainArea.js";


// 라우터 템플릿 만들기
let MainCont = {
    template: imData.main,
};
let AboutCont = {
    template: imData.about,
};
let EditorialCont = {
    template: imData.editorial,
};

let CataloguesCont = {
    template: imData.catalogues,
};
let PressCont = {
    template: imData.press,
};
let ContactCont = {
    template: imData.contact,
};



// 뷰라우터 인스턴스 생성하기
const router = new VueRouter({
    routes: [
        // 메인페이지
        {
            path: "/main",
            component: MainCont,
        },
        // About 페이지
        {
            path: "/about",
            component: AboutCont,
        },
        // editorial 페이지
        {
            path: "/editorial",
            component: EditorialCont,
        },
        // editorial 페이지
        {
            path: "/catalogues",
            component: CataloguesCont,
        },
        // editorial 페이지
        {
            path: "/press",
            component: PressCont,
        },
        // editorial 페이지
        {
            path: "/contact",
            component: ContactCont,
        },
        
    ],
});

// 내보내기
export default router;
