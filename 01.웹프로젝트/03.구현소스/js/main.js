window.addEventListener("DOMContentLoaded", loadFn);

/****************************************** 
    함수명: loadFn
    기능: 로딩 후 버튼 이벤트 및 기능구현
******************************************/
function loadFn() {

    // 1. 대상선정
    // 1-1. 이벤트 대상: .cbx1 li
    const topArea = document.querySelectorAll(".cbx1 li");
    // 1-2. 변경 대상: .cbx2 .accordion
    const bottomArea = document.querySelectorAll(".cbx2 .accordion");
    // 1-3.메인페이지 텍스트박스 - 투명화 대상
    const qwe = document.querySelectorAll(".cont_tbx");
    // console.log("qwe", qwe);


    // 2. 대상에 이벤트 설정하기
    topArea.forEach((ele, idx) => {

        ele.onmouseleave = () => {

            // tg에 들어간 스타일을 모두 지우기
            let tg = bottomArea[idx];
            tg.style = "";

            // 타임아웃매번 지운다!
            // 지우지 않으면 마우스가 떠났어도 계속 animation이 style에 들어가게 되어서 이미지 흔들림
            clearTimeout(aniSetT);

            // 원래 글자박스는 투명도 1
            qwe.forEach((ele) => {
                ele.style.opacity = 1;
            });
        }; ////// mouseleave ///////////

        let aniSetT;

        ele.onmouseenter = () => {

            // bottomArea의 스타일을 줘서 사진이 펼쳐지게 함
            let tg = bottomArea[idx];

            tg.style.left = "0";
            tg.style.width = "100%";
            tg.style.opacity = "1";
            tg.style.transition = " 1s ease-in-out, opacity 0s";
            // 타임아웃매번 지운다!
            // transition과 animation이 충돌이나서 화면이 흔들려서 
            // animation만 따로 setTimeout에 담아서 실행되게 해주었다.
            clearTimeout(aniSetT);
            aniSetT = setTimeout(() => (tg.style.animation = "big 5s ease forwards"), 2000);

            // 글자박스들 투명도 조절
            qwe.forEach((ele) => {
                ele.style.opacity = 0.5;
            });
            console.log(ele);
            ele.querySelector(".cont_tbx").style.opacity = 1;

        }; ///////// mouseenter ///////////
    }); ///// forEach /////////




}; ////////// load ////////////////////////
