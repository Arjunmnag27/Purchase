import React, { useEffect, useState } from 'react'
import '../Design/AdminNavbar.css'
import { Link } from "react-router-dom";
import axios from 'axios';

export default function AdminNavbar() {

  return (
    <div id='Ad5'>
      <nav id='Adn1'>
        <div id='Adnd1'>

        </div>
        <div id='Adnd2'>
          <img id='Ahpni1' src="/images/logo.png" alt="" />
          <span id='Ahps1'>Purchase</span>
        </div>
        <div id='Adnd3'>
          <button id='Ahpndb1'>
            <div id='Ahpndbd1'>
              <Link className='Ahpndbdl' to='/AdminHomepage/Updateprofile'><span>Update Profie </span></Link>
              <br />
              <Link className='Ahpndbdl' to='/Profilepage'><span>Sign Out</span></Link>
            </div>
          </button>
        </div>







        {/* <div className='Ahpnd1'>
        </div>
        <div className='Ahpnd1'>
          <div id='Ahpnd1a'>
            <img id='Ahpni1' src="/images/logo.png" alt="" />
          </div>
          <div id='Ahpnd1b'>
            <h1 id='Ahpnh1'>Purchase</h1>
          </div>
        </div>
        <div className='Ahpnd1'>
          <button id='Ahpndb1'>
            <div id='Ahpndbd1'>
              <Link className='Ahpndbdl' to='/AdminHomepage/Updateprofile'><span>Update Profie </span></Link>
              <br />
              <Link className='Ahpndbdl' to='/Profilepage'><span>Sign Out</span></Link>
            </div>
          </button>
        </div> */}
      </nav>
    </div>
  )
}
