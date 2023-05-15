/* 베르판 PJ 상품상세페이지 - product.js */

window.addEventListener("DOMContentLoaded", loadFn);

/****************************************** 
    함수명: loadFn
    기능: 로딩 후 버튼 이벤트 및 기능구현
******************************************/
function loadFn() {



    /****************************************** 
        기능: 상세상품 세부 이미지 슬라이드
    ******************************************/
    const swiper = new Swiper(".product_slide1", {
        loop: true,
        spaceBetween: 10,
        slidesPerView: 6,
        freeMode: true,
        watchSlidesProgress: true,
    });

    const swiper2 = new Swiper(".product_slide2", {
        loop: true,
        spaceBetween: 10,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        thumbs: {
            swiper: swiper,
        },
    });



    /***************************************************
      비슷한 상품 Slide 영역 - 갯수별 슬라이드 박스
    ***************************************************/
    // 3개일때
    const swiper3 = new Swiper(".mySwiper3", {
        slidesPerView: 3,
        spaceBetween: 50,
        centeredSlides: false,
        breakpoints: {
            //반응형 조건 속성
            0: {
                slidesPerView: 1,
            },
            500: {
                slidesPerView: 1,
            },
            800: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 3,
            },
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            // 버튼
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });



} ////////// load ////////////////////////
