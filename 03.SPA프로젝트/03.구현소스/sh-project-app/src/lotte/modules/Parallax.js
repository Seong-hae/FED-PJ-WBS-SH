///  NewSwipe 모듈 - NewSwipe.js
import $ from "jquery";
import "../css/parallax.css";
import gallery_data from "../data/gallery";
import { Parallax } from 'react-scroll-parallax';
import { useState } from "react";

// 제이쿼리 로드구역 함수 /////////
function jqFn() {
    $(() => {}); //////// jQB ///////////
} ////////////// jQFn ///////////

function Gallery(props) {

    // 유스스테이트로 원본데이터를 가져오고
    const [by, setBy] = useState(gallery_data)
    // 카피본을 만들어서 유즈스테이트 데이터를가져오고
    let copy = [...by.gallery_data]
    // 카피본의 데이터를 바꿔준다 내맘대로 하고싶은대로
    let copy1;
    copy1 = [copy[0],copy[1],copy[2]]
    let copy2;
    copy2 = [copy[3],copy[4],copy[5]]

    console.log(copy1,copy2)


    // 만약 원본데이터를 바꾸고싶다면?
    // setBy(copy)

    console.log('진짜카피',copy)
    

    // props.pg - 페이지별 데이터구분
    // propt.tit - 모듈타이틀
    return (
        <>


           
        </>
    );
} /////////////////// Gallery //////////////

export default Gallery;