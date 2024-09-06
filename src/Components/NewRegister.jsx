import React, { useState } from 'react'
import '../Design/Newregister.css'
import axios from "axios"

export default function NewRegister() {

  let [Name, setname] = useState("")
  let [Email, setemail] = useState("")
  let [DOB, setdob] = useState("")
  let [Username, setusername] = useState("")
  let [Password, setpassword] = useState("")
  let [Mobile, setmobile] = useState("")

  let data = { Name, Email, DOB, Username, Password, Mobile }

  function Addprofiles(e) {
    e.preventDefault();
    axios.post('http://localhost:1000/Newregister', data)
      .then((res) => {
        console.log(res);
        alert("Sucessfully login Creditinal Add")
      })

      .catch((err) => {
        console.log(err);
        alert("Data not Add")
      })
  }


  return (
    <div>
      <nav id='Nrn'>
        NEW REGISTER FORM
      </nav>

      <div id='Nr1'>
        <div id='Nr1a'>
          <form onSubmit={Addprofiles} action="">
            <label className='Nrl' htmlFor="">Name:</label>
            <input className='Nri' type="text" value={Name} onChange={(e) => { setname(e.target.value) }} placeholder='Enter Your Name' required />
            <br />
            <label className='Nrl' htmlFor="">E-mail:</label>
            <input className='Nri' type="email" value={Email} onChange={(e) => { setemail(e.target.value) }} placeholder='Enter Your E-mail Address' required />
            <br />
            <label className='Nrl' htmlFor="">DOB:</label>
            <input className='Nri' value={DOB} onChange={(e) => { setdob(e.target.value) }} type="date" required />
            <br />
            <label className='Nrl' htmlFor="">Username:</label>
            <input className='Nri' type="text" value={Username} onChange={(e) => { setusername(e.target.value) }} placeholder='Create a Username' required />
            <br />
            <label className='Nrl' htmlFor="">Password:</label>
            <input className='Nri' type="password" maxLength={'4'} value={Password} onChange={(e)=>{setpassword(e.target.value)}} placeholder='Create a Password' required />
            <br />
            <label className='Nrl' htmlFor="">Mobile Number:</label>
            <input className='Nri' type="tel" minLength='10' value={Mobile} onChange={(e)=>{setmobile(e.target.value)}} placeholder='Enter your Mobile Number' required />
            <br />
            <button className='Nrbu'>Submit</button>
            <button className='Nrbu'>Clear</button>
          </form>
        </div>
        <div id='Nr1b'>
          <img id='Nrimg' src="/images/logo.png" alt="" />
        </div>
      </div>
    </div>
  )
}
