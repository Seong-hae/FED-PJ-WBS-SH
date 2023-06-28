// 롯데백화점 쇼핑뉴스 페이지 컴포넌트
import React from "react";
import { gallery_data, gallery_product_data } from "./data/gallery";
import "./css/gallery.css";
import GallerySwipe from "./modules/GallerySwipe";
import NewsSwipe from "./modules/NewsSwipe";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
/* 제이쿼리넣기 */
import $ from "jquery";

// 제이쿼리 로드구역 함수 /////////
function jqFn() {}

const Gallery = () => {

    const gpdt = gallery_product_data;

    return(
        <>
            <section className="subpage gallery_sec">

                {/* 1. 문화센터 메인 이미지 */}
                <section className="gal_main">
                    <div className="imgbx">
                        <img src="./images/gallery/gallery_main.jpg" alt="cultureimage"></img>
                    </div>

                    <div className="txtbx">
                        <h2>
                            Premium<br />
                            Art Curator
                        </h2>
                    </div>
                </section>


                {/* 2. 갤러리 상품 페이지 */}
                <section className="gal_product">
                    <h2>#CURATOR’S PICK
                        <span>당신의 일상에 예술을 선물하세요</span>
                    </h2>

                    <ul className="gal_probx">

                    {
                        gpdt.map((v,i)=>
                        <Link to="/galleryproductdetail" key={i}
                            state={{
                                    gproname:v.gproname,
                                    gprosrc:v.gprosrc,
                                    gproauthor:v.gproauthor,
                                    gproprice:v.gproprice,
                                    gproexplanation:v.gproexplanation,
                            }}>
                            <li className="gal_prolist">
                                <div className="imgbx">
                                    <img src={v.gprosrc} alt={v.gprosrc}></img>
                                </div>

                                <div className="txtbx">
                                    <div className="name">{v.gproname}</div>
                                    <div className="author">{v.gproauthor}</div>
                                    <div className="price">{v.gproprice}</div>
                                </div>
                            </li>
                        </Link>
                    )}

                    </ul>

                </section>

                {/* 3. 갤러리 전시 페이지 */}
                <section className="cul_new gal_new">

                    <h2># Exhibition Info
                        
                        <span>진행중인 전시를 지금 확인해보세요</span>
                    </h2>

                    <GallerySwipe />

                </section>

            </section>
        </>
    );

}; /////////////////// Gallery /////////////////

export default Gallery;