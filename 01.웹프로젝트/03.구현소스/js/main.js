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
            tg.style.transform = "scale(1.1)";
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







    const by1 = ['Paradise Signature','Paradise Casino','Paradise Club']
    const by2 = ['시그니쳐라떼는 맛있어','카지노는 딜러가 힘들어','관악구클럽죽순이']


    // 멤버쉽 구역 슬라이드 설계
    // 기능 li가 3개가있고 그안에 배열데이터 0,1,2 를 넣어준다.
    // 버튼을 누르면 데이터넣는곳 opacity 0 해주고 데이터의 순서를 바꿔준 후 opacity를 1해서 보여준다.
    // 이벤트 대상 .mbtns 
    const mbtns = document.querySelectorAll('.mbtns');
    // 출력대상 
    // memberbox h4
    let membx = document.querySelectorAll('.memberbox li');
    // memtxt
    const mtxt = document.querySelector('.memtxt');
    // 초기상태 셋팅
    membx.forEach((ele,idx)=>{
        ele.innerHTML = `
        <h4>${by1[idx]}</h4>
        `;
    })
    mtxt.innerHTML = by2[1];

    // 광클방지 변수
    // let a = 1; 알아서 해주시고..
    function cby (seq) { // seq는 순번 0은 왼쪽 1은오른쪽
        // 광클방지.
        membx.forEach((ele)=>{
            ele.style.opacity = 0;
        })
        if(seq){ // seq = 1 = true 오른쪽 기능구현
            console.log('오른')
            // 어쩌구.splic(배열에서자를값 , 자를개수 , 넣을데이터 )
            // by1.splice(1,0,by[1])
            console.log(by[0])
            // membx.forEach((ele,idx)=>{
            //     ele.innerHTML = `
            //     <h4>${by1[idx]}</h4>
            //     `;
            // })
            mtxt.innerHTML = by2[1];
        }
        else { // else = 0 = false 왼쪽기능 구현
            let membx = document.querySelectorAll('.memberbox li');
        }
        setTimeout(()=>{
            membx.forEach((ele)=>{
                ele.style.opacity = 1;
            })
        },1000)
    }

    // 버튼을 누르면 h4가 opacity 0 + 배열을 짤라서 붙이기 

    mbtns.forEach((ele,idx)=>{
        ele.onclick = (idx) => { //seq 는 순번
            // ele - 버튼을 누르면 순번을 넘어가게 해준다.
            // 왼쪽은 0 오른쪽은 1
            cby(idx);
        }
    })

    
    


    
}; ////////// load ////////////////////////
