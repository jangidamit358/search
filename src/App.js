import React from "react";
import "./style.css";
import Home from "./Components/Home"
import Search from "./Components/Search"
import {Routes,Route} from "react-router-dom"
export default function App() {
  return (
    <div>
      
     <Routes>
       <Route path="/" element={<Home/>}></Route>
       <Route path="/search" element={<Search/>}></Route>
     
     </Routes>
    </div>
  );
}
