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
            headerArea.style=(
                'background-color: #fff; border-bottom: 1px solid #ccc;'
                );
        } else {
            headerArea.style=(
                'background-color: none; border-bottom: none;'
                );
        }
    });



    /***************************************************
        HEADER 영역 - 메뉴 보이기/숨기기
    ***************************************************/
    // 햄버거버튼요소
    const viewBtn = document.querySelector(".ham");
    const closeBtn = document.querySelector(".close");
    const black = document.querySelector(".black");
    // console.log("버튼있니?",viewBtn);

    // 이벤트 설정하기 //////
    viewBtn.onclick = videoView;
    function videoView(){
        // 1. 호출확인
        console.log("나야나!");
        
        // 2. 대상선정 : .momenu
        const videoBox = document.querySelector(".momenu");
        
        // 3. 변경내용 : 화면에 보이기
        videoBox.style.left = "0";
        black.style.opacity = "1";
        black.style.zIndex = "99";
        
        
    } /////////////////// videoView 함수 ///////////////

    // 이벤트 설정하기 //////
    closeBtn.onclick = videoClose;
    function videoClose(){
        // 1. 호출확인
        console.log("나야나!");
        
        // 2. 대상선정 : .momenu
        const videoBox = document.querySelector(".momenu");
        
        // 3. 변경내용 : 화면에 보이기
        videoBox.style.left = "-100%";
        black.style.opacity = "0";
        black.style.zIndex = "-1";
        
    } /////////////////// videoView 함수 ///////////////





    const swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 50,
        centeredSlides: false,
        breakpoints: { //반응형 조건 속성
            0: {
                slidesPerView: 1,
            },
            500: {
              slidesPerView: 1,
            },
            800: {
                slidesPerView: 2,
            },
            1400: {
              slidesPerView: 3,
            }
          },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

    



    


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


