import React from "react"
import Navbar from "./Navbar"
import "../style.css"
import { useDispatch, useSelector } from "react-redux";
export default function Search() {
  let data=useSelector((store) => store);
  // data=data.payload
  console.log("aa",data)
  return (
    <div>
      <Navbar/>
   
     <div id="sortDiv">
       <button id="sort-alphabetically">sort A-Z </button>
       <button id="sort-alphabetically-desc">sort Z-A</button>
       <button id="sort-by-date">sort-by-date (asc)</button>
       <button id="sort-by-date-desc">sort-by-date (desc)</button>
       <button id="sort-by-quality">sort-by-quality (asc)</button>
       <button id="sort-by-quality-desc">sort-by-quality (desc)</button>
       <button id="filter-explicit">filter-explicit</button>
     </div>
     <div id="search-result">
       {
  
      //    data.map((e)=>{
      //       <>
      //        <div className="result ">


      //  </div>
      //      {console.log(e.title)}
          //  </>
         }
       



      
     </div>
     <h1>search!</h1>
    </div>
  );
}
