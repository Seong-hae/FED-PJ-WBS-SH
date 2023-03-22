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
            // clearTimeout(aniSetT);

            // 원래 글자박스는 투명도 1
            qwe.forEach((ele) => {
                ele.style.opacity = 1;
            });
        }; ////// mouseleave ///////////

        let aniSetT;

        ele.onmouseenter = () => {

            // bottomArea의 스타일을 줘서 사진이 펼쳐지게 함
            let tg = bottomArea[idx];

            // tg.style.left = "0";
            // tg.style.width = "100%";
            tg.style.clipPath = "polygon(0% 0%,100% 0%,100% 100%, 0% 100%)";
            tg.style.opacity = "1";
            tg.style.transform = "scale(1.2)";
            tg.style.transition = " 1s ease-in-out, opacity 0s,transform 5s 1s";
            // 타임아웃매번 지운다!
            // transition과 animation이 충돌이나서 화면이 흔들려서 
            // animation만 따로 setTimeout에 담아서 실행되게 해주었다.
            // clearTimeout(aniSetT);
            // aniSetT = setTimeout(() => (tg.style.animation = "big 5s ease forwards"), 2000);

            // 글자박스들 투명도 조절
            qwe.forEach((ele) => {
                ele.style.opacity = 0.5;
            });
            console.log(ele);
            ele.querySelector(".cont_tbx").style.opacity = 1;

        }; ///////// mouseenter ///////////
    }); ///// forEach /////////









    /* 글은 어떻게 하느냐?
    배열로 설정을해줍니다.
    글내용 = [ , , , , , ]
    li마다 번호를 줍니다. 지정번호 
    6 1 2 3 4 5 
    현재 보이는 페이지는 1
    


    // 멤버쉽 구역 슬라이드 설계
    // 이벤트 대상 .mbtns 
    const mbtns = document.querySelectorAll('.mbtns');
    그거 광클 변수 하나놓고
    let 어쩌구 그거

    함수 이름 () {
        if(함수가 1일때){
            작성
            1. ul이 먼저 왼쪽으로 가!
            2. 맨왼쪽 li를 짤라서 맨 오른족에 가져다 넣어
            그거에 맞는 내용 출력 될대 오퍼시티 1되게 


        else(함수가 0 일때){
            오파서티 사라져 
            먼저 짤라 맨오른쪽거를 맨왼쪽으로
            그다음에 li를 보내!
            그다음에 오파서티 1해줘!
        }

        }
    } 


    // true 1 false 0 
    // 버튼을 누를때
    // 기능구현해줘
    mbtns.onclick = (순번) => {
        누르면 함수를 실행시켜줘;
    }; */

}; ////////// load ////////////////////////
