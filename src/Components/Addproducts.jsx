import React from 'react'
import '../Design/Addproducts.css'
import { Link } from "react-router-dom";

export default function Addproducts() {
  return (
    <div id='Adp1'>
      <nav id='Apn1'>ADD PRODUCTS DETAILS</nav>
      <div id='Ap1'>
        <div id='Ap1a'>
         <Link to='/AdminHomepage/Wears'><button className='Apb'>WEARS</button></Link> 
          <button className='Apb' >KITCHEN</button>
          <button className='Apb' >TOYS</button>
        </div>

        <div id='Ap1b'>
          <button className='Apb' >ELECTRONICS</button>
          <button className='Apb' >GADGETS</button>
          <button className='Apb' >COSMETICS</button>
        </div>
        <div id='Ap1c'>

        </div>
      </div>
    </div>
  )
}
