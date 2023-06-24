// 롯데백화점 쇼핑뉴스 페이지 컴포넌트
import React from "react";
import { useState } from "react";
import "./css/news.css";
/* 제이쿼리넣기 */
import $ from "jquery";

// 데이터 가져오기
import news_data from "./data/news";
import { Link } from "react-router-dom";


// 제이쿼리 로드구역 함수 /////////
function jqFn() {
    $(() => {}); //////// jQB ///////////
} ////////////// jQFn ///////////


// ul>li{그안에 음...food나 무슨 값을 주면....어찍구...될..까 }

const News = () => {
    // 데이터 셋팅
    const ndt = news_data;
    // console.log(ndt);
    const [newndt , setNewndt] = useState(ndt)
    const [aa,setAa] = useState(0);


    const sch = (e) => {
        console.log(e)
        let keyword = e;
        // 첫번째li부터 q  w e r 
        
        let result = ndt.filter((value)=>
        value.alignment == keyword
    )

        console.log(result[0].newdate)

        let a = `
        <div className="newsbox" >
                        <div className="nbx_img">
                            {/* <img src=${result[0].newsrc} /> */}
                        </div>
                        <div className="nbx_txt">
                            <h3>
                                {/* <span>${result[0].newname.split('^')[0]}</span> */}
                                {/* ${result[0].newname.split('^')[1]} */}
                            </h3>
                            {/* <div className="store">${result[0].newdesc}</div> */}
                            {/* <div className="date">${result[0].newdate}</div> */}
                        </div>
                    </div>
        `
        $('.asd').html(a)



    }

    

    return(
        <>
        
            <section className="subpage news_sec">
            {/* 1. 쇼핑정보 페이지 제목 */}
            <h2 className="shoptit">
                #Shop Now
                <span>지금 새로운 소식이 궁금하다면?</span>
            </h2>

            <ul className="shoplist">
                <li  onClick={()=>{sch('event')}}>쇼핑이 즐거운 사은행사</li>
                <li   onClick={()=>{sch('food')}}>&#91;pop-up&#93; 잠실만의 트렌디 쇼핑</li>
                <li  onClick={()=>{sch('trendy')}}>맛있고 행복한 쇼핑 Food AVENUE</li>
                <li  onClick={()=>{sch('issue')}}>&#91;FASHION&#93; 미리준비하는 바캉스룩</li>
            </ul>

            {/* 2. 분류별 쇼핑뉴스 나열 */}


            <div className="asd">

            </div>

                    <Link to="/newsdetail" >
                    <div className="newsbox" >
                        <div className="nbx_img">
                            {/* <img src={v.newsrc} alt={v.newname} /> */}
                        </div>
                        <div className="nbx_txt">
                            <h3>
                                {/* <span>{v.newname.split('^')[0]}</span> */}
                                {/* {v.newname.split('^')[1]} */}
                            </h3>
                            {/* <div className="store">{v.newstore}</div> */}
                            {/* <div className="date">{v.newdate}</div> */}
                        </div>
                    </div>
                </Link>
                <Link to="/main">
                    <div className="asd"></div>
                </Link>
                
            </section>
        </>
    );

}; /////////////////// News /////////////////

export default News;