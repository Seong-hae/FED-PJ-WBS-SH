import mainFn from "./main-center.js";
import store from "./store.js";
import router from "./router.js";
import imData from "./tempData/mainArea.js";


// 메인 함수실행
$(()=>{///////// jQB //////////////
    mainFn();

}); //////////// jQB //////////////



Vue.component("top-comp",{
    template: imData.top
});

new Vue({
    el:".wrap",
    store, // 스토어등록
    router, // 라우터등록
    mounted(){
        // 처음시작시 메인페이지 라우터실행!
        this.$router.push('/main');
        
    },
    methods:{
        myFn(pm){
            console.log(pm)
        }
    }
}); ///////// Vue 인스턴스 //////
