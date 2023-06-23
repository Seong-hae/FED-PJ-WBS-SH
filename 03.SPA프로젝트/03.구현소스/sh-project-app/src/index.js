// index.js는 public/index.html 페이지에 적용되는 컴포넌트다!
import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter, HashRouter, Routes, Route} from "react-router-dom";
import Main from "./lotte/Main";
import Layout from "./lotte/Layout";
import "./index.css";
import Member from "./lotte/Member";
import LogIn from "./lotte/LogIn";
import News from "./lotte/News"
import NewsDetail from "./lotte/NewsDetail";
import Gallery from "./lotte/Gallery";
import Culture from "./lotte/Culture";
import Magazine from "./lotte/Magazine";
import Service from "./lotte/Service";


export default function App(){
    return(
        <BrowserRouter>
            <Routes>
                    {/* 중요!!!:레이아웃 컴포넌트를 루트로 잡아준다!!! */} 
                <Route path="/" element={<Layout />}>
                    <Route index element={<Main />} />
                    <Route path="mem" element={<Member />} />
                    <Route path="login" element={<LogIn />} />
                    <Route path="news" element={<News />} />
                    <Route path="gallery" element={<Gallery />} />
                    <Route path="culture" element={<Culture />} />
                    <Route path="magazine" element={<Magazine />} />
                    <Route path="service" element={<Service />} />
                    <Route path="newsdetail" element={<NewsDetail />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
} //////////////// App 컴포넌트 //////////////////


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
