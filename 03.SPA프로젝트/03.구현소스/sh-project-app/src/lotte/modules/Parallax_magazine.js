///  Magazine 모듈 - Parallax_magazine.js
import $ from "jquery";
import "../css/parallax_magazine.css";
import { magazine_data } from "../data/magazine";
import { Parallax } from 'react-scroll-parallax';
import { useState } from "react";
import { Link } from "react-router-dom";

// 제이쿼리 로드구역 함수 /////////
function jqFn() {
    $(() => {}); //////// jQB ///////////
} ////////////// jQFn ///////////

function MagazineParallax(props) {
    console.log(magazine_data)
    // 유스스테이트로 원본데이터를 가져오고
    const [by, setBy] = useState(magazine_data)
    // 카피본을 만들어서 유즈스테이트 데이터를가져오고
    let copy = [...by]
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
        <div className="mag_paral">
        <Parallax speed={30}>
          <ul className="mag_leftbox" >
          {copy1.map((v, i) => (
            <li key={i}>
            <Link to="/magazinedetail" state={{
                magname:v.magname,
                magsrc:v.magsrc,
                magsrc2:v.magsrc2,
                magpro:v.magpro,
                mageditor:v.mageditor,
                magcont:v.magcont,
                }}>
                
                <div className="mag_imgbx">
                <img src={v.magsrc} alt={v.magname} />
                </div>
                <div className="mag_txtbx">
                    <h3>
                        <span>{v.magname.split('^')[0]}</span>
                        {v.magname.split('^')[1]}
                    </h3>
                    <div className="gal_pro">{v.magpro}</div>
                </div>
            </Link>
            </li>
            ))}
          </ul>
          </Parallax>

          <Parallax speed={-20}>
          <ul className="mag_leftbox" >
          {copy2.map((v, i) => (
            <li key={i}>
            <Link to="/magazinedetail" state={{
                magname:v.magname,
                magsrc:v.magsrc,
                magsrc2:v.magsrc2,
                magpro:v.magpro,
                mageditor:v.mageditor,
                magcont:v.magcont,
                }}>
                
                <div className="mag_imgbx">
                <img src={v.magsrc} alt={v.magname} />
                </div>
                <div className="mag_txtbx">
                    <h3>
                        <span>{v.magname.split('^')[0]}</span>
                        {v.magname.split('^')[1]}
                    </h3>
                    <div className="gal_pro">{v.magpro}</div>
                </div>
            </Link>
            </li>
            ))}
          </ul>
          </Parallax>

        </div>
           
        </>
    );
} /////////////////// MagazineParallax //////////////

export default MagazineParallax;