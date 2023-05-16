import mainFn from "./main-center.js";
import imData from "./tempData/mainArea.js";

// 메인 함수실행
$(()=>{///////// jQB //////////////
    mainFn();

}); //////////// jQB //////////////



Vue.component("mcont-comp",{
    template: imData
});

new Vue({
    el:".mcont",
})
