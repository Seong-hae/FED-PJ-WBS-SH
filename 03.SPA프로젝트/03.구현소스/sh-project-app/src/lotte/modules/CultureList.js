///  CultureList 모듈 - CultureList.js
import $ from "jquery";
import "../css/culturelist.css";
// import culture_data from "../data/culture";
import { culture_data } from "../data/culture";
import { useState } from "react";
import { Link } from "react-router-dom";

// 제이쿼리 로드구역 함수 /////////
function jqFn() {
    $(() => {}); //////// jQB ///////////
} ////////////// jQFn ///////////

function CultureList(props) {

    const cd = culture_data;

    // props.pg - 페이지별 데이터구분
    // propt.tit - 모듈타이틀
    return (
        <>
          <ul className="culturebox" >
          {cd.map((v, i) => (
            <li key={i}>
            <Link to="/culturedetail" state={{
                culname:v.culname,
                culsrc:v.culsrc,
                culsrc2:v.culsrc2,
                culperiod:v.culperiod,
                culdate:v.culdate,
                culstore:v.culstore,
                culauthor:v.culauthor,
                culprice:v.culprice,
                }}>
                
                <div className="cul_imgbx">
                <img src={v.culsrc} alt={v.culname} />
                </div>
                <div className="cul_txtbx">
                    <h3>{v.culname}</h3>
                    <div>{v.culstore}</div>
                    <div>{v.culperiod}</div>
                </div>
            </Link>
            </li>
            ))}
          </ul>
        </>
    );
} /////////////////// CultureList //////////////

export default CultureList;