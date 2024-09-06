import React, { useState } from 'react'
import '../Design/Profilepage.css'
import { Link, useNavigate } from "react-router-dom";


export default function Profilepage() {
let[Username,setusername]=useState("")
let[Password,setpassword]=useState("")

let navigate=useNavigate("")
function check() {
if (Username=="Admin" && Password=="Admin@123") {
  alert("Login Successfull")
navigate('/AdminHomepage')
}
else{
  alert("Login Failed")
}
}
  
  return (
    <div id='pd'>
      <div id='pd1'>
        <h3 id='hs'>Sign Up</h3>
        <form action="">
          <label htmlFor="">Username</label>
          <input className='in' type="text"  value={Username} onChange={(e)=>{setusername(e.target.value)}} placeholder='Enter Your Username' required />
          <label htmlFor="">Password</label>
          <input className='in' type="password" value={Password} onChange={(e)=>{setpassword(e.target.value)}} placeholder='Enter your Password' required  />
          <button id='b3'onClick={check}>Login</button>
          <div id='pd2'>
          <Link to='/Forgetpassword'><span>Forget Password?</span></Link>
          <Link to='/NewRegister'><span>New Register</span></Link>
          </div>
        </form>
      </div>
    </div>
  )
}

