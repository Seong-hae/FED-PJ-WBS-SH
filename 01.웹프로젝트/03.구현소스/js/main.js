window.addEventListener("DOMContentLoaded",()=>{
  const topArea = document.querySelectorAll(".cbx1 li");
  const bottomArea = document.querySelectorAll(".cbx2 .accordion");

  console.log(topArea,bottomArea);

  topArea.forEach((ele,idx)=>{
      ele.onmouseenter = () => {

          let tg =
          bottomArea[idx];

          tg.style.left = "0";
          tg.style.width = "100%";
          tg.style.opacity = "1";
          tg.style.transition = "1s ease-in-out,opacity 0s";


      };

      ele.onmouseleave = () => {
          let tg =
          bottomArea[idx];
          tg.style = "";
      }

  })
});////////// load ////////////////////////