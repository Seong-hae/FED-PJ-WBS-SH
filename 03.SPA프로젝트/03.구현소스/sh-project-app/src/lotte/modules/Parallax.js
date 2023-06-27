///  Gallery 모듈 - Gallery.js
import $ from "jquery";
import "../css/parallax.css";
// import gallery_data from "../data/gallery";
import { gallery_data } from "../data/gallery";
import { Parallax } from 'react-scroll-parallax';
import { useState } from "react";
import { Link } from "react-router-dom";

// 제이쿼리 로드구역 함수 /////////
function jqFn() {
    $(() => {}); //////// jQB ///////////
} ////////////// jQFn ///////////

function Gallery(props) {
    console.log(gallery_data)
    // 유스스테이트로 원본데이터를 가져오고
    const [by, setBy] = useState(gallery_data)
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
        <div className="gal_paral">
        <Parallax speed={-60}>
          <ul className="gal_leftbox" >
          {copy1.map((v, i) => (
            <li key={i}>
            <Link to="/gallerydetail" state={{
                galname:v.galname,
                galsrc:v.galsrc,
                galperiod:v.galperiod,
                galdate:v.galdate,
                galstore:v.galstore,
                galauthor:v.galauthor,
                }}>
                
                <div className="gal_imgbx">
                <img src={v.galsrc} alt={v.galname} />
                </div>
                <div className="gal_txtbx">
                    <h3>{v.galname}</h3>
                    <div className="gal_store">{v.galstore}</div>
                    <div className="gal_period">{v.galperiod}</div>
                </div>
            </Link>
            </li>
            ))}
          </ul>
          </Parallax>

          <Parallax speed={60}>
          <ul className="gal_leftbox" >
          {copy2.map((v, i) => (
            <li key={i}>
            <Link to="/gallerydetail" state={{
                galname:v.galname,
                galsrc:v.galsrc,
                galperiod:v.galperiod,
                galdate:v.galdate,
                galstore:v.galstore,
                galauthor:v.galauthor,
                }}>
                
                <div className="gal_imgbx">
                <img src={v.galsrc} alt={v.galname} />
                </div>
                <div className="gal_txtbx">
                    <h3>{v.galname}</h3>
                    <div className="gal_store">{v.galstore}</div>
                    <div className="gal_period">{v.galperiod}</div>
                </div>
            </Link>
            </li>
            ))}
          </ul>
          </Parallax>

        </div>
           
        </>
    );
} /////////////////// Gallery //////////////

export default Gallery;