// index.js는 public/index.html 페이지에 적용되는 컴포넌트다!
import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Main from "./lotte/Main";
import Layout from "./lotte/Layout";
import "./index.css";
import ScrollTop from "./lotte/common/ScrollTop";


export default function App(){
    return(
        <BrowserRouter>
        {/* 라우터 갱신될 때 스크롤 상단이동 모듈작동함! */}
            <ScrollTop />
            <Routes>
               {/* 중요!!!:레이아웃 컴포넌트를 루트로 잡아준다!!! */} 
               <Route path="/" element={<Layout />}>
                    {/* <Route index element={<Main />} /> */}
               </Route>

            </Routes>
        </BrowserRouter>
    );
} //////////////// App 컴포넌트 //////////////////


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
