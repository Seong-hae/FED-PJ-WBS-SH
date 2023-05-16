import mainFn from "./main-center.js";
import store from "./store.js";
import router from "./router.js";


// 메인 함수실행
$(()=>{///////// jQB //////////////
    mainFn();

}); //////////// jQB //////////////



// Vue.component("mcont-comp",{
//     template: imData
// });

new Vue({
    el:".wrap",
    store, // 스토어등록
    router, // 라우터등록
    mounted(){
        // 처음시작시 메인페이지 라우터실행!
        this.$router.push('/main');
    },
}); ///////// Vue 인스턴스 //////
