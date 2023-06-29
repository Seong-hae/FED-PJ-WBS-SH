// 롯데백화점 쇼핑뉴스 페이지 컴포넌트
import React, { useEffect, useState } from "react";
import "./css/news.css";
/* 제이쿼리넣기 */
import $ from "jquery";


// 데이터 가져오기
import news_data from "./data/news";
import { Link } from "react-router-dom";


// 제이쿼리 로드구역 함수 /////////
function jqFn() {
    $(() => {
        $('.shoplist li').on('click',function(){
            console.log($(this))
            $('.shoplist li').css({
                backgroundColor : 'white',
                color : 'black'
            })
            $(this).css({
                transition : '.3s',
                backgroundColor : '#333',
                color : 'white'
                
            })
        })

    }); //////// jQB ///////////
} ////////////// jQFn ///////////


// ul>li{그안에 음...food나 무슨 값을 주면....어찍구...될..까 }

const News = () => {


    
    // 데이터 셋팅
    const ndt = news_data;
    // console.log(ndt);

    let [num,setNum] = useState('event') 
    let [ui, setUi] = useState(ndt)
    console.log('ui',ui)
    useEffect(()=>{
        let copy = [...ui]
                console.log("복사본",ui)
                copy =ndt.filter(x => x.alignment == num)
                setUi(copy)
                console.log("바뀐거",ui)
    },[num])   // num이 바뀔때마다 안에있는거 실행
    
    


    return(
        <>
        
            <section className="subpage news_sec">
            {/* 1. 쇼핑정보 페이지 제목 */}
            <h2 className="shoptit">
                #Shop Now
                <span>지금 새로운 소식이 궁금하다면?</span>
            </h2>

            <ul className="shoplist">
                <li onClick={()=>{setNum('event')}}>쇼핑이 즐거운 사은행사</li>
                <li onClick={()=>{setNum('trendy')}}>&#91;pop-up&#93; 잠실만의 트렌디 쇼핑</li>
                <li onClick={()=>{setNum('food')}}>맛있고 행복한 쇼핑 Food AVENUE</li>
                <li onClick={()=>{setNum('issue')}}>&#91;FASHION&#93; 미리준비하는 바캉스룩</li>
            </ul>

            {/* 2. 분류별 쇼핑뉴스 나열 */}

                <div className="news_bottom">

                    {
                        ui.map((v,i)=>
                                <Link to="/newsdetail" key={i}
                                state={{
                                    newname:v.newname,
                                    newdate:v.newdate,
                                    newdesc:v.newdesc,
                                    newstore:v.newstore
                                    }}>
                                <div className="newsbox" >
                                    <div className="nbx_img">
                                        <img src={v.newsrc} alt={v.newname} />
                                    </div>
                                    <div className="nbx_txt">
                                        <h3>
                                            <span>{v.newname.split('^')[0]}</span>
                                            {v.newname.split('^')[1]}
                                        </h3>
                                        <div className="store">{v.newstore}</div>
                                        <div className="date">{v.newdate}</div>
                                    </div>
                                </div>
                            </Link>
                        )
                    }
                </div>
            </section>
            {jqFn()}
        </>
    );

}; /////////////////// News /////////////////

export default News;