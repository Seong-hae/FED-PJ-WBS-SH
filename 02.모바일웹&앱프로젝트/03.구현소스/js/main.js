/* 베르판 PJ - main.js */

window.addEventListener("DOMContentLoaded", loadFn);

/****************************************** 
    함수명: loadFn
    기능: 로딩 후 버튼 이벤트 및 기능구현
******************************************/
function loadFn() {


    /****************************************** 
        HEADER 영역 - 스크롤시 배경색 변경
    ******************************************/
    const headerArea = document.querySelector(".header");

    window.addEventListener('scroll', function() {
        if (window.scrollY > 80) {
            headerArea.style=('background-color: #fff;');
        } else {
            headerArea.style=('background-color: none;');
        }
    });


    /****************************************** 
        HEADER 영역 - 햄버거버튼
    ******************************************/
    // const hambtn = document.querySelector(".hambtn");
    // const menuT = document.querySelector(".menu-trigger");

    // // 햄버거
    // hambtn.addEventListener("click", function() {
    //     event.preventDefault();
    //     menuT.classList.toggle("active");
    //     headerArea.classList.toggle("open");
    // });

    



    


    /****************************************** 
        메인영역 - 모바일 영역 슬라이드 구현
    ******************************************/
        // const swiper = new Swiper('.moswiper', {
        // //기본 셋팅
        // //방향 셋팅 vertical 수직, horizontal 수평 설정이 없으면 수평
        // direction: 'horizontal',
        // //한번에 보여지는 페이지 숫자
        // slidesPerView: 1,
        // //페이지와 페이지 사이의 간격
        // spaceBetween: 0,
        // //드레그 기능 true 사용가능 false 사용불가
        // debugger: true,
        // //마우스 휠기능 true 사용가능 false 사용불가
        // mousewheel: false,
        // //반복 기능 true 사용가능 false 사용불가
        // loop: true,
        // //선택된 슬라이드를 중심으로 true 사용가능 false 사용불가 djqt
        // centeredSlides: true,
        // // 페이지 전환효과 slidesPerView효과와 같이 사용 불가
        // // effect: 'fade',
        // speed: 1000,
        // //자동 스크를링
        // autoplay: {
        //     //시간 1000 이 1초
        //     delay: 3500,
        //     disableOnInteraction: false,
        // },
        // // If we need pagination
        // pagination: {
        //     el: '.swiper-pagination',
        //     clickable: true,
        // },
    
        // // Navigation arrows
        // navigation: {
        //     nextEl: '.swiper-button-next',
        //     prevEl: '.swiper-button-prev',
        // }
        // });
       



    

    
}; ////////// load ////////////////////////


