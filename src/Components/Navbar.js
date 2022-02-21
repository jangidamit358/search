import React from "react"
import "../style.css"
import {useState} from "react"


import {Link } from "react-router-dom"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux";
import {addData} from "../Redux/action";
export default function Navbar() {
  const [text,setText]=useState('')
  const dispatch = useDispatch();
const handleClick=()=>{
axios.get(`http://localhost:3001/search?q=${text}`)
.then(({data})=>{
  dispatch(addData(data));
  // console.log(data)
  })

}
  return (
    <div>
      <div id="navbar">
      <img id="navbarIcon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMiA9K0vd8wHQYgvQzUqXjaOxI1kCEz75Xkw&usqp=CAU"  />
      <input type="text" onChange={(e)=>setText(e.target.value)} />
      <Link to="/search"><button className="search"  onClick={
        handleClick}>Search</button></Link>
        </div>
     
    </div>
  );
}
