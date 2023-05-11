/* 베르판 PJ - temp.js */

window.addEventListener("DOMContentLoaded", loadFn);

/****************************************** 
    함수명: loadFn
    기능: 로딩 후 버튼 이벤트 및 기능구현
******************************************/
function loadFn() {


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
        black.style.transition = ".3s";
        black.style.opacity = "1";
        black.style.zIndex = "99";
        
        
    } /////////////////// videoView 함수 ///////////////

    


    

    
}; ////////// load ////////////////////////


