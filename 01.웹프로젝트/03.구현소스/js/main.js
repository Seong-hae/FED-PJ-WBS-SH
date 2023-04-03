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
            // console.log(ele);
            ele.querySelector(".cont_tbx").style.opacity = 1;

        }; ///////// mouseenter ///////////
    }); ///// forEach /////////




    /****************************************** 
        메인영역 - 모바일 영역 슬라이드 구현
    ******************************************/
        const swiper = new Swiper('.moswiper', {
        //기본 셋팅
        //방향 셋팅 vertical 수직, horizontal 수평 설정이 없으면 수평
        direction: 'horizontal',
        //한번에 보여지는 페이지 숫자
        slidesPerView: 1,
        //페이지와 페이지 사이의 간격
        spaceBetween: 0,
        //드레그 기능 true 사용가능 false 사용불가
        debugger: true,
        //마우스 휠기능 true 사용가능 false 사용불가
        mousewheel: false,
        //반복 기능 true 사용가능 false 사용불가
        loop: true,
        //선택된 슬라이드를 중심으로 true 사용가능 false 사용불가 djqt
        centeredSlides: true,
        // 페이지 전환효과 slidesPerView효과와 같이 사용 불가
        // effect: 'fade',
        speed: 1000,
        //자동 스크를링
        autoplay: {
            //시간 1000 이 1초
            delay: 3500,
            disableOnInteraction: false,
        },
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
        });
       



    

    /////////////////////////////////////////////////////////////////////////
    /******************************************************** 
        PROMOTION SECTION 영역 
        - 슬라이드 박스 구현
    ********************************************************/
    // 슬라이드 li리스트
    let slist = document.querySelectorAll(".pro_slide");
    
    // // 잘라내기로 li순번이 뒤섞이므로 블릿변경 매칭을 위한
    // // 고유순번을 사용자정의 속성(data-)으로 만들어준다!
    // slist.forEach((ele,idx)=>{
    //     // data-seq라는 사용자정의 속성 넣기
    //     ele.setAttribute("data-seq",idx);
    // }); ////// forEach ///////////

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
    let a = 0;
    // 2. 슬라이드 변경함수 만들기
    // 호출시 seq에 들어오는 값 중 1은 오른쪽, 0은 왼쪽
    const goSlide = (seq) => {
        // console.log("슬고우!",seq);
        
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
            a++;  
            // console.log("오른!");
            slide.style.left = "-1290px";
            slide.style.transition = "left .4s ease-in-out";
            
            // (2) 슬라이드 이동후!!! (0.4초후)
            setTimeout(()=>{
                // 바깥에 나가있는 첫번째 슬라이드 li를 잘라서 맨뒤로 보낸다!
                slide.appendChild(clist[0]);
                slide.style.left = "-860px";
                slide.style.transition = "none";
            },400); //// 타임아웃 //////

        }
        // 1-2. 왼쪽버튼 클릭시 /////////////
        else{
            a--;
            // console.log("왼쪽!");

            // slide.insertBefore(넣을놈,넣을놈전놈)
            // slide.insertBefore(맨끝li,맨앞li)
            slide.insertBefore(clist[clist.length-1],clist[0]);
            slide.style.left = "-1290px"
            slide.style.transition = "none";

            // 동일 속성인 left가 같은 코딩처리 공간에 동시에 있으므로
            // 이것을 분리해야 효과가 있다
            // setTimeout을 사용한다!
            setTimeout(()=>{
                slide.style.left = "-860px";
                slide.style.transition = "left .4s ease-in-out";
            },0); ////// 타임아웃 ///////
            
        } ////////////else : 왼쪽클릭시 /////////

        // 2. 현재 슬라이드 순번과 같은 블릿표시하기
        // 대상 : .move_bar -> indic변수
        // 2-1. 현재 배너리스트 업데이트
        clist = slide.querySelectorAll("li");
        // 오른쪽 클릭시(seq===1) 두번째 슬라이드[1]
        // 왼쪽클릭시(seq===0) 첫번째 슬라이드[0]
        // seq순번과 읽어올 슬라이드 순번이 일치한다!

        // 2-2.방향별 읽어올 슬라이드 순번으로 "data-seq"값 읽어오기
        // let cseq = clist[seq].getAttribute("data-seq")

        
        //  바 움직이기
        if(a === -1){
            a = 5;
            document.querySelector('.move_bar').style.opacity = 0
            document.querySelector('.move_bar').style.transition = 'none';
            setTimeout(()=>{
            document.querySelector('.move_bar').style.opacity = 1;
            document.querySelector('.move_bar').style.transition = '.4s ease-in-out';
            },10)
        }
        else if( a === 6){
            a = 0;
            document.querySelector('.move_bar').style.opacity = 0
            document.querySelector('.move_bar').style.transition = 'none';
            setTimeout(()=>{
            document.querySelector('.move_bar').style.opacity = 1;
            document.querySelector('.move_bar').style.transition = '.4s ease-in-out';
            },10)
        }
        // move_bar 위치 조정
        document.querySelector('.move_bar').style.transform ='translateX(' + a*100 + '%)';
        

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

    // 인터발함수 지우기위한 변수설정
    let autoI;
    // 타임아웃함수 지우기위한 변수설정
    let autoT;

    ////////////////////////////////////////////////
    //    함수명: autoSlide
    //    기능: 인터발함수로 슬라이드함수 호출
    ////////////////////////////////////////////////
    function autoSlide(){
        console.log("인터발시작!");
        // 인터발함수로 슬라이드함수 호출하기
        autoI = setInterval(()=>goSlide(1),4000);
    } ////////////// autoSlide함수 ///////////////

    // 자동넘김 최초호출!
    autoSlide();

    ////////////////////////////////////////////////
    //    함수명: clearAuto
    //    기능: 인터발함수를 지우고 다시셋팅
    ////////////////////////////////////////////////
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

   /////////////////////// promotion section /////////////////////////////////////



   /******************************************************** 
        EVENTS SECTION 영역 
        - 슬라이드 박스 구현
    ********************************************************/
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
    ////////////////////// EVENTS SECTION ////////////////////





    /////////////////////////////////////////////////////////////////////////
    /******************************************************** 
        GALLERY SECTION 영역 
        - 슬라이드 박스 구현
    ********************************************************/
    // 슬라이드 li리스트
    let glist = document.querySelectorAll(".gal_list");
    
    // // 잘라내기로 li순번이 뒤섞이므로 블릿변경 매칭을 위한
    // // 고유순번을 사용자정의 속성(data-)으로 만들어준다!
    // slist.forEach((ele,idx)=>{
    //     // data-seq라는 사용자정의 속성 넣기
    //     ele.setAttribute("data-seq",idx);
    // }); ////// forEach ///////////

    // 1. 대상선정
    // 1-1. 이벤트 대상: .garr_btn
    const gbtn = document.querySelectorAll(".garr_btn");
    // console.log(abtn);

    // 1-2. 변경 대상: .gal_slide
    const gslide = document.querySelector(".gal_slide");

    // 1-3. 블릿 대상: .gmove_bar
    const gbar = document.querySelectorAll(".gmove_bar");
    // console.log(indic);

    // 광클금지변수 : 0 - 허용, 1- 불허용
    let pro = 0;
    let b = 0;
    // 2. 슬라이드 변경함수 만들기
    // 호출시 seq에 들어오는 값 중 1은 오른쪽, 0은 왼쪽
    const galSlide = (seq) => {
        // console.log("슬고우!",seq);
        
        // 광클금지 설정하기 //////
        if(pro) return;
        pro = 1; // 잠금!
        setTimeout(()=>{
            pro = 0; // 해제!
        }, 400); /// 0.4초후 해제! ///

        // console.log("나,들어왔어!!!!");

        // 0. 현재의 슬라이드 li수집하기
        let clist = gslide.querySelectorAll("li");
        // clist -> current list 현재 리스트

        // 1. 방향에 따른 분기
        // 1-1. 오른쪽버튼 클릭시 ////////////////
        if(seq){          
            b++;  
            // console.log("오른!");
            gslide.style.left = "-1200px";
            gslide.style.transition = "left .4s ease-in-out";
            
            // (2) 슬라이드 이동후!!! (0.4초후)
            setTimeout(()=>{
                // 바깥에 나가있는 첫번째 슬라이드 li를 잘라서 맨뒤로 보낸다!
                gslide.appendChild(clist[0]);
                gslide.style.left = "-800px";
                gslide.style.transition = "none";
            },400); //// 타임아웃 //////

        }
        // 1-2. 왼쪽버튼 클릭시 /////////////
        else{
            b--;
            // console.log("왼쪽!");

            // slide.insertBefore(넣을놈,넣을놈전놈)
            // slide.insertBefore(맨끝li,맨앞li)
            gslide.insertBefore(clist[clist.length-1],clist[0]);
            gslide.style.left = "-1200px"
            gslide.style.transition = "none";

            // 동일 속성인 left가 같은 코딩처리 공간에 동시에 있으므로
            // 이것을 분리해야 효과가 있다
            // setTimeout을 사용한다!
            setTimeout(()=>{
                gslide.style.left = "-800px";
                gslide.style.transition = "left .4s ease-in-out";
            },0); ////// 타임아웃 ///////
            
        } ////////////else : 왼쪽클릭시 /////////

        // 2. 현재 슬라이드 순번과 같은 블릿표시하기
        // 대상 : .move_bar -> indic변수
        // 2-1. 현재 배너리스트 업데이트
        clist = gslide.querySelectorAll("li");
        // 오른쪽 클릭시(seq===1) 두번째 슬라이드[1]
        // 왼쪽클릭시(seq===0) 첫번째 슬라이드[0]
        // seq순번과 읽어올 슬라이드 순번이 일치한다!

        // 2-2.방향별 읽어올 슬라이드 순번으로 "data-seq"값 읽어오기
        // let cseq = clist[seq].getAttribute("data-seq")

        
        //  바 움직이기
        if(b === -1){
            b = 6;
            document.querySelector('.gmove_bar').style.opacity = 0
            document.querySelector('.gmove_bar').style.transition = 'none';
            setTimeout(()=>{
            document.querySelector('.gmove_bar').style.opacity = 1;
            document.querySelector('.gmove_bar').style.transition = '.4s ease-in-out';
            },10)
        }
        else if( b === 7){
            b = 0;
            document.querySelector('.gmove_bar').style.opacity = 0
            document.querySelector('.gmove_bar').style.transition = 'none';
            setTimeout(()=>{
            document.querySelector('.gmove_bar').style.opacity = 1;
            document.querySelector('.gmove_bar').style.transition = '.4s ease-in-out';
            },10)
        }
        // gmove_bar 위치 조정
        document.querySelector('.gmove_bar').style.transform ='translateX(' + b*100 + '%)';
        

    }; ////////// goSlide함수 ///////////

    // 3. 대상에 이벤트 설정하기
    gbtn.forEach((ele, idx) => {
        ele.onclick = () => {
            // 1. 인터발 지우기함수 호출!
            clearAuto2();
            // 2. 슬라이드 함수 호출!
            galSlide(idx);
        }; ///// click함수 //////
    }); /////// forEach //////////

    //////////////////////////////////
    // 자동넘김 설정하기 //////////////

    // 인터발함수 지우기위한 변수설정
    let autoIi;
    // 타임아웃함수 지우기위한 변수설정
    let autoTi;

    ////////////////////////////////////////////////
    //    함수명: autoSlide
    //    기능: 인터발함수로 슬라이드함수 호출
    ////////////////////////////////////////////////
    function autoSlide2(){
        console.log("인터발시작!");
        // 인터발함수로 슬라이드함수 호출하기
        autoIi = setInterval(()=>galSlide(1),4000);
    } ////////////// autoSlide함수 ///////////////

    // 자동넘김 최초호출!
    autoSlide2();

    ////////////////////////////////////////////////
    //    함수명: clearAuto
    //    기능: 인터발함수를 지우고 다시셋팅
    ////////////////////////////////////////////////
   function clearAuto2(){
        console.log("인터발멈춤!");
        // 1. 인터발 지우기
        clearInterval(autoIi);

        // 2. 타임아웃도 지우지 않으면 
        // 쌓여서 타임아웃 쓰나미실행이 발생한다!
        clearTimeout(autoTi);

        // 3. 잠시후 다시 작동하도록 타임아웃으로
        // 인터발함수를 호출한다!
        // 5초후(인터발은 3초후, 토탈 8초후 작동시작)
        autoTi = setTimeout(autoSlide2,5000);

   } ///////////clearAuto 함수 /////////////////

   /////////////////////// gallery section /////////////////////////////////////



    

    
    /**********************************************************************************************/
    /******************************************************** 
        MEMBERSHIP SECTION 영역 
        - 스크롤 액션  구현
    ********************************************************/
   // 1. 대상선정
    // (1) 멤버십 이름 : .memname
    const mlist = document.querySelectorAll('.memlist .memname');
    // (2) 멤버십 내용 : .memcontent
    const mcontent = document.querySelectorAll('.memlist .memcontent');
    // (3) 버튼 : .mem_btn
    const mbtns = document.querySelectorAll('.mem_btn');
    // (4) 카드박스들 
    const memberSection = document.querySelector(".membership");
    const cardbox1 = document.querySelector(".cardbox01");
    const cardbox2 = document.querySelector(".cardbox02");
    const cardbox3 = document.querySelector(".cardbox03");


    // 기능 : MEMBERSHIP SECTION 섹션에 진입하기 전에는 card가 안보였다가
    // 스크롤되어 특정 위치 진입하면 등장하도록 만들기
    // 등장액션 대상 - .cardbox2 => cardbox2

    // 화면높이값의 2/3구하기
    const hv = window.innerHeight/3*2;
    // console.log("2/3높이:",hv);

    // 등장액션 대상 위치값 리턴 함수
        const retVal = (ele) => ele.getBoundingClientRect().top;

    // .on클래스를 넣을 함수 만들기
        const showIt = (x) => {
            // 대상 요소의 현재 스크롤 위치 구하기
            let xval = retVal(x);

            // 구간 적용 여부 검사하기
            if (xval < hv && xval > 0) {
                // console.log("작동!!");
                cardbox2.classList.add("up");
            }
        };

    // 스크롤 액션 세팅하기
        window.addEventListener("scroll", () => {

            showIt(memberSection);

        });




    /******************************************************** 
        MEMBERSHIP SECTION 영역 
        - 슬라이드 박스 구현
    ********************************************************/
    // 배열데이터
    let memname = ["CASINO POINT","PARADISE<br class='br'> SIGNATURE","CASINO CLUB"]
    let memcont = 
    [
        "K-Style 프리미엄 외국인 전용 카지노의 회원만을 위해 다양한 혜택으로 구성된 카지노 전용 멤버십입니다. 카지노 포인트 고객에게만 제공되는 차별화된 회원 특전을 경험하세요.",
        "파라다이스 시그니처는 고객님의 가치를 더욱 돋보이게 하는 연간 회원 멤버십입니다.<br> 파라다이스시티만의 시그니처 멤버십으로 품격있는 라이프스타일을 경험하세요.",
        "다채로운 파라다이스시티 시설 뿐만 아니라, 카지노 VIP를 위한 전용 라운지 및 프라이빗 게임 룸, 다양한 이벤트 및 공연 초청 등 파라다이스 카지노 클럽 고객만의 특별한 서비스를 경험하세요."
    ]

    

    // 최초출력
    mlist.forEach((ele,idx)=>{
        ele.innerHTML = memname[idx]; 
    })

    mcontent.forEach((ele,idx)=>{
        ele.innerHTML = memcont[idx]; 
    })

    
    // 배열에서 자른값을 넣을 데이터변수
    let bs;
    let cont

    console.log(memname)

    // bnts[1] 오른쪽버튼 을 누르면 함수실행
    // li의 각요소들에게 트랜지션을 먼저 없애고 투명하게
    mbtns[1].onclick = () =>{
        mlist.forEach((ele)=>{
            ele.style.transition = 'none';
            ele.style.opacity = 0;
        })
        mcontent.forEach((ele)=>{
            ele.style.transition = 'none';
            ele.style.opacity = 0;
        })

        // 배열의 값을 담을 변수
        let ba;
        let cnt

        // ba는 배열의 맨처음값
        ba = memname[0];
        cnt = memcont[0];
        // by의 맨앞을 삭제해!
        memname.shift();
        memcont.shift();
        // by에 맨뒤에 ba값을 추가해!
        memname.push(ba);
        memcont.push(cnt);
        // li업데이트
        // li의 각요소들에게 배열데이터를 순번에 맞게 출력
        mlist.forEach((ele,idx)=>{
            ele.innerHTML = memname[idx]; 
        })
        mcontent.forEach((ele,idx)=>{
            ele.innerHTML = memcont[idx]; 
        })

        let aqe = "PARADISE<br class='br'> SIGNATURE"
        if(memname[1] == aqe){
            document.querySelector('.br').remove();
        }

        // 카드에 클래스 up 넣어주기
        if(memname[1] == "CASINO POINT"){
            cardbox2.classList.remove("up")
            cardbox3.classList.remove("up")
            cardbox1.classList.add("up")
        }
        else if(memname[1] == "PARADISE<br class='br'> SIGNATURE"){
            cardbox1.classList.remove("up")
            cardbox3.classList.remove("up")
            cardbox2.classList.add("up")
        }
        else if(memname[1] == "CASINO CLUB"){
            cardbox1.classList.remove("up")
            cardbox2.classList.remove("up")
            cardbox3.classList.add("up")
        }

        // 업데이트후 시간차를 주기위해 셋타임아웃 사용
        // 각li요소 들에게 트랜지션을 선 부여 후 투명도 1
        setTimeout(()=>{
            mlist.forEach((ele)=>{
                ele.style.transition = '.3s'
                ele.style.opacity = 1;
            })
            mcontent.forEach((ele)=>{
                ele.style.transition = '.3s'
                ele.style.opacity = 1;
            })
        },500)
    } //////////// click 

    let aqe = "PARADISE<br class='br'> SIGNATURE"
        if(memname[1] == aqe){
            document.querySelector('.br').remove();
        } 

        

    // 버튼[0] 왼쪽을 누르면 함수실행
    // li의 각요소들에게 트랜지션을 먼저 없애고 투명하게
    mbtns[0].onclick = () => {
        mlist.forEach((ele)=>{
            ele.style.transition = 'none';
            ele.style.opacity = 0;
        })

        mcontent.forEach((ele)=>{
            ele.style.transition = 'none';
            ele.style.opacity = 0;
        })
         
        //  배열에 값을 담을 변수
        bs = memname[2];
        cont = memcont[2];

        // 맨뒤에 요소를 제거! by배열의
        memname.pop();
        memcont.pop();
        // console.log('by',by,'bs',bs);

        // 배열에 맨앞에 추가해! bs값을
        memname.unshift(bs);
        memcont.unshift(cont);
        // console.log(by)
        // mlist 업데이트
        mlist.forEach((ele,idx)=>{
            ele.innerHTML = memname[idx]; 
        })
        mcontent.forEach((ele,idx)=>{
            ele.innerHTML = memcont[idx]; 
        })
        console.log(memname[1])
        let aqe = "PARADISE<br class='br'> SIGNATURE"
        if(memname[1] == aqe){
            document.querySelector('.br').remove();
        } 

        // 카드에 클래스 up 넣어주기
        if(memname[1] == "CASINO POINT"){
            cardbox2.classList.remove("up")
            cardbox3.classList.remove("up")
            cardbox1.classList.add("up")
        }
        else if(memname[1] == "PARADISE<br class='br'> SIGNATURE"){
            cardbox1.classList.remove("up")
            cardbox3.classList.remove("up")
            cardbox2.classList.add("up")
        }
        else if(memname[1] == "CASINO CLUB"){
            cardbox1.classList.remove("up")
            cardbox2.classList.remove("up")
            cardbox3.classList.add("up")
        }
        // 시간차를 주기위해 셋타임아웃 사용 
        // li의 각요소들에게 트랜지션을 먼저 부여후 투명도 1
        setTimeout(()=>{
            mlist.forEach((ele)=>{
                ele.style.transition = '.3s'
                ele.style.opacity = 1;
            })
            mcontent.forEach((ele)=>{
                ele.style.transition = '.3s'
                ele.style.opacity = 1;
            })
        },500)
    } //////////// click 





    /******************************************************** 
        MAIN 예약 영역 
    ********************************************************/
    // 이벤트대상 selbx03  
    const selbx03 = document.querySelector('.selbx03')

    // 가운데 줄을 누르면 가운데로 오기 scrollTo
    //  가운데줄에서 날짜나 호텔시설 누르면 darkbg 효과 on
    // darkbg - 까만화면 display block되야 가림막
    // 변수 가운데줄 
    const reservation = document.querySelector('.reservation');
    // 변수 다크화면
    const darkbg = document.querySelector('.darkbg');
    // darkbg.classList.add('on')
    // 높이값
    const hh = document.querySelector('#cont').clientHeight; // 957px
    console.log('hh',hh)

    // 예약 바를 클릭하면 ... 
    reservation.onclick = (e) => {
        // 광클방지 넣어주세요~
        // e.preventDefault();
        // 가줘! hh의 높이값의 절반으로 - 937 / 2 px
        scrollTo(0,hh/2)
    }

    // 변수 
    // 호텔/시설 선택 , 체크인아웃 , 성인어린이 3개 합친 클래스 selbx
    const selbx = document.querySelectorAll('.selbx');
    console.log(selbx)
    selbx.forEach((ele,idx)=>{
        ele.onclick = () => {
            event.preventDefault();
            console.log('ele',ele,'\nidx',idx)
            event.preventDefault();
            darkon();
            // for(let x of selbx){
            //     x.classList.remove('on');
            //     console.log('x',x)
            // }
            selbxpopoff();
            setTimeout(()=>{
                selbx[idx].classList.add('on');
            },10)
        }
    })

    // 암흑화면 켜기 함수
    function darkon() {
        // 광클방지 넣어주세요~
        scrollTo(0,hh/2)
        darkbg.classList.add('on')
        reservation.style.zIndex = 9999;
    }
    // 암흑화면 끄기 함수
    function darkoff() {
        darkbg.classList.remove('on')
        // 모든 셀bx의 
        selbxpopoff();
        reservation.style.zIndex = "";
    }
    
    function selbxpopoff(){
        for(let x of selbx){
            x.style.transition = 'none';
            x.classList.remove('on');
        }
    }

    // 초기화 
    darkbg.onclick = () => {
        darkoff();
    }
    


    // selbx03 에 인원 체크하는거 그거 
    // cminus 는 애기 - cplus 애기 +
    // aminus 성인 - aplus 성인 +
    const aplus = document.querySelector('.aplus')
    const aminus = document.querySelector('.aminus')
    const cplus = document.querySelector('.cplus')
    const cminus = document.querySelector('.cminus')
    
    // 성인인원 적히는 박스
    const abx = document.querySelector('.realadult')
    console.log(abx)
    // 애기인원 적히는 박스
    const cbx = document.querySelector('.realchildren')
    // 변수 성인변수 담을거
    let anum = 2;
    // 변수 애기변수 담을거
    let cnum = 0;
    // 변수 성인변수 + 애기변수
    let acnum = anum + cnum;

    // 만들어야할거 성인 + - 버튼을 눌럿을때 - 시 성인변수 -- +시 성인변수 ++;
    aplus.onclick = () => {
        console.log('되라')

            anum++;
            if(anum === 7){
                anum = 6;
            }
            anumreset();
            acnum = anum + cnum;
            console.log('acnum',acnum)
            console.log('anum',anum)
        }
    aminus.onclick = () => {
        console.log('되라')
        anum--;
        if(anum === 0){
            anum = 1;
        }
        console.log(anum)
        anumreset();
        acnum = anum + cnum;
        console.log('acnum',acnum)
    }
    
    // 만들어야할거 애기 + - 버튼을 눌럿을때 -시 애기변수 -- +시 애기변수 --;
    cplus.onclick = () => {
        console.log('되라')

            cnum++;
            if(cnum === 7){
                cnum = 6;
            }
            cnumreset();
            acnum = anum + cnum;
            console.log('acnum',acnum)
    }
    cminus.onclick = () => {
        console.log('되라')
        cnum--;
        if(cnum === -1){
            cnum = 0;
        }
        console.log(cnum)
        cnumreset();
        acnum = anum + cnum;
        console.log('acnum',acnum)
    }

    function anumreset(){
        abx.innerHTML = `<p class="adult">${anum}</p>`
    }
    // 최초실행
    anumreset();
    function cnumreset(){
        cbx.innerHTML = `<p class="children">${cnum}</p>`  
    }
    // 최초실행
    cnumreset();
    
    // closebtn 을 누르면 창닫기 기능 시작부분

    const closebtn = document.querySelectorAll('.closebtn');
    console.log(closebtn);
    closebtn.forEach((ele)=>{
        ele.onclick = () => {
            event.preventDefault();
            console.log('안녕')
            for(let x of selbx){
                console.log('x',x)
                setTimeout(()=>{
                    darkoff();
                    // 원하는 클래스에 darkoff만 주면 됨.
                    // x.classList.remove('on');

                },20)
            }
        }
    })
    // closebtn 을 누르면 창닫기 기능 끝 부분


    // 호텔 시설 선택 창 클릭하면 보더 바뀌는 부분 시작부분
    // 대상 sel01_imgbx
    const aaa = document.querySelectorAll('.sel01_imgbx');
    console.log(aaa)
    aaa.forEach((ele)=>{
        ele.onclick = () => {
            console.log('안녕!')
            // 전체 클래스 없애기 
            for(let x of aaa){
                x.classList.remove('border');
            }
            ele.classList.add('border');

            // 누르면 span값 잡기
            let acd = ele.querySelector('span').innerText;
            console.log(acd)

            // 누른 글자값을 넣기!
            // 대상 hotel_sel
            const hotelsel = document.querySelector('.hotel_sel');
            console.log(hotelsel)
            hotelsel.innerText = acd;


        }
    })

    // 호텔 시설 선택 창 클릭하면 보더 바뀌는 부분 끝부분

    
}; ////////// load ////////////////////////


// 우리 성해누나 숙제

// acnum 업데이트 위치를 잘 넣어서
// ㄴ 현재 acnum 정상 작동

// 만약에 acnum이 6이면 anum이나 cnum이 올라가지 않게 한다.
// 어떻게?
// 누르면 ++ 또는 -- 
// 만약 acnum = 6
//   anum = anum-1 , cnum = cnum-1; 