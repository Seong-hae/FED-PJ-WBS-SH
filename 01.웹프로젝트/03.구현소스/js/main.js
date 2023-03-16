window.addEventListener("DOMContentLoaded", () => {
    const topArea = document.querySelectorAll(".cbx1 li");
    const bottomArea = document.querySelectorAll(".cbx2 .accordion");
    //   1페이지 텍스트박스 - 투명화 대상
    const qwe = document.querySelectorAll(".cont_tbx");
    console.log("qwe", qwe);
    //   console.log(topArea,bottomArea);

    topArea.forEach((ele, idx) => {
        ele.onmouseleave = () => {
            let tg = bottomArea[idx];
            tg.style = "";
            // 타임아웃매번 지운다!
            clearTimeout(aniSetT);
            qwe.forEach((ele) => {
                ele.style.opacity = 1;
            });
        };

        let aniSetT;

        ele.onmouseenter = () => {
            let tg = bottomArea[idx];
            tg.style.left = "0";
            tg.style.width = "100%";
            tg.style.opacity = "1";
            tg.style.transition = " 1s ease-in-out, opacity 0s";
            // 타임아웃매번 지운다!
            clearTimeout(aniSetT);
            aniSetT = setTimeout(() => (tg.style.animation = "big 5s ease forwards"), 2000);

            qwe.forEach((ele) => {
                ele.style.opacity = 0.7;
            });
            console.log(ele);
            ele.querySelector(".cont_tbx").style.opacity = 1;
        }; // 마우스 엔터 ////
    });

}); ////////// load ////////////////////////
