window.addEventListener("DOMContentLoaded", loadFn);

/****************************************** 
    함수명: loadFn
    기능: 로딩 후 버튼 이벤트 및 기능구현
******************************************/
function loadFn() {


    /****************************************** 
        HEADER 영역 - 스크롤시 배경색 변경
    ******************************************/
    // header 영역 스크롤시 배경색, 찾기버튼 색변경 변수
    const headerArea = document.querySelector(".header");
    const gnbBar = document.querySelector(".gnb");
    const hTop = document.querySelector(".h_top");


    window.addEventListener('scroll', function() {
        if (window.scrollY > 80) {
            headerArea.style=('background-color: #21201ef2;');
        } else {
            headerArea.style=('background-color: none;');
        }
    });


    /****************************************** 
        HEADER 영역 - 햄버거버튼
    ******************************************/
    const hambtn = document.querySelector(".hambtn");
    const menuT = document.querySelector(".menu-trigger");

    // 햄버거
    hambtn.addEventListener("click", function() {
        event.preventDefault();
        menuT.classList.toggle("active");
        headerArea.classList.toggle("open");
    });



















}