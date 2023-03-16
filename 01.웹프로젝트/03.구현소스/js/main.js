window.addEventListener("DOMContentLoaded",()=>{
    const topArea = document.querySelectorAll(".cbx1 li");
    const bottomArea = document.querySelectorAll(".cbx2 .accordion");
    //   1페이지 텍스트박스 - 투명화 대상
    const qwe = document.querySelectorAll('.cont_tbx');
    console.log('qwe',qwe)
    //   console.log(topArea,bottomArea);
    
    topArea.forEach((ele,idx)=>{
        ele.onmouseleave = () => {
            let tg =
            bottomArea[idx];
            tg.style = "";
        //    topArea.forEach(ele=>ele.style.opacity = '1');
        qwe.forEach((ele)=>{
            ele.style.opacity = 1;
        })
        }

        ele.onmouseenter = () => {

        let tg =
        bottomArea[idx];
            // console.log(topArea[0])
        // ele.style.opacity = .7;
        tg.style.left = "0";
        tg.style.width = "100%";
        tg.style.opacity = "1";
        tg.style.transition =' 1s ease-in-out, opacity 0s'
        tg.style.animation ="big 5s ease 2s forwards"
        
        // tg.style.transition = `
        // 1s ease-in-out,
        // opacity 0s, transform none`;

            // topArea.forEach((ele,idx)=>{
            //     console.log(ele)
            //     // ele.style.opacity = 1;
            //     ele.style.opacity = 0.5;
            //     console.log(ele[idx])
            // })

            qwe.forEach((ele)=>{
                ele.style.opacity = .7;
            })
            console.log(ele)
            ele.querySelector('.cont_tbx').style.opacity = 1;
        // if(idx === 0){
        //     topArea[1].style.opacity = 0.5;
        //     topArea[2].style.opacity = 0.5;
        //     topArea[3].style.opacity = 0.5;
        //     topArea[4].style.opacity = 0.5;
        // }
        // else if(idx === 1){
        //     topArea[2].style.opacity = 0.5;
        //     topArea[3].style.opacity = 0.5;
        //     topArea[4].style.opacity = 0.5;
        //     topArea[0].style.opacity = 0.5;
        // }
        // else if(idx === 2){
        //     topArea[0].style.opacity = 0.5;
        //     topArea[1].style.opacity = 0.5;
        //     topArea[3].style.opacity = 0.5;
        //     topArea[4].style.opacity = 0.5;
        // }
        // else if(idx === 3){
        //     topArea[0].style.opacity = 0.5;
        //     topArea[1].style.opacity = 0.5;
        //     topArea[2].style.opacity = 0.5;
        //     topArea[4].style.opacity = 0.5;
        // }
        // else if(idx === 4){
        //     topArea[0].style.opacity = 0.5;
        //     topArea[1].style.opacity = 0.5;
        //     topArea[2].style.opacity = 0.5;
        //     topArea[3].style.opacity = 0.5;
        // }
        
        


        

        

      }; // 마우스 엔터 ////

     

      

       
  }) 


  
});////////// load ////////////////////////