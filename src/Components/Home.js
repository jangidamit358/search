import React from "react"
import "../style.css";
import {useState} from "react"
import {Link } from "react-router-dom"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux";
import {addData} from "../Redux/action";
export default function Home() {
const [text,setText]=useState('')
const dispatch = useDispatch();
const handleClick=()=>{
axios.get(`http://localhost:3001/search?q=${text}`)
.then(({data})=>{
  dispatch(addData(data));
  
 })

}
  return (
    <div>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMiA9K0vd8wHQYgvQzUqXjaOxI1kCEz75Xkw&usqp=CAU" />
      <br/>
     <input type="text" className="search-box" onChange={(e)=>setText(e.target.value)}/>
     <br/>
     <br/>
     <Link to="/search"><button onClick={handleClick} >Search</button></Link>
     
    </div>
  );
}
