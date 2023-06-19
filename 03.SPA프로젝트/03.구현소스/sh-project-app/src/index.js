// index.js는 public/index.html 페이지에 적용되는 컴포넌트다!
import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter, HashRouter, Routes, Route} from "react-router-dom";
import Main from "./lotte/Main";
import Layout from "./lotte/Layout";
import "./index.css";
import SnDetail from "./lotte/SnDetail";


export default function App(){
    return(
        <BrowserRouter>
            <Routes>
                {/* 중요!!!:레이아웃 컴포넌트를 루트로 잡아준다!!! */} 
                <Route index element={<Main />} />
                <Route path="main" element={<Main />} />
                <Route path="news" element={<News />} />
                <Route path="sndet" element={<SnDetail />} />

            </Routes>
        </BrowserRouter>
    );
} //////////////// App 컴포넌트 //////////////////


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
