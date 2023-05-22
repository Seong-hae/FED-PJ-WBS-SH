// 뷰엑스 스토어 - 전역뷰데이터 저장소!
import mdata from "./data.js";
import pro_data from "./data_product.js";

/////////////// 뷰엑스 스토어를 활용한 변수 셋팅하기 ////////////
// 1. 뷰엑스 스토어 인스턴스를 생성한다!

const store = new Vuex.Store({
    // (1) 데이터 셋팅구역 :
    state:{
        mdata:mdata,
        pdata:pro_data,
        test:"",
        li1:"",
        li2:"",
        li3:"",
        li4:"",
        li5:"",
        Lighting:["All", "Floor Lamps", "Pendants", "Table Lamps", "Wall Lamps", "XL Pendants"],
        Furniture:["All", "Seating", "Sofa Lounge", "Storage Wardrobe", "Table",],
        Accessories:["All", "Decor", "Rugs", "Throws",],
        subcat:"floorlamps",


    }, /////// state 구역 ///////////

    // (2) 데이터 변경 메서드 구역 : 
    // 호출시 commit()사용!
    mutations:{
        test(state,pm){
            state.test = pm.test
        },
        myFn(dt,pm){
           
        },
        chgSub(dt,pm){
            dt.subcat = pm.replace(" ","").toLowerCase();
            console.log("서브메뉴:",dt.subcat);
        }

    },
    // (3) 백엔관련 코딩 비동기처리 메서드 구역 : 
    // 호출시 dispatch()사용
    actions:{
       
    }
}); /////////// 뷰엑스 인스턴스 ////////


// 내보내기 
export default store;