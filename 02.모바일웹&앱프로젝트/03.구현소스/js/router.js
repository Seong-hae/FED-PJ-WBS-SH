// 뷰라우터 인스턴스 설정파일 - router.js
import imData from "./tempData/mainArea.js";
import  {actSwiper,mainFn} from "./main-center.js";

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
let Category = {
    template: imData.category,
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
        // contact 페이지
        {
            name: "category", 
            path: "/:cat",
            component: Category,
        },
        // lighting, Furniture, Accessories 페이지
        
    ],
    
    // 라우터 호출시 스크롤위치 최상단 자동이동코드!!!
    // 새로 라우팅을 할때마다 이 스크롤 메서드가 호출되어 실행됨!
    scrollBehavior (to, from, savedPosition) {

        setTimeout(()=>{
            $.fn.scrollReveal(); 
        },500);

         actSwiper();
      // 스크롤리빌 플러그인 적용호출!
    
        return { y: 0 }


    }

});

// 내보내기
export default router;
