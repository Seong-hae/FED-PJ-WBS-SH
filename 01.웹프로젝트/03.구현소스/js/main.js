window.addEventListener("DOMContentLoaded", loadFn);

/****************************************** 
    함수명: loadFn
    기능: 로딩 후 버튼 이벤트 및 기능구현
******************************************/
function loadFn() {



    /****************************************** 
        메인영역 - 페이지 열리는 기능 구현
    ******************************************/
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





    
    
   const flowBox = document.querySelector(".event_flow");
   const flowList = document.querySelectorAll(".eventlist");

   flowBox.onmouseenter = x => {
        // console.log("마우스오버!");

        flowBox.style.animationPlayState = "paused";

        for(var i=0; i<flowList.length; i++){
            flowList[i].style.animationPlayState = "paused"
        } 
   }; ///////////////////////// mouseenter

   flowBox.onmouseleave = x => {
        // console.log("마우스리브!");

        flowBox.style.animationPlayState = "running";
        for(var i=0; i<flowList.length; i++){
            flowList[i].style.animationPlayState = "running"
        }
        
    }; ///////////////////////// mouseleave



    /******************************************************** 
        PROMOTION SECTION 영역 
        - 슬라이드 박스 구현
    ********************************************************/
    // 슬라이드 li리스트
    let slist = document.querySelectorAll(".pro_slide");
    
    // // 잘라내기로 li순번이 뒤섞이므로 블릿변경 매칭을 위한
    // // 고유순번을 사용자정의 속성(data-)으로 만들어준다!
    slist.forEach((ele,idx)=>{
        // data-seq라는 사용자정의 속성 넣기
        ele.setAttribute("data-seq",idx);
    }); ////// forEach ///////////

    // 1. 대상선정
    // 1-1. 이벤트 대상: .arr_btn
    const abtn = document.querySelectorAll(".arr_btn");
    // console.log(abtn);

    // 1-2. 변경 대상: .pro_slider
    const slide = document.querySelector(".pro_slider");

    // 1-3. 블릿 대상: .move_bar
    const indic = document.querySelectorAll(".move_bar");
    // console.log(indic);

    // 광클금지변수 : 0 - 허용, 1- 불허용
    let prot = 0;

    // 2. 슬라이드 변경함수 만들기
    // 호출시 seq에 들어오는 값 중 1은 오른쪽, 0은 왼쪽
    const goSlide = (seq) => {
        // console.log("슬고우!",seq);

        // console.log("못들어갔어!!!!!");

        // 광클금지 설정하기 //////
        if(prot) return;
        prot = 1; // 잠금!
        setTimeout(()=>{
            prot = 0; // 해제!
        }, 400); /// 0.4초후 해제! ///

        // console.log("나,들어왔어!!!!");

        // 0. 현재의 슬라이드 li수집하기
        let clist = slide.querySelectorAll("li");
        // clist -> current list 현재 리스트

        // 1. 방향에 따른 분기
        // 1-1. 오른쪽버튼 클릭시 ////////////////
        if(seq){            
            // console.log("오른!");
            // (1) 오른쪽 버튼 클릭시 다음 슬라이드가
            //     나타나도록 슬라이드 박스의 left값을
            //     -330%로 변경시킨다.
            slide.style.left = "-1290px";
            slide.style.transition = "left .4s ease-in-out";
    
            // (2) 슬라이드 이동후!!! (0.4초후)
            setTimeout(()=>{
                // (2-1) 바깥에 나가있는 첫번째 슬라이드
                //       li를 잘라서 맨뒤로 보낸다!
                slide.appendChild(clist[0]);
                // (2-2) 동시에 left값을 -220%으로 변경한다!
                slide.style.left = "-860px";
                // (2-3) 트랜지션 없애기!
                slide.style.transition = "none";
            },400); //// 타임아웃 //////

        }
        // 1-2. 왼쪽버튼 클릭시 /////////////
        else{
            // console.log("왼쪽!");

            // (1) 왼쪽버튼 클릭시 이전 슬라이드가
            // 나타나도록 하기위해 우선 맨뒤 li를
            // 맨앞으로 이동한다.
            // slide.insertBefore(넣을놈,넣을놈전놈)
            // slide.insertBefore(맨끝li,맨앞li)
            slide.insertBefore(clist[clist.length-1],clist[0]);

            // (2) 동시에 left값을 -330%로 변경한다.
            slide.style.left = "-1290px"
            // 이때 트랜지션을 없앤다(한 번 실행 후 부터 생기므로!)
            slide.style.transition = "none";

            // (3) 그 후 left값을 -220%으로 애니메이션하여
            // 슬라이드가 왼쪽에서 들어온다.
            // 동일 속성인 left가 같은 코딩처리 공간에 동시에 있으므로
            // 이것을 분리해야 효과가 있다
            // setTimeout을 사용한다!
            setTimeout(()=>{
                slide.style.left = "-860px";
                slide.style.transition = "left .4s ease-in-out";
            },0); ////// 타임아웃 ///////
            
        } ////////////else : 왼쪽클릭시 /////////

        // 2. 현재 슬라이드 순번과 같은 블릿표시하기
        // 대상 : .indic li -> indic변수
        // 2-1. 현재 배너리스트 업데이트
        clist = slide.querySelectorAll("li");
        // 오른쪽 클릭시(seq===1) 두번째 슬라이드[1]
        // 왼쪽클릭시(seq===0) 첫번째 슬라이드[0]
        // seq순번과 읽어올 슬라이드 순번이 일치한다!

        // 2-2.방향별 읽어올 슬라이드 순번으로 "data-seq"값 읽어오기
        let cseq = clist[seq].getAttribute("data-seq")
        // console.log("현재순번:",cseq);

    }; ////////// goSlide함수 ///////////

    // 3. 대상에 이벤트 설정하기
    abtn.forEach((ele, idx) => {
        ele.onclick = () => {
            // 1. 인터발 지우기함수 호출!
            clearAuto();
            // 2. 슬라이드 함수 호출!
            goSlide(idx);
        }; ///// click함수 //////
    }); /////// forEach //////////


    //////////////////////////////////
    // 자동넘김 설정하기 //////////////

    // 일정시간 간격으로 넘어가기
    // -> setInterval(함수,시간)

    // [ 인터발함수의 함수전달값 사용 예(타임아웃 함수도 동일함) ]
    // 1. 함수에 전달값이 없으면 함수명만 사용가능
    // setInterval(goSlide,3000);
    // 2. 전달값이 있다면 익명함수구역에 코딩
    // setInterval(function(){goSlide(1)},3000);
    // 3. 화살표함수 사용가능
    // setInterval(()=>{goSlide(1)},3000);
    // 4. 화살표함수에서 중괄호 생략가능
    // setInterval(()=>goSlide(1),3000);

    // 인터발함수 지우기위한 변수설정
    let autoI;
    // 타임아웃함수 지우기위한 변수설정
    let autoT;

    /*************************************************
        함수명: autoSlide
        기능: 인터발함수로 슬라이드함수 호출
    *************************************************/
    function autoSlide(){
        console.log("인터발시작!");
        // 인터발함수로 슬라이드함수 호출하기
        autoI = setInterval(()=>goSlide(1),4000);
    } ////////////// autoSlide함수 ///////////////

    // 자동넘김 최초호출!
    autoSlide();


    /*******************************************
        함수명: clearAuto
        기능: 인터발함수를 지우고 다시셋팅
    *******************************************/
   function clearAuto(){
        console.log("인터발멈춤!");
        // 1. 인터발 지우기
        clearInterval(autoI);

        // 2. 타임아웃도 지우지 않으면 
        // 쌓여서 타임아웃 쓰나미실행이 발생한다!
        clearTimeout(autoT);

        // 3. 잠시후 다시 작동하도록 타임아웃으로
        // 인터발함수를 호출한다!
        // 5초후(인터발은 3초후, 토탈 8초후 작동시작)
        autoT = setTimeout(autoSlide,5000);

   } ///////////clearAuto 함수 /////////////////




    

    

    
    


    
}; ////////// load ////////////////////////
